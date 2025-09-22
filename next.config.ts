import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "edbert-ocampo.vercel.app",
      "cdn.sanity.io", // 👈 allow Sanity CDN images
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "edbert-ocampo.vercel.app",
        pathname: "/_next/**",
      },
      {
        protocol: "https",
        hostname: "cdn.sanity.io", // 👈 Sanity CDN
        pathname: "/images/**",   // Sanity serves images under /images/
      },
    ],
  },
  eslint: {
    // ✅ Allow builds even if ESLint has errors
    ignoreDuringBuilds: true,
  },
  typescript: {
    // ✅ Allow builds even if TS has type errors
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
