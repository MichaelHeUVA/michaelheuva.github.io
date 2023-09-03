/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    loader: "akamai",
    path: "",
  },
  basePath: "/michaelhe.github.io",
  assetPrefix: "/michaelhe.github.io/",
};

module.exports = nextConfig;
