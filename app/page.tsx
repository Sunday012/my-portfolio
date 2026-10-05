import type { Metadata } from "next";
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
import { profile } from "@/lib/portfolio-data";
import { siteDescription } from "@/lib/site-config";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  description: siteDescription,
  openGraph: {
    type: "profile",
    url: "/",
    title: "Favour Sunday | Software Engineer in Lagos",
    description: siteDescription,
    images: [
      {
        url: profile.image,
        width: 960,
        height: 1280,
        alt: "Favour Sunday, software engineer in Lagos, Nigeria",
      },
    ],
  },
};

export const revalidate = 60;

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
