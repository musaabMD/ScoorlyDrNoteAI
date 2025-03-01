// const nextConfig = {
//   reactStrictMode: true,
//   images: {
//     domains: [
//       // NextJS <Image> component needs to whitelist domains for src={}
//       "lh3.googleusercontent.com",
//       "pbs.twimg.com",
//       "images.unsplash.com",
//       "logos-world.net",
//     ],
//   },
// };

// module.exports = nextConfig;
// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    // Only use this during development to get builds working
    ignoreDuringBuilds: true,
  },
  images: {
    domains: [
      // NextJS <Image> component needs to whitelist domains for src={}
      "lh3.googleusercontent.com",
      "pbs.twimg.com",
      "images.unsplash.com",
      "logos-world.net",
    ],
  },
};

module.exports = nextConfig;