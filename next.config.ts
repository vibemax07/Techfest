import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/Techfest",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
