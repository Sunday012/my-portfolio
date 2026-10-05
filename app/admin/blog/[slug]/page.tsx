import type { Metadata } from "next";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { BlogPostEditor } from "@/components/BlogPostEditor";
import { getBlogAdmin } from "@/lib/blog-admin";
import { getAdminBlogPost } from "@/lib/blog-store";
import { isSupabaseConfigured } from "@/lib/supabase/config";

export const metadata: Metadata = {
  title: "Edit article | Favour Sunday",
  robots: { index: false, follow: false },
};

export const dynamic = "force-dynamic";

type EditorPageProps = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ error?: string }>;
};

export default async function EditorPage({ params, searchParams }: EditorPageProps) {
  if (!isSupabaseConfigured || !(await getBlogAdmin())) {
    redirect("/admin/blog");
  }

  const { slug } = await params;
  const query = await searchParams;
  const post = slug === "new" ? undefined : await getAdminBlogPost(slug);

  if (slug !== "new" && !post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#eef3f1] px-5 py-10 text-neutral-950 sm:px-8 sm:py-16">
      <div className="mx-auto w-full max-w-4xl border border-neutral-300 bg-white p-6 shadow-sm sm:p-10">
        <Link
          href="/admin/blog"
          className="text-sm font-semibold underline decoration-neutral-300 underline-offset-4 hover:decoration-neutral-950"
        >
          Back to articles
        </Link>
        <div className="mb-10 mt-8 border-b border-neutral-300 pb-7">
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-neutral-500">
            {post ? "Edit article" : "New article"}
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-5xl">
            {post?.title ?? "Write something useful."}
          </h1>
        </div>
        <BlogPostEditor post={post} error={query.error} />
      </div>
    </main>
  );
}
