/** @type {import('next').NextConfig} */


const nextConfig = {
    pageExtensions: ['js', 'jsx', 'ts', 'tsx'],

    experimental: {
        optimizePackageImports: [
            'shiki',
        ],
    }
}

module.exports = nextConfig
