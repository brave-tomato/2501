import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    output: 'standalone',
    transpilePackages: ['three'],
    typescript: {
        ignoreBuildErrors: true,
    },
};

export default nextConfig;
