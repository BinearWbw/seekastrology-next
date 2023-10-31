/** @type {import('next').NextConfig} */

const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
  register: true,
  // sw: 'service-worker.js',
  //...
});

module.exports = withPWA({
  // next.js config
  trailingSlash: true,
  output: 'export',
  // reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  env: {
    origin: 'seekastrology',
  },
});

// const nextConfig = {}

// module.exports = nextConfig
