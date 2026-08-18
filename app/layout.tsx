import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Favour Sunday - Software Engineer",
  description:
    "Portfolio of Favour Sunday, a software engineer building fullstack products, AI tools, healthcare workflows, and developer systems.",
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
  manifest: "/avatar-favico-crop/site.webmanifest",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
