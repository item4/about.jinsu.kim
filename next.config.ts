import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  output: 'export',
  cleanDistDir: true,
  productionBrowserSourceMaps: true,
};

export default nextConfig;
