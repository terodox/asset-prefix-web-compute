/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: "/resources",
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
};

const isProd = process.env.NODE_ENV === 'production'
if (!isProd) {
  nextConfig.rewrites = async () => {
    return [
      {
        source: '/resources/:path*',
        destination: '/:path*',
      },
    ]
  }
}

module.exports = nextConfig
