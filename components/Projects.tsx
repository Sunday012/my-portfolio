import { petProjects } from "@/lib/portfolio-data";
import { ProjectCard } from "./ProjectCard";
import { SectionHeading } from "./SectionHeading";

export function Projects() {
  return (
    <section id="projects" className="bg-[#eef3f1] py-20 sm:py-24">
      <div className="mx-auto w-full max-w-5xl px-5 sm:px-8">
        <SectionHeading eyebrow="Pet Projects" title="Small bets with real machinery" />

        <div className="bg-white/50">
          {petProjects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
