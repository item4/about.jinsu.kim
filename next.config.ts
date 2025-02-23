import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  output: 'export',
  cleanDistDir: true,
  productionBrowserSourceMaps: true,
  eslint: {
    dirs: ['.'],
  },
};

export default nextConfig;
