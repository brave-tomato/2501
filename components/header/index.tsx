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
        children: [
            { href: '/about-us/team0', name: '愿景使命价值观' },
            { href: '/about-us/team1', name: '员工关怀' },
            { href: '/about-us/team2', name: '企业简介' },
            { href: '/about-us/team3', name: '全球布局' },
            { href: '/about-us/team4', name: '可持续发展' },
        ],
    },
    {
        href: '/research-and-innovation',
        name: '固态电池研发与创新',
    },
    {
        href: '/applications-and-solutions',
        name: '应用与解决方案',
        children: [
            { href: '/applications-and-solutions/automotive', name: '动力类应用' },
            { href: '/applications-and-solutions/energy-storage', name: '低空经济类应用' },
            { href: '/applications-and-solutions/consumer-electronics', name: '储能应用' },
        ],
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
    {
        href: '/t',
        name: 'T',
    },
];

const Header: React.FC = () => {
    /**
     * Hooks
     */
    const pathname = usePathname();

    return (
        <>
            <header className={styles.header}>
                <Flex align="center" justify="space-between">
                    {/* Logo */}
                    <Link href="/">
                        <img
                            alt="北京卫蓝新能源科技股份有限公司"
                            className={styles.logo}
                            src="/static/header/logo.svg"
                        />
                    </Link>

                    {/* 菜单 */}
                    <Flex className={styles.menu} gap={12}>
                        {menus.map((menu) => (
                            <div key={menu.href}>
                                <Link
                                    className={classNames(styles.link, {
                                        [styles.active]:
                                            pathname === menu.href ||
                                            menu.children?.some((submenu) => pathname === submenu.href),
                                    })}
                                    href={menu.href}
                                >
                                    {menu.name}
                                </Link>

                                {menu.children && (
                                    <div className={styles.submenu}>
                                        <Flex gap={50} justify="center">
                                            {menu.children.map((submenu) => (
                                                <Link
                                                    className={classNames(styles.sublink, {
                                                        [styles.active]: pathname === submenu.href,
                                                    })}
                                                    href={submenu.href}
                                                    key={submenu.href}
                                                >
                                                    {submenu.name}
                                                </Link>
                                            ))}
                                        </Flex>
                                    </div>
                                )}
                            </div>
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

            <div style={{ height: 70 }} />
        </>
    );
};

export default Header;
