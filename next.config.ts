import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      'motion-utils': 'framer-motion',
    }
    return config
  },
  /* config options here */
};

export default nextConfig;
