import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const isGithubPages = process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },

  // GitHub Pages için repo adı kadar base path veriyoruz
  basePath: isProd && isGithubPages ? "/site724" : "",
  assetPrefix: isProd && isGithubPages ? "/site724/" : "",
};

export default nextConfig;