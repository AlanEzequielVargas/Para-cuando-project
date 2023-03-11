/** @type {import('next').NextConfig} */
const nextConfig = {
  publicRuntimeConfig: {
    BASE_URL:
      process.env.NODE_ENV === 'development'
        ? 'https://paracuando-gen19-team-2.academlo.tech/api/v1'
        : 'https://paracuando-gen19-team-2.academlo.tech/api/v1',
  },
  reactStrictMode: true,
  /* swcMinify: true,
  optimizeFonts: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'tinypic.host',
      },
    ],
    minimumCacheTTL: 1500000,
  }, */
};

module.exports = nextConfig;
