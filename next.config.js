/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // <=== enables static exports
  images: {
    unoptimized: true, // <=== disable Next.js image optimization (not compatible with static export)
  },
};

module.exports = nextConfig;
