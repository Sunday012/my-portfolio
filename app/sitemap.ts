import type { MetadataRoute } from "next";
import { getPublishedBlogPosts } from "@/lib/blog-store";
import { portfolioVideos } from "@/lib/portfolio-data";
import { absoluteUrl } from "@/lib/site-config";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getPublishedBlogPosts();
  const latestArticleDate = posts[0]?.isoDate ?? "2026-10-05";

  return [
    {
      url: absoluteUrl("/"),
      lastModified: latestArticleDate,
      changeFrequency: "weekly",
      priority: 1,
      images: [absoluteUrl("/images/my-pfp.jpeg")],
    },
    {
      url: absoluteUrl("/blog"),
      lastModified: latestArticleDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...posts.map((post) => ({
      url: absoluteUrl(`/blog/${post.slug}`),
      lastModified: post.isoDate,
      changeFrequency: "monthly" as const,
      priority: 0.8,
      images: post.image ? [absoluteUrl(post.image.src)] : undefined,
    })),
    ...portfolioVideos.map((video) => ({
      url: absoluteUrl(`/watch/${video.id}`),
      lastModified: "2026-10-05",
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...["books", "movies", "music"].map((path) => ({
      url: absoluteUrl(`/${path}`),
      lastModified: "2026-10-05",
      changeFrequency: "monthly" as const,
      priority: 0.5,
    })),
  ];
}
