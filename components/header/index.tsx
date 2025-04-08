'use client';

import { Flex, Popover } from 'antd';
import classNames from 'classnames';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

/**
 * Styles
 */
import styles from './styles.module.scss';

/**
 * Constants
 */
const menus = [
    {
        href: '/',
        name: '首页',
    },
    {
        href: '/about-us',
        name: '关于我们',
    },
    {
        href: '/research-and-innovation',
        name: '固态电池研发与创新',
    },
    {
        href: '/applications-and-solutions',
        name: '应用与解决方案',
    },
    {
        href: '/news-media',
        name: '新闻媒体',
    },
    {
        href: '/contact-us',
        name: '联系我们',
    },
    {
        href: '/job',
        name: '人才招聘',
    },
];

const Header: React.FC = () => {
    /**
     * Hooks
     */
    const pathname = usePathname();

    console.log('pathname :>> ', pathname);

    return (
        <header className={styles.header}>
            <Flex align="center" justify="space-between">
                {/* Logo */}
                <Link href="/">
                    <img alt="北京卫蓝新能源科技股份有限公司" className={styles.logo} src="/static/header/logo.svg" />
                </Link>

                {/* 菜单 */}
                <Flex className={styles.menu} gap={12}>
                    {menus.map((menu) => (
                        <Link
                            className={classNames({ [styles.active]: pathname === menu.href })}
                            href={menu.href}
                            key={menu.href}
                        >
                            {menu.name}
                        </Link>
                    ))}
                </Flex>

                {/* 语言 */}
                <Popover arrow={false} content={<div>选择区域/语言功能开发中</div>} placement="bottomRight">
                    <Flex className={styles.language} gap={12}>
                        <img alt="" src="/static/header/icon_earth.svg" />

                        <span>选择区域/语言</span>

                        <img alt="" src="/static/header/icon_arrow_down.svg" />
                    </Flex>
                </Popover>
            </Flex>
        </header>
    );
};

export default Header;
