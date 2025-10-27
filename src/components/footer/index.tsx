'use client';

import { useI18n } from '@/locales/client';
import { LinkedinOutlined, WechatOutlined } from '@ant-design/icons';
import { Col, Flex, Popover, QRCode, Row } from 'antd';
import Link from 'next/link';
import { useParams, usePathname } from 'next/navigation';

/**
 * Styles
 */
import styles from './styles.module.scss';

const Footer: React.FC = () => {
    const t = useI18n();
    /**
     * Params
     */
    const params = useParams();

    const pathname = usePathname();
    const shouldShowLine = pathname !== '/';

    return (
        <footer className={styles.footer}>
            {/* 分割线 */}
            {shouldShowLine && <div className={styles.line} />}

            <Row justify="center">
                <Col span={2}>
                    <Link className={styles.title1} href={`/${params.locale}/about-us`}>
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
                    <Link className={styles.title1} href={`/${params.locale}/research`}>
                        {t('menu.research')}
                    </Link>

                    <Flex gap={8} style={{ marginTop: 24 }} vertical>
                        <div className={styles.title2}>{t('menu.research1')}</div>

                        <div className={styles.title2}>{t('menu.research2')}</div>
                    </Flex>
                </Col>

                <Col span={1} />

                <Col span={2}>
                    <Link className={styles.title1} href={`/${params.locale}/solution`}>
                        {t('menu.applications')}
                    </Link>

                    <Flex gap={8} style={{ marginTop: 24 }} vertical>
                        <div className={styles.title2}>{t('applications.powerApplications')}</div>

                        <div className={styles.title2}>{t('applications.lowAltitudeApplications')}</div>

                        <div className={styles.title2}>{t('applications.energyStorageApplications')}</div>
                    </Flex>
                </Col>

                <Col span={1} />

                <Col span={2}>
                    <Flex gap={8} vertical>
                        <Link className={styles.title1} href={`/${params.locale}/news`}>
                            {t('menu.news')}
                        </Link>

                        <Link className={styles.title1} href={`/${params.locale}/contact-us`}>
                            {t('menu.contact')}
                        </Link>

                        <Link className={styles.title1} href={`/${params.locale}/jobs`}>
                            {t('menu.jobs')}
                        </Link>
                    </Flex>
                </Col>

                <Col span={1} />

                <Col span={3}>
                    <Flex gap={24} align="flex-end" vertical>
                        <img alt="" height={26} src="/static/footer/logo.png" width={201} />

                        <Flex gap={24}>
                            {/* <a
                                href="https://www.linkedin.com/company/beijing-welion-new-energy-technology-co-ltd/"
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                <LinkedinOutlined className={styles.icon} />
                            </a> */}

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
