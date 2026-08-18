import Image from "next/image";

const accents = {
  amber: "bg-amber-100 text-amber-900 ring-amber-200",
  blue: "bg-sky-100 text-sky-900 ring-sky-200",
  cyan: "bg-cyan-100 text-cyan-900 ring-cyan-200",
  emerald: "bg-emerald-100 text-emerald-900 ring-emerald-200",
  indigo: "bg-indigo-100 text-indigo-900 ring-indigo-200",
  lime: "bg-lime-100 text-lime-900 ring-lime-200",
  rose: "bg-rose-100 text-rose-900 ring-rose-200",
  violet: "bg-violet-100 text-violet-900 ring-violet-200",
};

type Accent = keyof typeof accents;

type MarkProps = {
  children: string;
  accent?: string;
  logo?: string;
  label?: string;
};

export function Mark({ children, accent = "blue", logo, label }: MarkProps) {
  const className = accents[(accent as Accent) || "blue"] ?? accents.blue;

  if (logo) {
    return (
      <div className="flex size-20 shrink-0 items-center justify-center overflow-hidden p-1">
        <Image
          src={logo}
          alt={label ? `${label} logo` : ""}
          width={80}
          height={80}
          className="h-full w-full object-contain"
        />
      </div>
    );
  }

  return (
    <div
      className={`flex size-20 shrink-0 items-center justify-center rounded-md text-lg font-bold ring-1 ${className}`}
    >
      {children}
    </div>
  );
}
