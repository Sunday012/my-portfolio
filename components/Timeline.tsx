import { timeline } from "@/lib/portfolio-data";
import { Mark } from "./Mark";

export function Timeline() {
  return (
    <section id="work" className="bg-white py-16 sm:py-20">
      <div className="mx-auto w-full max-w-5xl px-5 sm:px-8">
        <div className="relative">
          <div className="space-y-9">
            {timeline.map((item) => (
              <article
                key={`${item.company}-${item.period}`}
                className="grid gap-4 sm:grid-cols-[7.5rem_1.5rem_5rem_1fr] sm:gap-0"
              >
                <div className="pt-1 text-sm text-neutral-500 sm:pr-3 sm:text-right">
                  {item.period}
                </div>
                <div className="relative hidden justify-center sm:flex">
                  <div className="absolute top-0 h-full w-px bg-neutral-200" />
                  <div className="relative mt-2 size-3 rounded-full border-2 border-white bg-neutral-300 ring-1 ring-neutral-300" />
                </div>
                <div className="sm:pl-2">
                  <Mark accent={item.accent} logo={item.logo} label={item.company}>
                    {item.mark}
                  </Mark>
                </div>
                <div className="pb-8 sm:pl-5">
                  <h3 className="text-xl font-semibold tracking-tight text-neutral-950">
                    {item.title} at{" "}
                    {item.href ? (
                      <a
                        className="underline decoration-neutral-300 underline-offset-4 hover:decoration-neutral-950"
                        href={item.href}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {item.company}
                      </a>
                    ) : (
                      item.company
                    )}
                  </h3>
                  <p className="mt-3 max-w-3xl text-base leading-7 text-neutral-600">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
