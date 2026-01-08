import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isProd ? "/arcpac.github.io" : "",
  assetPrefix: isProd ? "/arcpac.github.io/" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
