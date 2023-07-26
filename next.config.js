/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: "/resources",
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  async rewrites() {
    return [
      {
        source: '/resources/:path*',
        destination: '/:path*',
      },
    ]
  }
};

module.exports = nextConfig
