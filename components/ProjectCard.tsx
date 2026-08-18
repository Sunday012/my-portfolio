import { ProjectThumb } from "./ProjectThumb";

type ProjectCardProps = {
  title: string;
  label: string;
  visual: string;
  image?: string;
  href?: string;
  code: string;
  description: string;
  stack: string[];
};

export function ProjectCard({
  title,
  label,
  visual,
  image,
  href,
  code,
  description,
  stack,
}: ProjectCardProps) {
  return (
    <article className="grid gap-4 border-t border-neutral-200 py-5 transition hover:border-neutral-400 sm:grid-cols-[8rem_1fr] sm:gap-6">
      <ProjectThumb visual={visual} title={title} image={image} />
      <div className="min-w-0 pt-1">
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <h3 className="text-xl font-semibold tracking-tight text-neutral-950">
            {href ? (
              <a
                href={href}
                target="_blank"
                rel="noreferrer"
                className="underline decoration-neutral-300 underline-offset-4 hover:decoration-neutral-950"
              >
                {title}
              </a>
            ) : (
              title
            )}
          </h3>
          <span className="text-sm text-neutral-500">{label}</span>
        </div>
        <p className="mt-3 text-base leading-7 text-neutral-600">
          <span className="font-mono text-sm text-neutral-500">{code}</span>
          <span className="text-neutral-400"> - </span>
          {description}
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          {stack.map((item) => (
            <span
              key={item}
              className="rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs font-medium text-neutral-700"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
