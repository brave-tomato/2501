import { getStaticParams } from '@/locales/server';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import '@ant-design/v5-patch-for-react-19';
import { ConfigProvider } from 'antd';
import Script from 'next/script';

/**
 * Styles
 */
import 'antd/dist/reset.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './global.scss';

/**
 * Types
 */
type Props = {
    children: React.ReactNode;
};

export function generateStaticParams() {
    return getStaticParams();
}

export default ({ children }: Props) => {
    return (
        <html lang="en">
            <head>
                <link href="/favicon.svg" rel="icon" sizes="any" />
                <Script src="https://www.googletagmanager.com/gtag/js?id=G-ZJTX18ZCBD" strategy="afterInteractive" />
                <Script id="ga-init" strategy="afterInteractive">
                    {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'G-ZJTX18ZCBD');
                    `}
                </Script>
                <Script
                    src="https://js-de.sentry-cdn.com/9cb5ab38af4b3aa878d1916d841e9c35.min.js"
                    strategy="afterInteractive"
                />
            </head>

            <body>
                <AntdRegistry>
                    <ConfigProvider
                        theme={{
                            components: {
                                Timeline: {
                                    colorPrimary: '#fff',
                                    itemPaddingBottom: 60,
                                    tailColor: '#fff',
                                },
                            },
                            token: {
                                colorLinkActive: '#2dafb7',
                                colorLinkHover: '#2dafb7',
                                colorPrimary: '#2dafb7',
                            },
                        }}
                    >
                        {children}
                    </ConfigProvider>
                </AntdRegistry>
            </body>
        </html>
    );
};
