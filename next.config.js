/** @type {import('next').NextConfig} */
require('dotenv').config();

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['yt3.ggpht.com', 'avatars.githubusercontent.com', 'lh3.googleusercontent.com']
  }
};

module.exports = nextConfig;