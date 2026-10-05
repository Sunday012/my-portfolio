import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { StructuredData } from "@/components/StructuredData";
import { profile } from "@/lib/portfolio-data";
import { siteDescription, siteName, siteUrl } from "@/lib/site-config";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Favour Sunday | Software Engineer in Lagos",
    template: "%s | Favour Sunday",
  },
  description: siteDescription,
  applicationName: `${siteName} Portfolio`,
  authors: [{ name: profile.name, url: siteUrl }],
  creator: profile.name,
  publisher: profile.name,
  category: "technology",
  keywords: [
    "Favour Sunday",
    "Favour Sunday software engineer",
    "software engineer in Lagos",
    "Nigerian software engineer",
    "fullstack developer",
    "Go developer",
    "TypeScript developer",
    "AI engineer",
    "healthcare software engineer",
  ],
  referrer: "origin-when-cross-origin",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "profile",
    url: siteUrl,
    title: "Favour Sunday | Software Engineer in Lagos",
    description: siteDescription,
    siteName: `${siteName} Portfolio`,
    locale: "en_NG",
    images: [
      {
        url: profile.image,
        width: 960,
        height: 1280,
        alt: "Favour Sunday, software engineer in Lagos, Nigeria",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Favour Sunday | Software Engineer in Lagos",
    description: siteDescription,
    images: [profile.image],
  },
  verification: process.env.GOOGLE_SITE_VERIFICATION
    ? { google: process.env.GOOGLE_SITE_VERIFICATION }
    : undefined,
  icons: {
    icon: [
      { url: "/avatar-favico-crop/favicon.ico" },
      {
        url: "/avatar-favico-crop/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/avatar-favico-crop/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
    ],
    apple: "/avatar-favico-crop/apple-touch-icon.png",
  },
  manifest: "/manifest.webmanifest",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <StructuredData />
        {children}
      </body>
    </html>
  );
}
