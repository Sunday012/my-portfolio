import Image from "next/image";

type ProjectThumbProps = {
  visual: string;
  title: string;
  image?: string;
};

const visuals = {
  casemeld: {
    bg: "bg-[#17251f]",
    accent: "bg-[#d85f33]",
    lines: ["classify", "prioritize", "match", "resolve"],
  },
  medlink: {
    bg: "bg-[#071a33]",
    accent: "bg-[#7db9e8]",
    lines: ["triage", "referral", "dispatch", "handoff"],
  },
  compiler: {
    bg: "bg-[#101820]",
    accent: "bg-[#f2aa4c]",
    lines: ["lexer", "parser", "ast", "emit"],
  },
  intersync: {
    bg: "bg-[#15231f]",
    accent: "bg-[#67d7a7]",
    lines: ["diff", "judge", "module", "sync"],
  },
  sabisafe: {
    bg: "bg-[#17202a]",
    accent: "bg-[#4ade80]",
    lines: ["report", "verify", "alert", "respond"],
  },
  ziggo: {
    bg: "bg-[#10251d]",
    accent: "bg-[#dbf97e]",
    lines: ["retrieve", "reason", "approve", "resolve"],
  },
  flashcards: {
    bg: "bg-[#21192b]",
    accent: "bg-[#f5d36c]",
    lines: ["prompt", "deck", "review", "plan"],
  },
  review: {
    bg: "bg-[#1c1f24]",
    accent: "bg-[#6ee7b7]",
    lines: ["github", "sonar", "quality gate", "priorities"],
  },
};

type VisualKey = keyof typeof visuals;

export function ProjectThumb({ visual, title, image }: ProjectThumbProps) {
  const item = visuals[(visual as VisualKey) || "compiler"] ?? visuals.compiler;

  if (image) {
    return (
      <div
        data-static-theme
        className={`relative aspect-[4/3] w-full overflow-hidden rounded-md ${item.bg} p-4`}
        aria-label={`${title} project preview`}
      >
        <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,.18)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.18)_1px,transparent_1px)] [background-size:18px_18px]" />
        <div className="relative flex h-full items-center justify-center rounded-sm bg-white p-5">
          <Image
            src={image}
            alt={`${title} logo`}
            width={240}
            height={120}
            className="max-h-full w-full object-contain"
          />
        </div>
      </div>
    );
  }

  if (visual === "casemeld") {
    return (
      <div
        data-static-theme
        className="relative aspect-[4/3] w-full overflow-hidden rounded-md bg-[#f5f3ed] p-3 text-[#17251f]"
        aria-label="CaseMeld project preview"
      >
        <div className="absolute inset-0 opacity-45 [background-image:radial-gradient(#c8cec8_1px,transparent_1px)] [background-size:12px_12px]" />
        <div className="relative flex h-full items-center justify-center rounded-sm border border-[#d9ddd6] bg-[#fffefa]/95 p-3 shadow-sm">
          <span className="relative size-12 shrink-0 rounded-full bg-[#0d6b4f] shadow-sm">
            <span className="absolute inset-[10px] rounded-full bg-[#fffefa]" />
            <span className="absolute right-[-2px] top-1/2 size-4 -translate-y-1/2 rounded-full border-[4px] border-[#fffefa] bg-[#d85f33]" />
          </span>
        </div>
      </div>
    );
  }

  return (
    <div
      data-static-theme
      className={`relative aspect-[4/3] w-full overflow-hidden rounded-md ${item.bg} p-3 text-white`}
      aria-label={`${title} project preview`}
    >
      <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,.18)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.18)_1px,transparent_1px)] [background-size:18px_18px]" />
      <div className="relative h-full rounded-sm border border-white/15 bg-white/8 p-3">
        <div className="mb-4 flex items-center gap-1.5">
          <span className={`size-2 rounded-full ${item.accent}`} />
          <span className="size-2 rounded-full bg-white/35" />
          <span className="size-2 rounded-full bg-white/20" />
        </div>
        <div className="space-y-2">
          {item.lines.map((line, index) => (
            <div
              key={line}
              className="flex items-center gap-2 rounded-sm bg-white/10 px-2 py-1.5"
              style={{ width: `${92 - index * 10}%` }}
            >
              <span className={`size-2 shrink-0 rounded-full ${item.accent}`} />
              <span className="text-[11px] font-medium uppercase tracking-[0.16em] text-white/75">
                {line}
              </span>
            </div>
          ))}
        </div>
        <div className="absolute bottom-3 right-3 flex size-12 items-center justify-center rounded-full bg-white text-sm font-bold text-neutral-950">
          {title.slice(0, 2).toUpperCase()}
        </div>
      </div>
    </div>
  );
}
