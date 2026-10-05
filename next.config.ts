import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "favoursundayapp.vercel.app",
          },
        ],
        destination: "https://favoursunday.dev/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
