import { PHASE_DEVELOPMENT_SERVER } from 'next/constants'

/** @type {import('next').NextConfig} */
const nextConfig = phase => {
  const isDev = phase === PHASE_DEVELOPMENT_SERVER

  return {
    output: 'export', // <=== enables static exports
    assetPrefix: isDev ? undefined : '/nextjs-portfolio',
    basePath: isDev ? undefined : "/nextjs-portfolio",
    images: {
      unoptimized: true, // <=== disable Next.js image optimization (not compatible with static export)
    },
  }
};

module.exports = nextConfig;
