import type { Metadata } from "next";
import Link from "next/link";
import { miscLinks, moviePicks, profile } from "@/lib/portfolio-data";

export const metadata: Metadata = {
  title: "Movies - Favour Sunday",
  description: "Movie picks and story notes from Favour Sunday.",
};

export default function MoviesPage() {
  return (
    <main className="min-h-screen bg-white text-neutral-900">
      <section className="mx-auto w-full max-w-5xl px-5 py-16 sm:px-8 sm:py-20">
        <Link
          href="/"
          className="text-sm text-neutral-500 underline decoration-neutral-300 underline-offset-4 hover:text-neutral-950 hover:decoration-neutral-950"
        >
          back home
        </Link>

        <div className="mt-10 max-w-3xl">
          <h1 className="text-4xl font-normal tracking-tight text-neutral-900">
            movies
          </h1>
          <p className="mt-6 text-base leading-7 text-neutral-700">
            Movies I like for story, taste, systems thinking, technology,
            ambition, and the occasional reminder that beautiful interfaces
            still need humans behind them.
          </p>
          <ul className="mt-5 list-disc space-y-1 pl-10 text-base leading-7 text-neutral-700">
            <li>I like films where people build, investigate, or obsess carefully.</li>
            <li>I notice product taste, interfaces, teams, and incentives.</li>
            <li>I enjoy stories that make technology feel human and complicated.</li>
          </ul>
        </div>

        <div className="my-12 h-px bg-neutral-200" />

        <div className="space-y-4">
          {moviePicks.map((movie) => (
            <p key={`${movie.director}-${movie.title}`} className="text-base leading-7 text-neutral-800">
              <span className="font-semibold text-neutral-950">{movie.title}</span>{" "}
              <span className="text-neutral-500">
                by {movie.director}, {movie.year}
              </span>{" "}
              {movie.note}
            </p>
          ))}
        </div>

        <section className="mt-16">
          <h2 className="text-3xl font-normal tracking-tight text-neutral-900">
            misc unsorted
          </h2>
          <ul className="mt-6 list-disc space-y-1 pl-6 text-base leading-7 text-neutral-800">
            {miscLinks.map((link) => (
              <li key={link.href}>
                {link.before}
                {link.href.startsWith("/") ? (
                  <Link
                    href={link.href}
                    className="text-blue-700 underline underline-offset-2 hover:text-blue-950"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-700 underline underline-offset-2 hover:text-blue-950"
                  >
                    {link.label}
                  </a>
                )}
                {link.after}
              </li>
            ))}
            <li>
              More notes from {profile.name} can live here as the portfolio
              grows.
            </li>
          </ul>
        </section>
      </section>
    </main>
  );
}
