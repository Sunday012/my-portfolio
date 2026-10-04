import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/lib/blog-data";
import { SectionHeading } from "./SectionHeading";

export function BlogPreview() {
  const [latestPost] = blogPosts;

  if (!latestPost) {
    return null;
  }

  return (
    <section className="border-y border-neutral-200 bg-[#eef3f1] py-20 sm:py-24">
      <div className="mx-auto w-full max-w-5xl px-5 sm:px-8">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading eyebrow="Writing" title="Notes from the work">
            Practical lessons from building products, systems, and developer
            tools.
          </SectionHeading>
          <Link
            href="/blog"
            className="mb-8 shrink-0 text-sm font-semibold underline decoration-neutral-300 underline-offset-4 hover:decoration-neutral-950"
          >
            View all posts
          </Link>
        </div>

        <Link
          href={`/blog/${latestPost.slug}`}
          className="group grid gap-5 border-t border-neutral-300 py-6 sm:grid-cols-[9rem_1fr] sm:items-start sm:gap-8 lg:grid-cols-[9rem_1fr_18rem]"
        >
          <div className="text-sm text-neutral-500">
            <time dateTime={latestPost.isoDate}>{latestPost.publishedAt}</time>
            <p className="mt-1">{latestPost.readTime}</p>
          </div>
          <div>
            <p className="font-mono text-xs font-medium uppercase tracking-[0.16em] text-neutral-500">
              {latestPost.category}
            </p>
            <h3 className="mt-2 text-2xl font-semibold tracking-tight text-neutral-950 group-hover:underline group-hover:decoration-neutral-400 group-hover:underline-offset-4">
              {latestPost.title}
            </h3>
            <p className="mt-3 max-w-2xl text-base leading-7 text-neutral-600">
              {latestPost.excerpt}
            </p>
          </div>
          {latestPost.image ? (
            <Image
              src={latestPost.image.src}
              alt=""
              width={576}
              height={324}
              className="aspect-video w-full rounded-md border border-neutral-300 object-cover sm:col-start-2 lg:col-start-3 lg:row-start-1"
            />
          ) : null}
        </Link>
      </div>
    </section>
  );
}
