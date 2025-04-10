import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    output: 'export',
    transpilePackages: ['three'],
    typescript: {
        ignoreBuildErrors: true,
    },
};

export default nextConfig;
