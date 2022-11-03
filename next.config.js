/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["res.cloudinary.com"],
  },
  env: {
    mapbox_key:
      "pk.eyJ1IjoianNqYTg1IiwiYSI6ImNsYTB5OHpydDAyOGYzcHFwNG54OHZiNXUifQ.nix6X7xqyM106GSW0O1P0w",
  },
};

module.exports = nextConfig;
