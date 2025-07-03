'use client';

import { useI18n } from '@/locales/client';
import ReactFullpage from '@fullpage/react-fullpage';
import { Col, Flex, Popover, Row } from 'antd';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

/**
 * Components
 */
import Footer from '@/components/footer';
import Header from '@/components/header';

/**
 * Styles
 */
import styles from '../styles.module.scss';

export default () => {
    /**
     * Params
     */
    const params = useParams();

    /**
     * Hooks
     */
    const t = useI18n();

    /**
     * States
     */
    const [active, setActive] = useState(false);

    /**
     * Effects
     */
    useEffect(() => {
        return () => {
            // @ts-ignore
            if (window.fullpage_api) {
                // @ts-ignore
                window.fullpage_api.moveTo(1);
            }
        };
    }, []);

    return (
        <>
            <Header active={active} locale={params.locale as string} />

            <ReactFullpage
                beforeLeave={(_, destination) => {
                    setActive([1].includes(destination.index));
                }}
                credits={{
                    enabled: false,
                }}
                render={() => (
                    <ReactFullpage.Wrapper>
                        <div className="section">
                            <Flex align="center" className={styles.global} justify="center" vertical>
                                <Flex align="center" gap={64}>
                                    <img alt="" height={565} src="/static/about-us/global.png" width={1099} />

                                    <Flex gap={9} vertical>
                                        <Popover
                                            arrow={false}
                                            classNames={{ body: styles['global-popover'] }}
                                            content={
                                                <Flex vertical>
                                                    <Flex gap={40} justify="space-between">
                                                        <div>{t('about.rd011')}</div>

                                                        <div>{t('about.rd012')}</div>
                                                    </Flex>

                                                    <Flex gap={40} justify="space-between">
                                                        <div>{t('about.rd013')}</div>

                                                        <div>{t('about.rd014')}</div>
                                                    </Flex>

                                                    <Flex gap={40} justify="space-between">
                                                        <div>{t('about.rd015')}</div>

                                                        <div>{t('about.rd016')}</div>
                                                    </Flex>

                                                    <Flex gap={40} justify="space-between">
                                                        <div>{t('about.rd017')}</div>

                                                        <div>{t('about.rd018')}</div>
                                                    </Flex>
                                                </Flex>
                                            }
                                            placement="left"
                                        >
                                            <div className={styles.t1}>
                                                <span />
                                                {t('about.rd01')}
                                            </div>
                                        </Popover>

                                        <Popover
                                            arrow={false}
                                            classNames={{ body: styles['global-popover'] }}
                                            content={
                                                <Flex vertical>
                                                    <div>{t('about.rd021')}</div>

                                                    <div>{t('about.rd022')}</div>

                                                    <div>{t('about.rd023')}</div>

                                                    <div>{t('about.rd024')}</div>
                                                </Flex>
                                            }
                                            placement="left"
                                        >
                                            <div className={styles.t2}>
                                                <span />
                                                {t('about.rd02')}
                                            </div>
                                        </Popover>

                                        <Popover
                                            arrow={false}
                                            classNames={{ body: styles['global-popover'] }}
                                            content={
                                                <Flex vertical>
                                                    <div>{t('about.rd031')}</div>

                                                    <div>{t('about.rd032')}</div>

                                                    <div>{t('about.rd033')}</div>

                                                    <div>{t('about.rd034')}</div>

                                                    <div>{t('about.rd035')}</div>
                                                </Flex>
                                            }
                                            placement="left"
                                        >
                                            <div className={styles.t3}>
                                                <span />
                                                {t('about.rd03')}
                                            </div>
                                        </Popover>
                                    </Flex>
                                </Flex>

                                <Row style={{ width: '100%', padding: '0 130px' }}>
                                    <Col span={8}>
                                        <div className={styles.title}>{t('about.rd1')}</div>

                                        <div className={styles.description}>
                                            {t('about.rd101')}
                                            {t('about.rd102')}
                                            {t('about.rd103')}
                                            {t('about.rd104')}
                                        </div>
                                    </Col>

                                    <Col span={8}>
                                        <div className={styles.title}>{t('about.rd2')}</div>

                                        <div className={styles.description}>
                                            {t('about.rd201')}
                                            {t('about.rd202')}
                                            {t('about.rd203')}
                                            {t('about.rd204')}
                                        </div>
                                    </Col>

                                    <Col span={8}>
                                        <div className={styles.title}>{t('about.rd3')}</div>

                                        <div className={styles.description}>
                                            {t('about.rd301')}
                                            {t('about.rd302')}
                                            {t('about.rd303')}
                                            {t('about.rd304')}
                                            {t('about.rd305')}
                                        </div>
                                    </Col>
                                </Row>
                            </Flex>
                        </div>

                        <div className="section fp-auto-height">
                            <Footer />
                        </div>
                    </ReactFullpage.Wrapper>
                )}
            />
        </>
    );
};
