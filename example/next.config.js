/** @type {import('next').NextConfig} */
const nextConfig = {
  // We need to transpile the local package to ensure updates are picked up correctly
  // and to handle any potential ESM/CJS interop issues during dev
  transpilePackages: ["smooth-input"],
  output: "export",
  // If deploying to a subpath like github.io/smooth-input, add:
  basePath: "/smooth-input",
  images: {
    unoptimized: true, // Required for static export
  },
};

module.exports = nextConfig;
