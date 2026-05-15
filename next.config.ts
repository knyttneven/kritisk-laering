import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/kritisk-laering',
  images: { unoptimized: true },
};

export default nextConfig;
