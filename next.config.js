/** @type {import('next').NextConfig} */
const nextConfig = {
  /* reactStrictMode: true,
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
  }, */
};

module.exports = {
  nextConfig
  /* reactStrictMode: true,
  images: {
    domains: [
      'https://drive.google.com/file/d/1z8AS1vpCglN7HZegLQa04ZFqQT_XOuHH/view',
    ],
  }, */
};
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i1.sndcdn.com',
        port: '',
        pathname: 'artworks-000099014804-p6qz2i-t500x500.jpg',
      },
    ],
  },
}



