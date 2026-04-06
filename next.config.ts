import type { NextConfig } from "next";

const isGithubActions = process.env.GITHUB_ACTIONS || false;
let assetPrefix = "";
let basePath = "";

if (isGithubActions) {
  const repo =
    process.env.GITHUB_REPOSITORY || "superShen0916/ai-survival-game";
  assetPrefix = `/${repo.split("/")[1]}/`;
  basePath = `/${repo.split("/")[1]}`;
}

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  assetPrefix,
  basePath,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
