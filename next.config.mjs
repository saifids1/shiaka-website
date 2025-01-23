/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  exportTrailingSlash: true,
  images:{
    unoptimized: true,
  },
  output: 'export'
};

export default nextConfig;
