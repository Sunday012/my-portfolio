import type { Metadata } from "next";
import Link from "next/link";
import { getBlogAdmin } from "@/lib/blog-admin";
import { getAdminBlogPosts } from "@/lib/blog-store";
import { blogAdminEmail, isSupabaseConfigured } from "@/lib/supabase/config";
import { loginToBlog, logoutOfBlog } from "./actions";

export const metadata: Metadata = {
  title: "Blog editor | Favour Sunday",
  robots: { index: false, follow: false },
};

export const dynamic = "force-dynamic";

type AdminBlogPageProps = {
  searchParams: Promise<{ error?: string; saved?: string }>;
};

export default async function AdminBlogPage({ searchParams }: AdminBlogPageProps) {
  const query = await searchParams;

  if (!isSupabaseConfigured) {
    return (
      <AdminShell>
        <p className="font-mono text-xs uppercase tracking-[0.16em] text-neutral-500">
          Setup required
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight">
          Connect Supabase to enable editing.
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-neutral-600">
          Add the Supabase environment values and run the included database
          migration. The public blog will keep using its current articles until
          then.
        </p>
      </AdminShell>
    );
  }

  const admin = await getBlogAdmin();
  if (!admin) {
    return (
      <AdminShell>
        <div className="mx-auto max-w-md">
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-neutral-500">
            Private editor
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight">Sign in</h1>
          <p className="mt-4 leading-7 text-neutral-600">
            This page is restricted to {blogAdminEmail}.
          </p>
          {query.error ? (
            <p className="mt-6 border border-red-300 bg-red-50 px-4 py-3 text-sm text-red-800">
              The password was not accepted. Try again.
            </p>
          ) : null}
          <form action={loginToBlog} className="mt-8">
            <label>
              <span className="text-sm font-semibold">Password</span>
              <input
                type="password"
                name="password"
                autoComplete="current-password"
                required
                className="mt-2 w-full border border-neutral-300 px-4 py-3 outline-none focus:border-neutral-950"
              />
            </label>
            <button className="mt-5 w-full bg-neutral-950 px-5 py-3 font-semibold text-white hover:bg-neutral-800">
              Open editor
            </button>
          </form>
        </div>
      </AdminShell>
    );
  }

  const posts = await getAdminBlogPosts();

  return (
    <AdminShell>
      <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-neutral-500">
            Private editor
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
            Blog articles
          </h1>
        </div>
        <div className="flex gap-3">
          <Link
            href="/admin/blog/new"
            className="bg-neutral-950 px-5 py-3 text-sm font-semibold text-white hover:bg-neutral-800"
          >
            New article
          </Link>
          <form action={logoutOfBlog}>
            <button className="border border-neutral-300 px-5 py-3 text-sm font-semibold hover:border-neutral-950">
              Sign out
            </button>
          </form>
        </div>
      </div>

      {query.saved ? (
        <p className="mt-8 border border-emerald-300 bg-emerald-50 px-4 py-3 text-sm text-emerald-900">
          Article saved successfully.
        </p>
      ) : null}

      <div className="mt-10 border-t border-neutral-300">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/admin/blog/${post.slug}`}
            className="grid gap-3 border-b border-neutral-300 py-6 hover:bg-neutral-50 sm:grid-cols-[1fr_auto] sm:items-center sm:px-4"
          >
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.12em] text-neutral-500">
                {post.category} · {post.publishedAt}
              </p>
              <h2 className="mt-2 text-xl font-semibold">{post.title}</h2>
            </div>
            <span className="text-sm font-semibold">
              {post.published === false ? "Draft" : "Edit"} →
            </span>
          </Link>
        ))}
      </div>
    </AdminShell>
  );
}

function AdminShell({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen bg-[#eef3f1] px-5 py-12 text-neutral-950 sm:px-8 sm:py-20">
      <div className="mx-auto w-full max-w-4xl border border-neutral-300 bg-white p-6 shadow-sm sm:p-10">
        <Link
          href="/blog"
          className="mb-10 inline-block text-sm font-semibold underline decoration-neutral-300 underline-offset-4 hover:decoration-neutral-950"
        >
          Back to blog
        </Link>
        {children}
      </div>
    </main>
  );
}
