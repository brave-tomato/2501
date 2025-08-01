'use client';

import { useI18n } from '@/locales/client';
import { LinkedinOutlined, WechatOutlined } from '@ant-design/icons';
import { Col, Flex, Popover, QRCode, Row } from 'antd';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

/**
 * Styles
 */
import styles from './styles.module.scss';

const Footer: React.FC = () => {
    const t = useI18n();

    const pathname = usePathname();
    const shouldShowLine = pathname !== '/';

    return (
        <footer className={styles.footer}>
            {/* 分割线 */}
            {shouldShowLine && <div className={styles.line} />}

            <Row justify="center">
                <Col span={2}>
                    <Link className={styles.title1} href="/about-us">
                        {t('menu.about')}
                    </Link>

                    <Flex gap={8} style={{ marginTop: 24 }} vertical>
                        <div className={styles.title2}>{t('menu.about1')}</div>

                        <div className={styles.title2}>{t('menu.about2')}</div>

                        <div className={styles.title2}>{t('menu.about3')}</div>

                        <div className={styles.title2}>{t('menu.about4')}</div>
                    </Flex>
                </Col>

                <Col span={1} />

                <Col span={2}>
                    <Link className={styles.title1} href="/research">
                        {t('menu.research')}
                    </Link>

                    <Flex gap={8} style={{ marginTop: 24 }} vertical>
                        <div className={styles.title2}>固态电池研发</div>

                        <div className={styles.title2}>固态电池制造</div>
                    </Flex>
                </Col>

                <Col span={1} />

                <Col span={2}>
                    <Link className={styles.title1} href="/solution">
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
                        <Link className={styles.title1} href="/news">
                            新闻
                        </Link>

                        <Link className={styles.title1} href="/contact-us">
                            联系我们
                        </Link>

                        <Link className={styles.title1} href="/jobs">
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
