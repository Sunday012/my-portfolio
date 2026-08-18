import Image from "next/image";
import { profile, socialLinks } from "@/lib/portfolio-data";

export function Hero() {
  return (
    <section className="border-b border-neutral-200 bg-white">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-8 px-5 pb-16 pt-10 text-center sm:px-8 md:min-h-[19rem] md:flex-row md:items-start md:justify-center md:gap-10 md:pb-18 md:pt-14 md:text-left">
        <div className="relative size-48 shrink-0 overflow-hidden rounded-full bg-neutral-100 ring-1 ring-neutral-200 sm:size-56 md:mt-0">
          <Image
            src={profile.image}
            alt="Favour Sunday"
            width={448}
            height={448}
            priority
            className="h-full w-full object-cover"
          />
        </div>

        <div className="max-w-2xl pt-3">
          <h1 className="text-4xl font-semibold tracking-tight text-neutral-950 sm:text-5xl">
            Hey, I&apos;m {profile.name}. {profile.role}.
          </h1>
          <p className="mt-4 max-w-xl text-lg leading-8 text-neutral-700">
            {profile.summary}
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-2 md:justify-start">
            {profile.focus.map((item) => (
              <span
                key={item}
                className="rounded-full border border-neutral-300 bg-white px-4 py-2 text-sm text-neutral-700"
              >
                {item}
              </span>
            ))}
          </div>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3 md:justify-start">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                className="rounded-full border border-neutral-950 px-5 py-3 text-sm font-semibold text-neutral-950 transition hover:bg-neutral-950 hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
