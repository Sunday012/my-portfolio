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
  const [latestPost, ...olderPosts] = blogPosts;

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
          </div>
        </header>

        {latestPost ? (
          <section className="border-b border-neutral-200 bg-[#eef3f1] py-16 sm:py-20">
            <div className="mx-auto w-full max-w-5xl px-5 sm:px-8">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-neutral-500">
                Latest
              </p>
              <Link
                href={`/blog/${latestPost.slug}`}
                className="group mt-6 grid gap-8 lg:grid-cols-[minmax(0,1.5fr)_minmax(15rem,0.65fr)] lg:items-end"
              >
                <div>
                  <p className="font-mono text-xs font-medium uppercase tracking-[0.16em] text-neutral-500">
                    {latestPost.category}
                  </p>
                  <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight group-hover:underline group-hover:decoration-neutral-400 group-hover:underline-offset-4 sm:text-5xl sm:leading-[1.1]">
                    {latestPost.title}
                  </h2>
                  <p className="mt-5 max-w-2xl text-lg leading-8 text-neutral-600">
                    {latestPost.excerpt}
                  </p>
                </div>
                <div className="border-l border-neutral-300 pl-6 text-sm text-neutral-500">
                  <time dateTime={latestPost.isoDate}>
                    {latestPost.publishedAt}
                  </time>
                  <p className="mt-1">{latestPost.readTime}</p>
                  <p className="mt-6 font-semibold text-neutral-950 transition group-hover:translate-x-1">
                    Read article →
                  </p>
                </div>
              </Link>
            </div>
          </section>
        ) : null}

        <section className="mx-auto w-full max-w-5xl px-5 py-16 sm:px-8 sm:py-20">
          <div className="mb-8 flex items-center justify-between border-b border-neutral-200 pb-4">
            <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-neutral-500">
              Earlier posts
            </h2>
            <span className="text-sm text-neutral-500">
              {olderPosts.length} {olderPosts.length === 1 ? "post" : "posts"}
            </span>
          </div>

          <div>
            {olderPosts.map((post) => (
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
