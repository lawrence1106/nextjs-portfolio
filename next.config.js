/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // <=== enables static exports
  assetPrefix: '/nextjs-portfolio/', // <=== for assets like images, if needed
  basePath: "/nextjs-portfolio",
  images: {
    unoptimized: true, // <=== disable Next.js image optimization (not compatible with static export)
  },
};

module.exports = nextConfig;
