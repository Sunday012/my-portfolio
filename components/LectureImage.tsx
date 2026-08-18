import Image from "next/image";

export function LectureImage() {
  return (
    <section className="bg-[#eef3f1] pb-20">
      <div className="mx-auto w-full max-w-5xl px-5 sm:px-8">
        <Image
          src="/lagos-dev-conference.jpg"
          alt="Developers seated from the back at a Lagos technology conference"
          width={2800}
          height={1867}
          className="aspect-[3.1/1] w-full rounded-md object-cover"
        />
      </div>
    </section>
  );
}
