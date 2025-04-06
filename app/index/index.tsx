'use client';

import { RightOutlined } from '@ant-design/icons';
import { Col, Flex, Row, Typography } from 'antd';
import Link from 'next/link';

/**
 * Components
 */
import AspectRatio from '@/components/aspect-ratio';
import Hero from './hero';

/**
 * Styles
 */
import styles from './styles.module.scss';

const Index: React.FC = () => {
    return (
        <div className="mw-1920">
            {/* Hero */}
            <Hero />

            {/* News */}
            <Row>
                <Col className={styles.shadow} span={10}>
                    <AspectRatio ratio={800 / 690}>
                        <img alt="" className={styles.cover} src="/static/index/img_01.jpg" />

                        <div className={styles.category}>综合要闻</div>
                    </AspectRatio>

                    <div style={{ margin: '10%' }}>
                        <Flex justify="space-between" align="center">
                            <div className={styles.date}>2025-04-05</div>

                            <Link href="/">
                                <div className={styles.link}>
                                    <RightOutlined />
                                </div>
                            </Link>
                        </Flex>

                        <Link className={styles.title} href="/">
                            卫蓝新能源与钇威科技签署战略合作协议
                        </Link>

                        <Typography.Paragraph className={styles.content} ellipsis={{ rows: 4 }}>
                            2023年10月1日，卫蓝新能源在北京召开了全球布局战略发布会，宣布将在未来五年内在全球范围内投资100亿美元，建设多个固态电池生产基地。
                        </Typography.Paragraph>
                    </div>
                </Col>

                <Col className={styles.shadow} span={7}>
                    <AspectRatio ratio={560 / 690}>
                        <img alt="" className={styles.cover} src="/static/index/img_02.jpg" />

                        <div className={styles.category}>企业动态</div>
                    </AspectRatio>

                    <div style={{ margin: '10%' }}>
                        <Flex justify="space-between" align="center">
                            <div className={styles.date}>2025-03-30</div>

                            <Link href="/">
                                <div className={styles.link}>
                                    <RightOutlined />
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

                <Col span={7}>
                    <AspectRatio ratio={560 / 690}>
                        <img alt="" className={styles.cover} src="/static/index/img_03.jpg" />

                        <div className={styles.category}>时事热点</div>
                    </AspectRatio>

                    <div style={{ margin: '10%' }}>
                        <Flex justify="space-between" align="center">
                            <div className={styles.date}>2024-11-27</div>

                            <Link href="/">
                                <div className={styles.link}>
                                    <RightOutlined />
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

            {/* 灰条 */}
            <div style={{ height: 24, backgroundColor: '#f3f3f3' }} />
        </div>
    );
};

export default Index;
