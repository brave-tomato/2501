/**
 * Styles
 */
import './globals.css';

/**
 * Types
 */
import type { Metadata } from 'next';
import type { PropsWithChildren } from 'react';

/**
 * Metadata
 */
export const metadata: Metadata = {
    title: '北京卫蓝新能源科技股份有限公司',
    description: '北京卫蓝新能源科技股份有限公司',
    keywords: '北京卫蓝新能源科技股份有限公司,卫蓝新能源,新能源,电池',
};

export default function RootLayout({ children }: PropsWithChildren) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
