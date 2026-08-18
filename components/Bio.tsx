import { bio } from "@/lib/portfolio-data";

export function Bio() {
  return (
    <section className="bg-white pb-16 pt-4 sm:pb-20">
      <div className="mx-auto w-full max-w-5xl px-5 sm:px-8">
        <div>
          <h2 className="text-3xl font-normal tracking-tight text-neutral-900 sm:text-4xl">
            bio
          </h2>
          <div className="mt-6 max-w-4xl space-y-4 text-base leading-7 text-neutral-700">
            {bio.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
