import { createClient } from "@supabase/supabase-js";
import { blogPosts as fileBlogPosts, type BlogPost, type BlogSection } from "./blog-data";
import {
  isSupabaseConfigured,
  supabasePublishableKey,
  supabaseUrl,
} from "./supabase/config";
import { createSupabaseServerClient } from "./supabase/server";

type BlogPostRow = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  published_at: string;
  read_time: string;
  image_src: string | null;
  image_alt: string | null;
  sections: unknown;
  published: boolean;
};

function isStringArray(value: unknown): value is string[] {
  return Array.isArray(value) && value.every((item) => typeof item === "string");
}

export function isBlogSections(value: unknown): value is BlogSection[] {
  return (
    Array.isArray(value) &&
    value.length > 0 &&
    value.every(
      (section) =>
        typeof section === "object" &&
        section !== null &&
        typeof (section as BlogSection).heading === "string" &&
        isStringArray((section as BlogSection).paragraphs) &&
        ((section as BlogSection).bullets === undefined ||
          isStringArray((section as BlogSection).bullets)),
    )
  );
}

function formatPublishedDate(isoDate: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${isoDate}T00:00:00Z`));
}

function rowToBlogPost(row: BlogPostRow): BlogPost | null {
  if (!isBlogSections(row.sections)) {
    return null;
  }

  return {
    slug: row.slug,
    title: row.title,
    excerpt: row.excerpt,
    category: row.category,
    publishedAt: formatPublishedDate(row.published_at),
    isoDate: row.published_at,
    readTime: row.read_time,
    image:
      row.image_src && row.image_alt
        ? { src: row.image_src, alt: row.image_alt }
        : undefined,
    sections: row.sections,
    published: row.published,
  };
}

function mergePosts(
  databasePosts: BlogPost[],
  includeDrafts = false,
  hiddenSlugs: string[] = [],
) {
  const posts = new Map<string, BlogPost>(
    fileBlogPosts.map((post) => [post.slug, { ...post, published: true }]),
  );

  hiddenSlugs.forEach((slug) => posts.delete(slug));

  databasePosts.forEach((post) => {
    if (includeDrafts || post.published) {
      posts.set(post.slug, post);
    }
  });

  return [...posts.values()]
    .filter((post) => includeDrafts || post.published !== false)
    .sort((a, b) => b.isoDate.localeCompare(a.isoDate));
}

async function getDatabasePosts(includeDrafts: boolean) {
  if (!isSupabaseConfigured || !supabaseUrl || !supabasePublishableKey) {
    return [];
  }

  const supabase = includeDrafts
    ? await createSupabaseServerClient()
    : createClient(supabaseUrl, supabasePublishableKey, {
        auth: {
          autoRefreshToken: false,
          detectSessionInUrl: false,
          persistSession: false,
        },
      });

  let query = supabase
    .from("blog_posts")
    .select(
      "slug,title,excerpt,category,published_at,read_time,image_src,image_alt,sections,published",
    )
    .order("published_at", { ascending: false });

  if (!includeDrafts) {
    query = query.eq("published", true);
  }

  const { data, error } = await query;
  if (error) {
    console.error("Could not load Supabase blog posts:", error.message);
    return [];
  }

  return (data as BlogPostRow[])
    .map(rowToBlogPost)
    .filter((post): post is BlogPost => post !== null);
}

export async function getPublishedBlogPosts() {
  if (!isSupabaseConfigured || !supabaseUrl || !supabasePublishableKey) {
    return mergePosts([]);
  }

  const supabase = createClient(supabaseUrl, supabasePublishableKey, {
    auth: {
      autoRefreshToken: false,
      detectSessionInUrl: false,
      persistSession: false,
    },
  });
  const { data } = await supabase
    .from("blog_post_statuses")
    .select("slug,published")
    .eq("published", false);
  const hiddenSlugs = (data ?? []).map((post) => post.slug as string);

  return mergePosts(await getDatabasePosts(false), false, hiddenSlugs);
}

export async function getPublishedBlogPost(slug: string) {
  return (await getPublishedBlogPosts()).find((post) => post.slug === slug);
}

export async function getAdminBlogPosts() {
  return mergePosts(await getDatabasePosts(true), true);
}

export async function getAdminBlogPost(slug: string) {
  return (await getAdminBlogPosts()).find((post) => post.slug === slug);
}
