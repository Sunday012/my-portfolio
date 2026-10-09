import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { ProjectCard } from "@/components/ProjectCard";
import { petProjects } from "@/lib/portfolio-data";

export const metadata: Metadata = {
  title: "Pet Projects",
  description:
    "A fuller list of Favour Sunday's pet projects across developer tools, AI systems, safety products, and product experiments.",
  alternates: { canonical: "/projects" },
  openGraph: {
    type: "website",
    url: "/projects",
    title: "Pet Projects | Favour Sunday",
    description:
      "A fuller list of Favour Sunday's pet projects across developer tools, AI systems, safety products, and product experiments.",
    images: [],
  },
  twitter: {
    card: "summary",
    title: "Pet Projects | Favour Sunday",
    description:
      "A fuller list of Favour Sunday's pet projects across developer tools, AI systems, safety products, and product experiments.",
    images: [],
  },
};

export default function ProjectsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-neutral-950">
      <Nav />
      <main className="flex-1">
        <header className="border-b border-neutral-800 bg-neutral-950 py-20 text-white sm:py-28">
          <div className="mx-auto w-full max-w-5xl px-5 sm:px-8">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-300">
              Pet Projects
            </p>
            <h1 className="mt-4 max-w-3xl text-5xl font-semibold tracking-tight sm:text-7xl">
              More small bets with real machinery.
            </h1>
          </div>
        </header>

        <section className="bg-[#eef3f1] py-16 sm:py-20">
          <div className="mx-auto w-full max-w-5xl px-5 sm:px-8">
            <div className="bg-white/50">
              {petProjects.map((project) => (
                <ProjectCard key={project.title} {...project} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
