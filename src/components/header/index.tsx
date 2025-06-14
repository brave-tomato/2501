'use client';

import { useChangeLocale, useI18n } from '@/locales/client';
import { useSetState } from 'ahooks';
import { Button, Flex, Popover } from 'antd';
import classNames from 'classnames';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

/**
 * Styles
 */
import styles from './styles.module.scss';

/**
 * Types
 */
type Props = {
    active?: boolean;
    locale: string;
    onClick?: (href: string) => void;
};

/**
 * Constants
 */
const menus = [
    {
        href: '/',
        name: '首页',
    },
    {
        href: '/about-us/',
        name: '关于我们',
        children: [
            { href: '/about-us/', name: '简介&文化' },
            { href: '/about-us/history/', name: '公司历史' },
            { href: '/about-us/global-layout/', name: '全球布局' },
            { href: '/about-us/sustainable-development/', name: '可持续发展' },
        ],
    },
    {
        href: '/research/',
        name: '固态电池产业化',
        children: [
            { href: '/research/', name: '固态电池研发' },
            { href: '/manufacture/', name: '固态电池制造' },
        ],
    },
    {
        href: '/solution/',
        name: '应用与解决方案',
        children: [
            { href: '/solution/a1/', name: '动力类应用' },
            { href: '/solution/a2/', name: '低空经济类应用' },
            { href: '/solution/c3/', name: '储能应用' },
        ],
    },
    {
        href: '/news/',
        name: '新闻',
    },
    {
        href: '/contact-us/',
        name: '联系我们',
    },
    {
        href: '/jobs/',
        name: '人才招聘',
    },
];

export default ({ active, locale, onClick }: Props) => {
    /**
     * Hooks
     */
    const changeLocale = useChangeLocale();

    const t = useI18n();

    const pathname = usePathname();

    /**
     * States
     */
    const [state, setState] = useSetState({
        active: false,
        hash: '',
        scroll: false,
    });

    /**
     * Events
     */
    const getHref = (href: string) => {
        return `/${locale}${href}`;
    };

    /**
     * Effects
     */
    useEffect(() => {
        const onHashChange = () => {
            setState({
                hash: window.location.hash,
            });
        };
        onHashChange();

        window.addEventListener('hashchange', onHashChange);

        const onScroll = () => {
            setState({
                scroll: window.scrollY > 0,
            });
        };

        window.addEventListener('scroll', onScroll);

        return () => {
            window.removeEventListener('hashchange', onHashChange);

            window.removeEventListener('scroll', onScroll);
        };
    }, []);

    useEffect(() => {
        setState({
            active: pathname === `/${locale}/jobs/`,
        });
    }, [pathname]);

    return (
        <header
            className={classNames(styles.header, { [styles.headerActive]: active || state.active || state.scroll })}
        >
            <Flex align="center" justify="space-between" style={{ height: '100%' }}>
                {/* Logo */}
                <Link className={styles.logo} href={`/${locale}/`} />

                {/* Menu */}
                <Flex className={styles.menu} gap={12}>
                    {menus.map((menu) => (
                        <div key={getHref(menu.href)}>
                            <Link
                                className={classNames(styles.link, {
                                    [styles.active]:
                                        pathname === getHref(menu.href) ||
                                        menu.children?.some((submenu) => pathname === getHref(submenu.href)),
                                })}
                                href={getHref(menu.href)}
                                onClick={() => {
                                    onClick?.(menu.href);
                                }}
                            >
                                {menu.name}
                            </Link>

                            {menu.children && (
                                <div className={styles.submenu}>
                                    <Flex gap={28} justify="center">
                                        {menu.children.map((submenu) => (
                                            <Link
                                                className={classNames(styles.sublink, {
                                                    [styles.active]:
                                                        pathname === getHref(submenu.href) ||
                                                        pathname + state.hash === getHref(submenu.href),
                                                })}
                                                href={getHref(submenu.href)}
                                                key={getHref(submenu.href)}
                                                onClick={() => {
                                                    onClick?.(submenu.href);
                                                }}
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

                {/* Language */}
                <Popover
                    arrow={false}
                    content={
                        <Flex gap={8}>
                            <Button type="text" onClick={() => changeLocale('zh')}>
                                <span>🇨🇳</span> 简体中文
                            </Button>

                            <Button type="text" onClick={() => changeLocale('en')}>
                                <span>🇺🇸</span> English
                            </Button>
                        </Flex>
                    }
                    placement="bottomRight"
                >
                    <Flex align="center" className={styles.language} gap={14}>
                        <img alt="" className={styles.icon} src="/static/header/icon_earth.svg" width={22} />
                        <img alt="" className={styles.iconWhite} src="/static/header/icon_earth_white.svg" width={22} />

                        <span>{t('language')}</span>

                        <img alt="" className={styles.icon} src="/static/header/icon_arrow_down.svg" width={20} />
                        <img
                            alt=""
                            className={styles.iconWhite}
                            src="/static/header/icon_arrow_down_white.svg"
                            width={20}
                        />
                    </Flex>
                </Popover>
            </Flex>
        </header>
    );
};
