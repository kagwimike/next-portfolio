/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",           // ✅ enables static export
  images: { unoptimized: true },
  basePath: isProd ? "/next-portfolio" : "",
  assetPrefix: isProd ? "/next-portfolio/" : "",
};

module.exports = nextConfig;
