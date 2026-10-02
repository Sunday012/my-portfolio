import Image from "next/image";

export function LectureImage() {
  return (
    <section className="bg-neutral-950 py-12 sm:py-16">
      <div className="mx-auto w-full max-w-5xl px-5 sm:px-8">
        <div className="overflow-hidden rounded-lg border border-white/10 bg-neutral-900 shadow-[0_24px_80px_rgba(0,0,0,0.35)]">
          <Image
            src="/lagos-dev-conference.jpg"
            alt="Developers seated from the back at a Lagos technology conference"
            width={2800}
            height={1867}
            className="aspect-[16/8.5] w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
