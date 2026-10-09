import Link from "next/link";
import { petProjects } from "@/lib/portfolio-data";
import { ProjectCard } from "./ProjectCard";
import { SectionHeading } from "./SectionHeading";

const featuredProjectTitles = [
  "Compiler",
  "Intersync",
  "Ziggo",
  "Reporithm",
  "Sabisafe",
];

const featuredProjects = featuredProjectTitles.flatMap((title) =>
  petProjects.filter((project) => project.title === title),
);

export function Projects() {
  return (
    <section id="projects" className="bg-[#eef3f1] py-20 sm:py-24">
      <div className="mx-auto w-full max-w-5xl px-5 sm:px-8">
        <SectionHeading eyebrow="Pet Projects" title="Small bets with real machinery" />

        <div className="bg-white/50">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
        <div className="mt-8 flex justify-center sm:justify-start">
          <Link
            href="/projects"
            className="rounded-full border border-neutral-950 px-5 py-3 text-sm font-semibold text-neutral-950 transition hover:bg-neutral-950 hover:text-white"
          >
            View more projects
          </Link>
        </div>
      </div>
    </section>
  );
}
