/** @type {import('next').NextConfig} */
require('dotenv').config();

const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: true,
  images: {
    domains: ['yt3.ggpht.com', 'avatars.githubusercontent.com', 'lh3.googleusercontent.com']
  }
};

module.exports = nextConfig; // hola