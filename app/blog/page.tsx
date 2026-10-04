import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { blogPosts } from "@/lib/blog-data";

export const metadata: Metadata = {
  title: "Blog | Favour Sunday",
  description:
    "Notes from Favour Sunday on fullstack engineering, AI systems, developer tools, healthcare software, and product craft.",
};

export default function BlogPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-neutral-950">
      <Nav />
      <main className="flex-1">
        <header className="border-b border-neutral-800 bg-neutral-950 py-20 text-white sm:py-28">
          <div className="mx-auto w-full max-w-5xl px-5 sm:px-8">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-300">
              Writing
            </p>
            <h1 className="mt-4 text-5xl font-semibold tracking-tight sm:text-7xl">
              Notes from the work.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-300">
              Practical writing about building fullstack products, AI systems,
              developer tools, healthcare workflows, and interfaces that make
              complicated software easier to use.
            </p>
          </div>
        </header>

        <section className="mx-auto w-full max-w-5xl px-5 py-16 sm:px-8 sm:py-20">
          <div className="mb-8 flex items-center justify-between border-b border-neutral-200 pb-4">
            <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-neutral-500">
              All posts
            </h2>
            <span className="text-sm text-neutral-500">
              {blogPosts.length} {blogPosts.length === 1 ? "post" : "posts"}
            </span>
          </div>

          <div>
            {blogPosts.map((post) => (
              <article key={post.slug} className="border-b border-neutral-200 py-8">
                <Link href={`/blog/${post.slug}`} className="group grid gap-5 sm:grid-cols-[10rem_1fr_auto] sm:gap-8">
                  <div className="text-sm text-neutral-500">
                    <time dateTime={post.isoDate}>{post.publishedAt}</time>
                    <p className="mt-1">{post.readTime}</p>
                  </div>
                  <div>
                    <p className="font-mono text-xs font-medium uppercase tracking-[0.16em] text-neutral-500">
                      {post.category}
                    </p>
                    <h3 className="mt-2 text-2xl font-semibold tracking-tight group-hover:underline group-hover:decoration-neutral-400 group-hover:underline-offset-4 sm:text-3xl">
                      {post.title}
                    </h3>
                    <p className="mt-3 max-w-2xl text-base leading-7 text-neutral-600">
                      {post.excerpt}
                    </p>
                  </div>
                  <span className="hidden text-2xl text-neutral-400 transition group-hover:translate-x-1 group-hover:text-neutral-950 sm:block">
                    →
                  </span>
                </Link>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
