/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
    images: {
    qualities: [75, 100], // Add 100 here
    },
  },
};

export default nextConfig;
