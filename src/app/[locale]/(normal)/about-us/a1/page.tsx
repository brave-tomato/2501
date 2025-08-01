'use client';

import { useI18n } from '@/locales/client';
import { Flex, Space } from 'antd';
import Link from 'next/link';

/**
 * Components
 */
import AspectRatio from '@/components/aspect-ratio';

/**
 * Styles
 */
import styles from './styles.module.scss';

/**
 * Constants
 */
const links = [
    [
        {
            text: 'about.sa04',
            href: '/static/about-us/a1/11.pdf',
        },
        {
            text: 'about.sa05',
            href: '/static/about-us/a1/12.pdf',
        },
        {
            text: 'about.sa06',
            href: '/static/about-us/a1/13.pdf',
        },
        {
            text: 'about.sa07',
            href: '/static/about-us/a1/14.pdf',
        },
    ],
    [
        {
            text: 'Supplier Sustainability | PPG',
            href: '/static/about-us/a1/21.pdf',
        },
        {
            text: 'about.sa09',
            href: '/static/about-us/a1/22.pdf',
        },
        {
            text: 'about.sa10',
            href: '/static/about-us/a1/23.pdf',
        },
        {
            text: 'about.sa11',
            href: '/static/about-us/a1/24.pdf',
        },
    ],
];

export default () => {
    const t = useI18n();

    return (
        <div className="mw-1920" style={{ backgroundColor: '#f7f7f7' }}>
            <AspectRatio ratio={1920 / 560}>
                <img
                    alt=""
                    src="/static/about-us/a1/banner.jpg"
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                    }}
                />

                <div className={styles['banner-text']}>{t('about.sa01')}</div>
            </AspectRatio>

            <div className={styles.content}>
                <div className={styles.description}>{t('about.sa02')}</div>

                {links[0].map((item) => (
                    <div className={styles.item} key={item.href}>
                        <Flex justify="space-between">
                            <Space size={24}>
                                <img alt="" className={styles['item-icon']} src="/static/about-us/a1/icon-1.svg" />

                                <div className={styles['item-title']}>{t(item.text)}</div>
                            </Space>

                            <Link href={item.href} target="_blank">
                                <Space size={24}>
                                    <img alt="" className={styles['item-icon2']} src="/static/about-us/a1/icon-2.svg" />

                                    <div className={styles['item-title2']}>{t('about.sa03')}</div>
                                </Space>
                            </Link>
                        </Flex>
                    </div>
                ))}

                <div className={styles.title}>{t('about.sa08')}</div>

                {links[1].map((item) => (
                    <div className={styles.item} key={item.href}>
                        <Flex justify="space-between">
                            <Space size={24}>
                                <img alt="" className={styles['item-icon']} src="/static/about-us/a1/icon-1.svg" />

                                <div className={styles['item-title']}>{t(item.text)}</div>
                            </Space>

                            <Link href={item.href} target="_blank">
                                <Space size={24}>
                                    <img alt="" className={styles['item-icon2']} src="/static/about-us/a1/icon-2.svg" />

                                    <div className={styles['item-title2']}>{t('about.sa03')}</div>
                                </Space>
                            </Link>
                        </Flex>
                    </div>
                ))}
            </div>
        </div>
    );
};
