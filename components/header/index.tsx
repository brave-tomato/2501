'use client';

import useHoverDetection from '@/hooks/useHoverDetection';
import useIsMobile from '@/hooks/useIsMobile';
import useScrollDetection from '@/hooks/useScrollDetection';
import { ICustomComponentProps } from '@/types';
import { getConf } from '@/utils';
import { Flex, Grid, Menu } from 'antd';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React, { FC, useEffect, useState } from 'react';
import AspectRatio from '../aspect-ratio';
import LanuagesSwitch from './languages-switch';

// 定义菜单项的类型
type MenuItem = {
    key: string;
    label: React.ReactNode;
};

// 菜单项列表
const menuItems: MenuItem[] = [
    {
        key: 'index',
        label: <Link href="/">首页</Link>,
    },
    {
        key: 'about-us',
        label: <Link href="/about-us">关于我们</Link>,
    },
    {
        key: 'research-and-innovation',
        label: <Link href="/research-and-innovation">固态电池研发与创新</Link>,
    },
    {
        key: 'applications-and-solutions',
        label: <Link href="/applications-and-solutions">应用与解决方案</Link>,
    },
    {
        key: 'news-media',
        label: <Link href="/news-media">新闻媒体</Link>,
    },
    {
        key: 'contact-us',
        label: <Link href="/contact-us">联系我们</Link>,
    },
    {
        key: 'job',
        label: <Link href="/job">人才招聘</Link>,
    },
];

// 头部高度常量
const HEADER_HEIGHT = 70;

/**
 * 头部导航组件
 */
const HeaderComponent: FC<ICustomComponentProps> = ({ className }) => {
    // 获取配置信息
    const conf = getConf(Grid.useBreakpoint());

    // 悬停检测
    const { isHovered, handleMouseEnter, handleMouseLeave } = useHoverDetection();
    // 滚动检测
    const isScrolled = useScrollDetection();
    // 移动设备检测
    const isMobile = useIsMobile();
    // 获取当前路径名
    const pathname = usePathname();

    // 移动菜单展开状态
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    // 初始化当前选中的菜单项
    const storedKey = localStorage.getItem('selectedMenuKey');
    let initialCurrent;
    if (pathname === '/') {
        initialCurrent = 'index';
    } else {
        const pathKey = pathname.slice(1); // 去掉路径名前面的斜杠
        const foundItem = menuItems.find((item) => item.key === pathKey);
        initialCurrent = foundItem ? pathKey : storedKey || 'index';
    }

    // 当前选中的菜单项
    const [current, setCurrent] = useState(initialCurrent);

    useEffect(() => {
        const storedKey = localStorage.getItem('selectedMenuKey');
        let newCurrent;
        if (pathname === '/') {
            newCurrent = 'index';
        } else {
            const pathKey = pathname.slice(1); // 去掉路径名前面的斜杠
            const foundItem = menuItems.find((item) => item.key === pathKey);
            newCurrent = foundItem ? pathKey : storedKey || 'index';
        }
        setCurrent(newCurrent);
        localStorage.setItem('selectedMenuKey', newCurrent);
    }, [pathname]);

    // 菜单项点击处理函数
    const handleMenuItemClick = (e: { key: string }) => {
        setCurrent(e.key);
        localStorage.setItem('selectedMenuKey', e.key);
    };

    return (
        <Flex
            align="center"
            justify="space-between"
            gap={12}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                height: HEADER_HEIGHT,
                padding: '0 70px',
                background: isHovered || isScrolled ? '#fff' : '',
                zIndex: 999,
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div style={{ width: 300 }}>
                <AspectRatio ratio={conf.logo}>
                    <img
                        src={
                            isHovered || isScrolled || isMobile
                                ? '/images/indexpage/nav_logo@2x.png'
                                : '/images/indexpage/nav_logo_white@2x.png'
                        }
                        alt="北京卫蓝新能源科技股份有限公司"
                    />
                </AspectRatio>
            </div>

            <Menu
                onClick={handleMenuItemClick}
                selectedKeys={[current]}
                mode="horizontal"
                items={menuItems}
                style={{
                    borderBottom: '0',
                    height: HEADER_HEIGHT,
                    alignItems: 'center',
                    backgroundColor: 'transparent',
                }}
                className={isScrolled || isHovered ? 'menu-night' : 'menu-light'}
            />

            <LanuagesSwitch isHovered={isHovered} />
        </Flex>
    );
};

export default HeaderComponent;
