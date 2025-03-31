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
import LanguagesSwitch from './languages-switch';

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
    const router = useRouter();

    // 修正路径匹配逻辑：支持嵌套路径
    const getKeyFromPath = (path: string) => {
        if (path === '/') return 'index';
        // 匹配所有以菜单项路径开头的路径
        for (const item of menuItems) {
            if (item.key === 'index') continue;
            const itemPath = `/${item.key}`;
            if (path.startsWith(itemPath)) {
                return item.key;
            }
        }
        return 'index';
    };

    // 初始值直接根据当前路径计算
    const [current, setCurrent] = useState(() => {
        if (typeof window === 'undefined') return 'index';
        // 优先使用本地存储的值（如果存在且有效）
        const storedKey = window.localStorage.getItem('selectedMenuKey');
        if (storedKey && menuItems.some((item) => item.key === storedKey)) {
            return storedKey;
        }
        return getKeyFromPath(pathname);
    });

    // 路径变化时同步状态和存储
    useEffect(() => {
        const newCurrent = getKeyFromPath(pathname);
        if (newCurrent !== current) {
            setCurrent(newCurrent);
            if (typeof window !== 'undefined') {
                // 更新本地存储
                window.localStorage.setItem('selectedMenuKey', newCurrent);
            }
        }
    }, [pathname]);

    // 菜单点击处理：仅负责导航
    const handleMenuItemClick = (e: { key: string }) => {
        const href = menuItems.find((item) => item.key === e.key)?.label.props.href;
        if (href) {
            router.push(href);
        }
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
                transition: 'background 0.3s ease', // 添加背景色过渡效果
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={className}
        >
            {/* Logo部分 */}
            <div style={{ width: 300, cursor: 'pointer' }} onClick={() => router.push('/')}>
                <AspectRatio ratio={conf.logo}>
                    <img
                        src={
                            isHovered || isScrolled || isMobile
                                ? '/images/indexpage/nav_logo@2x.png'
                                : '/images/indexpage/nav_logo_white@2x.png'
                        }
                        alt="北京卫蓝新能源科技股份有限公司"
                        style={{ height: '100%', objectFit: 'contain' }}
                    />
                </AspectRatio>
            </div>

            {/* 导航菜单 */}
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
                    flex: 1,
                    justifyContent: 'center',
                }}
                className={isScrolled || isHovered ? 'menu-night' : 'menu-light'}
            />

            {/* 语言切换器 */}
            <LanguagesSwitch isHovered={isHovered} />
        </Flex>
    );
};

export default HeaderComponent;
