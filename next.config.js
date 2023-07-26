/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/resources",
  reactStrictMode: true,
  output: "standalone",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig
