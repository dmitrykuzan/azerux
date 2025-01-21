/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  i18n: {
    defaultLocale: 'en',
    locales: ['en']
  },
  compress: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'azerux.com',
        port: '',
        pathname: '/api/static/**'
      },
      {
        protocol: 'https',
        hostname: 'www.mau.nestjs.com',
        port: '',
        pathname: '/**'
      }
    ]
  }
};

module.exports = nextConfig;
