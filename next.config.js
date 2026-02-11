/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true, // Required for GitHub Pages
  },
  basePath: process.env.NODE_ENV === "production" ? "/nextjs-portfolio" : "",
  assetPrefix: process.env.NODE_ENV === "production" ? "/nextjs-portfolio/" : "",
};

module.exports = nextConfig;
