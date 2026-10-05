import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { VideoEmbed } from "@/components/VideoEmbed";
import { portfolioVideos } from "@/lib/portfolio-data";

type WatchPageProps = {
  params: Promise<{ id: string }>;
};

function findVideo(id: string) {
  return portfolioVideos.find((video) => video.id === id);
}

export function generateStaticParams() {
  return portfolioVideos.map((video) => ({ id: video.id }));
}

export async function generateMetadata({
  params,
}: WatchPageProps): Promise<Metadata> {
  const { id } = await params;
  const video = findVideo(id);

  if (!video) {
    return { title: "Video not found | Favour Sunday" };
  }

  return {
    title: video.title,
    description: video.description,
    alternates: { canonical: `/watch/${video.id}` },
    openGraph: {
      title: `${video.title} | Favour Sunday`,
      description: video.description,
      type: "video.other",
      url: `/watch/${video.id}`,
      images: [],
    },
    twitter: {
      card: "summary",
      title: `${video.title} | Favour Sunday`,
      description: video.description,
      images: [],
    },
  };
}

export default async function WatchPage({ params }: WatchPageProps) {
  const { id } = await params;
  const video = findVideo(id);

  if (!video) {
    notFound();
  }

  return (
    <div className="flex min-h-screen flex-col bg-[#eef3f1] text-neutral-950">
      <Nav />
      <main className="flex-1 py-16 sm:py-24">
        <article className="mx-auto w-full max-w-5xl px-5 sm:px-8">
          <Link
            href="/#projects"
            className="text-sm font-semibold text-neutral-600 underline decoration-neutral-300 underline-offset-4 hover:text-neutral-950 hover:decoration-neutral-950"
          >
            Back to projects
          </Link>

          <header className="mb-8 mt-8 max-w-3xl">
            <p className="font-mono text-xs font-medium uppercase tracking-[0.16em] text-neutral-500">
              FPlus Compiler · Video walkthrough
            </p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
              {video.title}
            </h1>
            <p className="mt-4 text-lg leading-8 text-neutral-600">
              {video.description}
            </p>
          </header>

          <VideoEmbed url={video.url} title={video.title} />

          <div className="mt-7 flex flex-wrap gap-x-5 gap-y-3 text-sm font-semibold">
            <Link
              href="/blog/building-fplus-compiler"
              className="underline decoration-neutral-300 underline-offset-4 hover:decoration-neutral-950"
            >
              Read the compiler article
            </Link>
            <a
              href="https://github.com/Sunday012/fplus-compiler"
              target="_blank"
              rel="noreferrer"
              className="underline decoration-neutral-300 underline-offset-4 hover:decoration-neutral-950"
            >
              View compiler source
            </a>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
