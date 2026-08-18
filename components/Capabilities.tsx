import { capabilities } from "@/lib/portfolio-data";
import { SectionHeading } from "./SectionHeading";

export function Capabilities() {
  return (
    <section id="notes" className="bg-white py-20 sm:py-24">
      <div className="mx-auto w-full max-w-5xl px-5 sm:px-8">
        <SectionHeading eyebrow="Notes" title="The kind of problems I like">
          My favorite work sits where product detail meets engineering depth:
          healthcare workflows, RAG systems, AI agents, protected dashboards,
          payments, automation, and AI features that need to feel simple on the
          surface.
        </SectionHeading>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((capability) => (
            <div
              key={capability}
              className="rounded-md border border-neutral-200 bg-neutral-50 px-4 py-4 text-sm font-medium text-neutral-800"
            >
              {capability}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
