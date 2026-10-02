import Link from "next/link";
import { portfolioVideos } from "@/lib/portfolio-data";
import { SectionHeading } from "./SectionHeading";
import { VideoEmbed } from "./VideoEmbed";

export function Videos() {
  return (
    <section id="watch" className="bg-white py-20 sm:py-24">
      <div className="mx-auto w-full max-w-5xl px-5 sm:px-8">
        <SectionHeading eyebrow="Watch" title="See the work in motion" />

        <div className="space-y-12">
          {portfolioVideos.map((video) => (
            <article
              key={video.url}
              className="grid items-start gap-6 lg:grid-cols-[minmax(0,1.65fr)_minmax(15rem,0.75fr)] lg:gap-9"
            >
              <VideoEmbed url={video.url} title={video.title} />
              <div className="pt-1">
                <p className="font-mono text-xs font-medium uppercase tracking-[0.16em] text-neutral-500">
                  {video.platform} video
                </p>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight text-neutral-950">
                  {video.title}
                </h3>
                <p className="mt-3 text-base leading-7 text-neutral-600">
                  {video.description}
                </p>
                <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-3">
                  <Link
                    href={`/watch/${video.id}`}
                    className="inline-flex rounded-full bg-neutral-950 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-neutral-700"
                  >
                    Open shareable page
                  </Link>
                  <a
                    href={video.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex text-sm font-semibold text-neutral-950 underline decoration-neutral-300 underline-offset-4 hover:decoration-neutral-950"
                  >
                    Open on {video.platform}
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
