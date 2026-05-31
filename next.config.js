/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["date-picker-bs"],
  webpack: (config) => {
    config.resolve.symlinks = false
    return config
  },
}

module.exports = nextConfig
