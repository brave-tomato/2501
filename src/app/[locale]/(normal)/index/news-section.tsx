'use client';

import { useCurrentLocale, useI18n } from '@/locales/client';
import { Col, Flex, Row, Spin, Typography } from 'antd';
import classNames from 'classnames';
import Link from 'next/link';
import { useEffect, useState } from 'react';

/**
 * Components
 */
import AspectRatio from '@/components/aspect-ratio';

/**
 * Styles
 */
import styles from './styles.module.scss';

const NewsSection: React.FC = () => {
    /**
     * Hooks
     */
    const t = useI18n();
    const currentLocale = useCurrentLocale();

    /**
     * States
     */
    const [newsList, setNewsList] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    // 格式化日期为 YYYY-MM-DD
    const formatDate = (dateString: string) => {
        if (!dateString) return new Date().toISOString().split('T')[0];
        const date = new Date(dateString);
        return date.toISOString().split('T')[0];
    };

    // 去除 HTML 标签
    const stripHtml = (html: string) => {
        if (!html) return '';
        return html.replace(/<[^>]*>/g, '');
    };

    // 获取新闻数据
    useEffect(() => {
        const fetchNews = async () => {
            try {
                setLoading(true);
                const apiUrl = process.env.NEXT_PUBLIC_API_URL || '';
                // 根据当前语言获取对应的新闻数据，只获取前3条
                const language = currentLocale === 'zh' ? 'zh-CN' : 'en-US';
                const response = await fetch(`${apiUrl}/v1/news?is_deleted=false&size=3&lang=${language}`);
                const data = await response.json();
                setNewsList(data.data || data || []);
            } catch (error) {
                console.error('获取新闻数据失败:', error);
                setNewsList([]);
            } finally {
                setLoading(false);
            }
        };

        fetchNews();
    }, [currentLocale]);

    return (
        <div style={{ padding: '108px', backgroundColor: '#f7f7f7' }}>
            <Flex align="flex-end" justify="space-between" style={{ marginBottom: 40 }}>
                <Flex vertical>
                    <div className={styles.newsTitle1}>{t('index.news')}</div>

                    <div className={styles.newsTitle2}>News</div>
                </Flex>

                <Link className={styles.more} href={`/${currentLocale}/news`}>
                    <span>{t('index.more')}</span>

                    <img alt="" src="/static/index/icon_arrow_right.svg" />
                </Link>
            </Flex>

            {loading ? (
                <div style={{ textAlign: 'center', padding: '100px 0' }}>
                    <Spin size="large" />
                </div>
            ) : (
                <Row>
                    {newsList.map((news: any, index: number) => (
                        <Col
                            key={news.id || index}
                            className={index < 2 ? styles.shadow : ''}
                            span={index === 0 ? 10 : 7}
                            style={{ backgroundColor: '#fff' }}
                        >
                            <AspectRatio ratio={index === 0 ? 710 / 400 : 497 / 400}>
                                <img
                                    alt={news.title}
                                    className={styles.cover}
                                    src={news.cover || '/static/index/img_01.jpg'}
                                />

                                {/* <div className={styles.category}>{news.category || '综合要闻'}</div> */}
                            </AspectRatio>

                            <div style={{ margin: '48px 10% 60px' }}>
                                <Flex justify="space-between" align="center">
                                    <div className={styles.date}>
                                        {formatDate(news.publish_date || news.created_at)}
                                    </div>

                                    <Link href={`/${currentLocale}/news/${news.id}`}>
                                        <div className={styles.link}>
                                            <img alt="" src="/static/index/icon_arrow_right.svg" />
                                        </div>
                                    </Link>
                                </Flex>

                                <Link
                                    className={classNames(styles.title, index === 0 ? styles.title1 : '')}
                                    href={`/${currentLocale}/news/${news.id}`}
                                >
                                    {news.title}
                                </Link>

                                <Typography.Paragraph className={styles.content} ellipsis={{ rows: 4 }}>
                                    {stripHtml(news.summary || news.content || '')}
                                </Typography.Paragraph>
                            </div>
                        </Col>
                    ))}
                </Row>
            )}
        </div>
    );
};

export default NewsSection;
