'use client';

import { useI18n } from '@/locales/client';
import { Col, Flex, Row, Typography } from 'antd';
import classNames from 'classnames';
import dynamic from 'next/dynamic';
import Link from 'next/link';

/**
 * Components
 */
import AspectRatio from '@/components/aspect-ratio';
const Hero = dynamic(() => import('./hero'), { ssr: false });

/**
 * Styles
 */
import styles from './styles.module.scss';

const Index: React.FC = () => {
    /**
     * Hooks
     */
    const t = useI18n();

    return (
        <div className="mw-1920">
            {/* Hero */}
            <Hero />

            {/* News */}
            <div style={{ padding: '108px', backgroundColor: '#f7f7f7' }}>
                <Flex align="flex-end" justify="space-between" style={{ marginBottom: 40 }}>
                    <Flex vertical>
                        <div className={styles.newsTitle1}>{t('index.news')}</div>

                        <div className={styles.newsTitle2}>News</div>
                    </Flex>

                    <Link className={styles.more} href="/news-media">
                        <span>{t('index.more')}</span>

                        <img alt="" src="/static/index/icon_arrow_right.svg" />
                    </Link>
                </Flex>

                <Row>
                    <Col className={styles.shadow} span={10} style={{ backgroundColor: '#fff' }}>
                        <AspectRatio ratio={710 / 400}>
                            <img alt="" className={styles.cover} src="/static/index/img_01.jpg" />

                            <div className={styles.category}>综合要闻</div>
                        </AspectRatio>

                        <div style={{ margin: '48px 10% 60px' }}>
                            <Flex justify="space-between" align="center">
                                <div className={styles.date}>2025-04-05</div>

                                <Link href="/">
                                    <div className={styles.link}>
                                        <img alt="" src="/static/index/icon_arrow_right.svg" />
                                    </div>
                                </Link>
                            </Flex>

                            <Link className={classNames(styles.title, styles.title1)} href="/">
                                卫蓝新能源与钇威科技签署战略合作协议
                            </Link>

                            <Typography.Paragraph className={styles.content} ellipsis={{ rows: 4 }}>
                                2023年10月1日，卫蓝新能源在北京召开了全球布局战略发布会，宣布将在未来五年内在全球范围内投资100亿美元，建设多个固态电池生产基地。
                            </Typography.Paragraph>
                        </div>
                    </Col>

                    <Col className={styles.shadow} span={7} style={{ backgroundColor: '#fff' }}>
                        <AspectRatio ratio={497 / 400}>
                            <img alt="" className={styles.cover} src="/static/index/img_02.jpg" />

                            <div className={styles.category}>企业动态</div>
                        </AspectRatio>

                        <div style={{ margin: '48px 10% 60px' }}>
                            <Flex justify="space-between" align="center">
                                <div className={styles.date}>2025-03-30</div>

                                <Link href="/">
                                    <div className={styles.link}>
                                        <img alt="" src="/static/index/icon_arrow_right.svg" />
                                    </div>
                                </Link>
                            </Flex>

                            <Link className={styles.title} href="/">
                                卫蓝新能源入选2024年中国独角兽企业名单，排名第103位！
                            </Link>

                            <Typography.Paragraph className={styles.content} ellipsis={{ rows: 4 }}>
                                2023年10月1日，卫蓝新能源在北京召开了全球布局战略发布会，宣布将在未来五年内在全球范围内投资100亿美元，建设多个固态电池生产基地。
                            </Typography.Paragraph>
                        </div>
                    </Col>

                    <Col span={7} style={{ backgroundColor: '#fff' }}>
                        <AspectRatio ratio={497 / 400}>
                            <img alt="" className={styles.cover} src="/static/index/img_03.jpg" />

                            <div className={styles.category}>时事热点</div>
                        </AspectRatio>

                        <div style={{ margin: '48px 10% 60px' }}>
                            <Flex justify="space-between" align="center">
                                <div className={styles.date}>2024-11-27</div>

                                <Link href="/">
                                    <div className={styles.link}>
                                        <img alt="" src="/static/index/icon_arrow_right.svg" />
                                    </div>
                                </Link>
                            </Flex>

                            <Link className={styles.title} href="/">
                                卫蓝新能源固态锂离子储能电池荣获中国能源研究会技术创新一等奖
                            </Link>

                            <Typography.Paragraph className={styles.content} ellipsis={{ rows: 4 }}>
                                2023年10月1日，卫蓝新能源在北京召开了全球布局战略发布会，宣布将在未来五年内在全球范围内投资100亿美元，建设多个固态电池生产基地。
                            </Typography.Paragraph>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default Index;
