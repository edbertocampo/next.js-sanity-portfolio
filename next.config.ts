import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "edbert-ocampo.vercel.app",
      "cdn.sanity.io",
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "edbert-ocampo.vercel.app",
        pathname: "/_next/**",
      },
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        pathname: "/images/**",
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  async rewrites() {
    return [
      {
        source: "/studio",
        destination: "/studio/index.html", // 👈 ensures /studio works
      },
    ];
  },
};

export default nextConfig;
