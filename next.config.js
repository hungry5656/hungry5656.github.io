// /** @type {import('next').NextConfig} */
const path = require('path')
const nextConfig = {
    output: 'export',
    sassOptions: {
        includePaths: [path.join(__dirname, 'src/scss')],
      },
    // Optional: Add a trailing slash to all paths `/about` -> `/about/`
    // trailingSlash: true,
    // Optional: Change the output directory `out` -> `dist`
    // distDir: 'dist',
}

module.exports = nextConfig
