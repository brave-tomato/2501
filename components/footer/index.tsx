'use client';

import { LinkedinOutlined, WechatOutlined } from '@ant-design/icons';
import { Col, Flex, Popover, QRCode, Row } from 'antd';
import Link from 'next/link';

/**
 * Styles
 */
import styles from './styles.module.scss';

const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <Row justify="center">
                <Col span={2}>
                    <Link className={styles.title1} href="/about-us">
                        关于我们
                    </Link>

                    <Flex gap={8} style={{ marginTop: 24 }} vertical>
                        <div className={styles.title2}>企业文化</div>

                        <div className={styles.title2}>公司简介</div>

                        <div className={styles.title2}>全球布局</div>

                        <div className={styles.title2}>可持续发展</div>
                    </Flex>
                </Col>

                <Col span={1} />

                <Col span={2}>
                    <Link className={styles.title1} href="/research-and-innovation">
                        固态电池研发与创新
                    </Link>

                    <Flex gap={8} style={{ marginTop: 24 }} vertical>
                        <div className={styles.title2}>固态电池研发</div>

                        <div className={styles.title2}>固态电池制造</div>
                    </Flex>
                </Col>

                <Col span={1} />

                <Col span={2}>
                    <Link className={styles.title1} href="/applications-and-solutions">
                        应用与解决方案
                    </Link>

                    <Flex gap={8} style={{ marginTop: 24 }} vertical>
                        <div className={styles.title2}>动力类应用</div>

                        <div className={styles.title2}>低空经济类应用</div>

                        <div className={styles.title2}>储能应用</div>
                    </Flex>
                </Col>

                <Col span={1} />

                <Col span={2}>
                    <Flex gap={8} vertical>
                        <Link className={styles.title1} href="/news-media">
                            新闻媒体
                        </Link>

                        <Link className={styles.title1} href="/">
                            制造
                        </Link>

                        <Link className={styles.title1} href="/">
                            服务
                        </Link>

                        <Link className={styles.title1} href="/contact-us">
                            联系我们
                        </Link>

                        <Link className={styles.title1} href="/job">
                            人才招聘
                        </Link>
                    </Flex>
                </Col>

                <Col span={1} />

                <Col span={3}>
                    <Flex gap={24} align="flex-end" vertical>
                        <img alt="" height={26} src="/static/footer/logo.png" width={201} />

                        <Flex gap={24}>
                            <a
                                href="https://www.linkedin.com/company/beijing-welion-new-energy-technology-co-ltd/"
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                <LinkedinOutlined className={styles.icon} />
                            </a>

                            <Popover
                                content={
                                    <QRCode bordered={false} value="http://weixin.qq.com/r/rS785DrEOmdFrX6H93u-" />
                                }
                            >
                                <WechatOutlined className={styles.icon} />
                            </Popover>
                        </Flex>
                    </Flex>
                </Col>
            </Row>
        </footer>
    );
};

export default Footer;
