import Link from "next/link";
import { miscLinks } from "@/lib/portfolio-data";

export function MiscLinks() {
  return (
    <section className="bg-white pb-20">
      <div className="mx-auto w-full max-w-5xl px-5 sm:px-8">
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
        </ul>
      </div>
    </section>
  );
}
