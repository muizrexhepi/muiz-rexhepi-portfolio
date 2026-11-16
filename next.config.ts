import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  async redirects() {
    return [
      { source: "/projects", destination: "/work", permanent: true },
      { source: "/project/:slug", destination: "/work/:slug", permanent: true },
      { source: "/experience", destination: "/about", permanent: true },
    ];
  },
};

export default nextConfig;
