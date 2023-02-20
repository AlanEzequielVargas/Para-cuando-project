/** @type {import('next').NextConfig} */
/* const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['https://drive.google.com/file/d/1z8AS1vpCglN7HZegLQa04ZFqQT_XOuHH/view'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'drive.google.com',
        port: '',
        pathname: '/file/**',
      },
    ],
  },
}; */

module.exports = {
  reactStrictMode: true,
  images: {
    domains: [
      'https://drive.google.com/file/d/1z8AS1vpCglN7HZegLQa04ZFqQT_XOuHH/view',
    ],
  },
};
