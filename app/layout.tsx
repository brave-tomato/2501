import { AntdRegistry } from '@ant-design/nextjs-registry';
import '@ant-design/v5-patch-for-react-19';

/**
 * Components
 */
import Footer from '@/components/footer';
import Header from '@/components/header';

/**
 * Styles
 */
import 'antd/dist/reset.css';
import './global.css';

/**
 * Types
 */
import HeaderComponent from '@/components/header';
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
                    {/* Header */}
                    {/* <HeaderComponent /> */}

                    {/* Main */}
                    <main>{children}</main>

                    {/* Footer */}
                    {/* <Footer /> */}
                </AntdRegistry>
            </body>
        </html>
    );
};

export default Layout;
