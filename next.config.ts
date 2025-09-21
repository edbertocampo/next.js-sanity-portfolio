import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['edbert-ocampo.vercel.app'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'edbert-ocampo.vercel.app',
        pathname: '/_next/**',
      },
    ],
  },
};

export default nextConfig;
