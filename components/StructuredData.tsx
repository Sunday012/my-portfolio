import { profile } from "@/lib/portfolio-data";
import { absoluteUrl, siteDescription, siteName, siteUrl } from "@/lib/site-config";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: profile.name,
      url: siteUrl,
      image: absoluteUrl(profile.image),
      jobTitle: profile.role,
      description: siteDescription,
      sameAs: [profile.github, profile.linkedin],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Lagos",
        addressCountry: "NG",
      },
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "University of Uyo",
      },
      knowsAbout: [
        "Fullstack software engineering",
        "Go",
        "TypeScript",
        "React",
        "Next.js",
        "Artificial intelligence",
        "Healthcare software",
        "Developer tools",
        "Compiler design",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: `${siteName} — Software Engineer`,
      description: siteDescription,
      inLanguage: "en",
      author: { "@id": `${siteUrl}/#person` },
    },
    {
      "@type": "ProfilePage",
      "@id": `${siteUrl}/#profile-page`,
      url: siteUrl,
      name: `${siteName} — Software Engineer in Lagos`,
      isPartOf: { "@id": `${siteUrl}/#website` },
      mainEntity: { "@id": `${siteUrl}/#person` },
      about: { "@id": `${siteUrl}/#person` },
      inLanguage: "en",
    },
  ],
};

export function StructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
      }}
    />
  );
}
