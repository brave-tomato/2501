import { getStaticParams } from '@/locales/server';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import '@ant-design/v5-patch-for-react-19';
import { ConfigProvider } from 'antd';

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
                <link href="/static/vendors/fullpage.css" rel="stylesheet" />
                <script src="/static/vendors/fullpage.js" />
            </head>

            <body>
                <AntdRegistry>
                    <ConfigProvider
                        theme={{
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
