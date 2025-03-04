'use client';
import useHoverDetection from '@/hooks/useHoverDetection';
import useIsMobile from '@/hooks/useIsMobile';
import useScrollDetection from '@/hooks/useScrollDetection';
import { ICustomComponentProps } from '@/types';
import { Col, ConfigProvider, Flex, Image, Layout, Menu, Row } from 'antd';
import classNames from 'classnames';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { FC, useState } from 'react';
import AspectRatioImage from '../aspect-ratio-image';
import styles from './index.module.scss';
import LanuagesSwitch from './languages-switch';

const menuItems: any[] = [
    { key: 'index', label: '首页', path: '/' },
    { key: 'about-us', label: '关于我们', path: '/about-us' },
    { key: 'research-and-innovation', label: '研发与创新', path: '/research-and-innovation' },
    { key: 'applications-and-solutions', label: '应用与解决方案', path: '/applications-and-solutions' },
    { key: 'news-media', label: '新闻媒体', path: '/news-media' },
    { key: 'contact-us', label: '联系我们', path: '/contact-us' },
    { key: 'job', label: '人才招聘', path: '/job' },
];

/**
 * 头部导航
 */
const HeaderComponent: FC<ICustomComponentProps> = ({ className }) => {
    const { isHovered, handleMouseEnter, handleMouseLeave } = useHoverDetection();
    const isScrolled = useScrollDetection();
    const isMobile = useIsMobile();
    const pathname = usePathname();

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const [current, setCurrent] = useState('index');

    const onClick = (e: any) => {
        console.log('click ', e);
        setCurrent(e.key);
    };
    return (
        <Flex className={classNames(styles['header-wrapper'], 'flex justify-center items-center', className)}>
            <Row justify="center" align="middle">
                <Col span={5}>
                    <Image
                        preview={false}
                        src={
                            isHovered || isScrolled || isMobile
                                ? '/images/indexpage/nav_logo@2x.png'
                                : '/images/indexpage/nav_logo_white@2x.png'
                        }
                        alt="北京卫蓝新能源科技股份有限公司"
                    />
                </Col>
                <Col span={14}>
                    <ConfigProvider
                        theme={{
                            components: {
                                Menu: {
                                    horizontalItemSelectedColor: `var(--custom-green)`,
                                    colorItemTextSelected: '#fff',
                                    // colorPrimary: '#fff',
                                    // itemSelectedColor: 'pink',
                                },
                            },
                        }}
                    >
                        <Menu
                            onClick={onClick}
                            selectedKeys={[current]}
                            mode="horizontal"
                            items={menuItems}
                            style={{
                                borderBottom: '0',
                                height: 100,
                                alignItems: 'center',
                                backgroundColor: 'transparent',
                            }}
                            className={styles.menuDefault}
                        />
                    </ConfigProvider>
                </Col>
                <Col span={5}>
                    <LanuagesSwitch />
                </Col>
            </Row>
        </Flex>
    );
};

export default HeaderComponent;
