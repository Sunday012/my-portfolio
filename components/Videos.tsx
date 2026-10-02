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
                <h3 className="text-2xl font-semibold tracking-tight text-neutral-950">
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
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
