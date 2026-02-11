/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true, // Required for GitHub Pages
  },
  basePath: "/nextjs-portfolio",
  assetPrefix: "/nextjs-portfolio/",
};

module.exports = nextConfig;
