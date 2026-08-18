import { socialLinks } from "@/lib/portfolio-data";

const navLinks = [
  { label: "Work", href: "#work" },
  { label: "Projects", href: "#projects" },
  { label: "Notes", href: "#notes" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-20 border-b border-neutral-200/80 bg-white/85 backdrop-blur">
      <nav className="mx-auto flex h-16 w-full max-w-5xl items-center justify-between px-5 sm:px-8">
        <a href="#" className="font-semibold tracking-tight text-neutral-950">
          Favour Sunday
        </a>
        <div className="hidden items-center gap-6 text-sm text-neutral-600 sm:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-neutral-950">
              {link.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-2">
          {socialLinks.slice(0, 3).map((link) => (
            <a
              key={link.label}
              aria-label={link.label}
              className="flex size-9 items-center justify-center rounded-full border border-neutral-200 text-xs font-semibold text-neutral-700 transition hover:border-neutral-950 hover:bg-neutral-950 hover:text-white"
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noreferrer" : undefined}
              title={link.label}
            >
              {link.short}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
