import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["edbert-ocampo.vercel.app"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "edbert-ocampo.vercel.app",
        pathname: "/_next/**",
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
