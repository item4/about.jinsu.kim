/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  output: 'export',
  cleanDistDir: true,
  productionBrowserSourceMaps: true,
};

export default nextConfig;
