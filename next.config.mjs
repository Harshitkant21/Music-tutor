/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;

//! we can use
// domain: ["images.unsplash.com"],
//! instead of
// remotePatterns: [
//     {
//       protocol: "https",
//       hostname: "images.unsplash.com",
//     },
//   ],
//! but this is deprecated
