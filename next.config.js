/** @type {import('next').NextConfig} */
const Dotenv = require('dotenv-webpack');

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['yt3.ggpht.com', 'avatars.githubusercontent.com']
  },
  webpack: (config) => {
    if (!config.plugins) {
      config.plugins = [];
    }
    config.plugins.push(new Dotenv())
    return config;
  }
}

module.exports = nextConfig;