import { Bio } from "@/components/Bio";
import { BlogPreview } from "@/components/BlogPreview";
import { Capabilities } from "@/components/Capabilities";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { LectureImage } from "@/components/LectureImage";
import { MiscLinks } from "@/components/MiscLinks";
import { Projects } from "@/components/Projects";
import { Timeline } from "@/components/Timeline";
import { Videos } from "@/components/Videos";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-neutral-950">
      <main>
        <Hero />
        <Timeline />
        <Bio />
        <Projects />
        <Videos />
        <LectureImage />
        <Capabilities />
        <BlogPreview />
        <MiscLinks />
      </main>
      <Footer />
    </div>
  );
}
