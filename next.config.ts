import type { NextConfig } from "next";
import path from "node:path";

const projectRoot = path.resolve(process.cwd());
const tailwindCssEntry = path.join(
  projectRoot,
  "node_modules",
  "tailwindcss",
  "index.css",
);

const nextConfig: NextConfig = {
  // Screenshots are mostly small UI text, which the default quality of 75 smudges.
  images: { qualities: [90] },
  turbopack: {
    root: projectRoot,
    resolveAlias: {
      tailwindcss: tailwindCssEntry,
    },
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      tailwindcss: tailwindCssEntry,
    };

    return config;
  },
};

export default nextConfig;
