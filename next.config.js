/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    loader: "akamai",
    path: "",
  },
  basePath: process.env.BASEPATH,
  assetPrefix: process.env.BASEPATH,
};

module.exports = nextConfig;
