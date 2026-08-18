import type { Metadata } from "next";
import Link from "next/link";
import { developerBooks, miscLinks, profile } from "@/lib/portfolio-data";

export const metadata: Metadata = {
  title: "Books - Favour Sunday",
  description:
    "Developer books and technical reading notes from Favour Sunday.",
};

export default function BooksPage() {
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
            books
          </h1>
          <p className="mt-6 text-base leading-7 text-neutral-700">
            Developer books and technical writing I would recommend for building
            stronger software judgment. The list leans toward systems,
            fullstack engineering, product thinking, TypeScript, Go, and
            compiler curiosity.
          </p>
          <ul className="mt-5 list-disc space-y-1 pl-10 text-base leading-7 text-neutral-700">
            <li>I like books that make engineering tradeoffs easier to see.</li>
            <li>I prefer practical ideas that survive real production work.</li>
            <li>
              I keep coming back to systems, product detail, developer tools,
              and clean interfaces.
            </li>
          </ul>
        </div>

        <div className="my-12 h-px bg-neutral-200" />

        <div className="space-y-4">
          {developerBooks.map((book) => (
            <p key={book.title} className="text-base leading-7 text-neutral-800">
              <span className="font-semibold text-neutral-950">{book.title}</span>{" "}
              <span className="text-neutral-500">
                by {book.author}, {book.year}
              </span>{" "}
              {book.note}
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
              More notes and recommendations from {profile.name} can live here
              as the portfolio grows.
            </li>
          </ul>
        </section>
      </section>
    </main>
  );
}
