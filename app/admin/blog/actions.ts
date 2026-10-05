"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { getBlogAdmin } from "@/lib/blog-admin";
import { isBlogSections } from "@/lib/blog-store";
import { blogAdminEmail, isSupabaseConfigured } from "@/lib/supabase/config";
import { createSupabaseServerClient } from "@/lib/supabase/server";

function textField(formData: FormData, name: string) {
  const value = formData.get(name);
  return typeof value === "string" ? value.trim() : "";
}

export async function loginToBlog(formData: FormData) {
  if (!isSupabaseConfigured) {
    redirect("/admin/blog?error=configuration");
  }

  const password = textField(formData, "password");
  if (!password) {
    redirect("/admin/blog?error=credentials");
  }

  const supabase = await createSupabaseServerClient();
  const { data, error } = await supabase.auth.signInWithPassword({
    email: blogAdminEmail,
    password,
  });

  if (
    error ||
    !data.user.email ||
    data.user.email.toLowerCase() !== blogAdminEmail
  ) {
    await supabase.auth.signOut();
    redirect("/admin/blog?error=credentials");
  }

  redirect("/admin/blog");
}

export async function logoutOfBlog() {
  if (isSupabaseConfigured) {
    const supabase = await createSupabaseServerClient();
    await supabase.auth.signOut();
  }

  redirect("/admin/blog");
}

export async function saveBlogPost(formData: FormData) {
  const admin = await getBlogAdmin();
  if (!admin) {
    redirect("/admin/blog?error=unauthorized");
  }

  const slug = textField(formData, "slug").toLowerCase();
  const title = textField(formData, "title");
  const excerpt = textField(formData, "excerpt");
  const category = textField(formData, "category");
  const publishedAt = textField(formData, "publishedAt");
  const readTime = textField(formData, "readTime");
  const imageSrc = textField(formData, "imageSrc");
  const imageAlt = textField(formData, "imageAlt");
  const published = formData.get("published") === "on";
  const sectionsValue = textField(formData, "sections");

  let sections: unknown;
  try {
    sections = JSON.parse(sectionsValue);
  } catch {
    redirect(`/admin/blog/${encodeURIComponent(slug || "new")}?error=sections`);
  }

  const isValidSlug = /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug);
  const isValidDate = /^\d{4}-\d{2}-\d{2}$/.test(publishedAt);
  const isValidImage = !imageSrc || imageSrc.startsWith("/");

  if (
    !isValidSlug ||
    !title ||
    !excerpt ||
    !category ||
    !isValidDate ||
    !readTime ||
    !isValidImage ||
    (imageSrc && !imageAlt) ||
    !isBlogSections(sections)
  ) {
    redirect(`/admin/blog/${encodeURIComponent(slug || "new")}?error=fields`);
  }

  const supabase = await createSupabaseServerClient();
  const { error } = await supabase.from("blog_posts").upsert(
    {
      slug,
      title,
      excerpt,
      category,
      published_at: publishedAt,
      read_time: readTime,
      image_src: imageSrc || null,
      image_alt: imageAlt || null,
      sections,
      published,
    },
    { onConflict: "slug" },
  );

  if (error) {
    console.error("Could not save blog post:", error.message);
    redirect(`/admin/blog/${encodeURIComponent(slug)}?error=save`);
  }

  revalidatePath("/");
  revalidatePath("/blog");
  revalidatePath(`/blog/${slug}`);
  redirect("/admin/blog?saved=1");
}
