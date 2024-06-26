/** @type {import('next').NextConfig} */
const nextConfig = {
    assetPrefix: process.env.BASE_PATH || '',
    output: 'export',
    // Optional: Add a trailing slash to all paths `/about` -> `/about/`
    trailingSlash: true,
    // Optional: Change the output directory `out` -> `dist`
    // distDir: 'dist',
}

module.exports = nextConfig
