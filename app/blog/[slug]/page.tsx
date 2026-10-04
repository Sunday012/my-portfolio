import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { blogPosts, getBlogPost } from "@/lib/blog-data";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return { title: "Post not found | Favour Sunday" };
  }

  return {
    title: `${post.title} | Favour Sunday`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.isoDate,
      images: [],
    },
    twitter: {
      card: "summary",
      title: post.title,
      description: post.excerpt,
      images: [],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="flex min-h-screen flex-col bg-white text-neutral-950">
      <Nav />
      <main className="flex-1">
        <article>
          <header className="border-b border-neutral-200 bg-[#eef3f1] py-16 sm:py-24">
            <div className="mx-auto w-full max-w-3xl px-5 sm:px-8">
              <Link
                href="/blog"
                className="text-sm font-semibold text-neutral-600 underline decoration-neutral-300 underline-offset-4 hover:text-neutral-950 hover:decoration-neutral-950"
              >
                Back to all posts
              </Link>
              <p className="mt-10 font-mono text-xs font-medium uppercase tracking-[0.16em] text-neutral-500">
                {post.category}
              </p>
              <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-6xl sm:leading-[1.08]">
                {post.title}
              </h1>
              <p className="mt-6 text-lg leading-8 text-neutral-600">
                {post.excerpt}
              </p>
              <div className="mt-7 flex flex-wrap items-center gap-x-3 text-sm text-neutral-500">
                <span>Favour Sunday</span>
                <span aria-hidden="true">·</span>
                <time dateTime={post.isoDate}>{post.publishedAt}</time>
                <span aria-hidden="true">·</span>
                <span>{post.readTime}</span>
              </div>
            </div>
          </header>

          {post.image ? (
            <div className="mx-auto w-full max-w-5xl px-5 pt-10 sm:px-8 sm:pt-14">
              <Image
                src={post.image.src}
                alt={post.image.alt}
                width={1672}
                height={941}
                priority
                className="aspect-video w-full rounded-lg border border-neutral-800 bg-neutral-950 object-cover shadow-[0_24px_70px_rgba(0,0,0,0.16)]"
              />
            </div>
          ) : null}

          <div className="mx-auto w-full max-w-3xl px-5 py-14 sm:px-8 sm:py-20">
            <div className="space-y-12">
              {post.sections.map((section) => (
                <section key={section.heading}>
                  <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                    {section.heading}
                  </h2>
                  <div className="mt-5 space-y-5 text-[1.05rem] leading-8 text-neutral-700">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                    {section.bullets ? (
                      <ul className="list-disc space-y-2 pl-6 marker:text-neutral-400">
                        {section.bullets.map((bullet) => (
                          <li key={bullet}>{bullet}</li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                </section>
              ))}
            </div>

            <div className="mt-16 border-t border-neutral-200 pt-8">
              <Link
                href="/blog"
                className="text-sm font-semibold underline decoration-neutral-300 underline-offset-4 hover:decoration-neutral-950"
              >
                Read more posts
              </Link>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
