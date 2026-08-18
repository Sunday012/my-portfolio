import Image from "next/image";
import { profile, socialLinks } from "@/lib/portfolio-data";

function SocialIcon({ label }: { label: string }) {
  const className = "size-5";

  if (label === "GitHub") {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.5v-1.92c-2.78.62-3.37-1.21-3.37-1.21-.45-1.19-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.35 1.12 2.92.86.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.3 9.3 0 0 1 12 6.95c.85 0 1.7.12 2.5.34 1.9-1.33 2.74-1.05 2.74-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.95.68 1.92v2.85c0 .27.18.59.69.49A10.11 10.11 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z" />
      </svg>
    );
  }

  if (label === "LinkedIn") {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M6.94 8.9H3.76V20h3.18V8.9ZM5.35 4a1.84 1.84 0 1 0 0 3.68A1.84 1.84 0 0 0 5.35 4Zm14.89 9.64c0-3.04-1.62-4.45-3.79-4.45a3.27 3.27 0 0 0-2.96 1.63h-.04V8.9h-3.04V20h3.17v-5.5c0-1.45.27-2.85 2.07-2.85 1.77 0 1.79 1.66 1.79 2.94V20h3.17l-.37-6.36Z" />
      </svg>
    );
  }

  if (label === "Email") {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M4 6h16v12H4z" />
        <path d="m4 7 8 6 8-6" />
      </svg>
    );
  }

  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M7 3h7l4 4v14H7z" />
      <path d="M14 3v5h5" />
      <path d="M9 13h6M9 17h6" />
    </svg>
  );
}

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
          <div className="mt-6 hidden flex-wrap justify-center gap-2 md:flex md:justify-start">
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
                aria-label={link.label}
                title={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                className="flex size-12 items-center justify-center rounded-full border border-neutral-950 text-neutral-950 transition hover:bg-neutral-950 hover:text-white md:h-auto md:w-auto md:px-5 md:py-3 md:text-sm md:font-semibold"
              >
                <span className="md:hidden">
                  <SocialIcon label={link.label} />
                </span>
                <span className="hidden md:inline">{link.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
