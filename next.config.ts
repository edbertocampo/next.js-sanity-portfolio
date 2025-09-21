import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      'edbert-ocampo.vercel.app', // your current domain
      'cdn.sanity.io',             // add Sanity CDN
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'edbert-ocampo.vercel.app',
        pathname: '/_next/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io', // allow Sanity images
        pathname: '/images/**',
      },
    ],
  },
};

export default nextConfig;
