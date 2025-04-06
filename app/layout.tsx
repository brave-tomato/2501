import { AntdRegistry } from '@ant-design/nextjs-registry';
import '@ant-design/v5-patch-for-react-19';
import { ConfigProvider } from 'antd';

/**
 * Components
 */
import Footer from '@/components/footer';
import Header from '@/components/header';

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
import type { Metadata } from 'next';

/**
 * Metadata
 */
export const metadata: Metadata = {
    title: '北京卫蓝新能源科技股份有限公司',
    description: '北京卫蓝新能源科技股份有限公司',
    keywords: '北京卫蓝新能源科技股份有限公司,卫蓝新能源,新能源,电池',
};

const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
    return (
        <html lang="en">
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
                        {/* Header */}
                        <Header />

                        {/* Main */}
                        <main>{children}</main>

                        {/* Footer */}
                        <Footer />
                    </ConfigProvider>
                </AntdRegistry>
            </body>
        </html>
    );
};

export default Layout;
