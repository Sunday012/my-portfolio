import { profile } from "@/lib/portfolio-data";

export function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-neutral-950 py-10 text-neutral-300">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-4 px-5 text-sm sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>Built by {profile.name}. Fullstack systems, careful interfaces.</p>
        <a className="text-white underline decoration-neutral-600 underline-offset-4 hover:decoration-white" href={`mailto:${profile.email}`}>
          {profile.email}
        </a>
      </div>
    </footer>
  );
}
