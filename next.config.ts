import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    output: 'export',
    webpack: (config, { isServer }) => {
        config.module.rules.push({
            test: /\.less$/,
            use: [
                // 在服务器端渲染时忽略样式文件，客户端渲染时将 CSS 插入到 DOM 中
                isServer ? 'ignore-loader' : 'style-loader',
                {
                    loader: 'css-loader',
                    options: {
                        // 启用 CSS Modules
                        modules: true,
                        sourceMap: true,
                    },
                },
                {
                    loader: 'less-loader',
                    options: {
                        lessOptions: {
                            // 允许在 Less 文件中使用 JavaScript 表达式
                            javascriptEnabled: true,
                        },
                    },
                },
            ],
        });

        return config;
    },
};

export default nextConfig;
