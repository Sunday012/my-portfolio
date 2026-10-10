import type { MetadataRoute } from "next";
import { siteDescription } from "@/lib/site-config";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Favour Sunday — Software Engineer",
    short_name: "Favour Sunday",
    description: siteDescription,
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#ffffff",
    icons: [
      {
        src: "/avatar-favico-crop/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/avatar-favico-crop/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
