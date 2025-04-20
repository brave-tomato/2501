import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
    },
    output: 'export',
    trailingSlash: true,
    transpilePackages: ['next-international', 'international-types'],
    typescript: {
        ignoreBuildErrors: true,
    },
};

export default nextConfig;
