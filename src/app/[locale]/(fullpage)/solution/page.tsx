'use client';

import { useI18n } from '@/locales/client';
import ReactFullpage from '@fullpage/react-fullpage';
import { Flex, Space } from 'antd';
import classNames from 'classnames';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

/**
 * Components
 */
import Footer from '@/components/footer';
import Header from '@/components/header';
import { Title5 } from '@/components/headline';

/**
 * Styles
 */
import styles from './styles.module.scss';

export default () => {
    /**
     * Params
     */
    const params = useParams();
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
                    setActive(![0].includes(destination.index));
                }}
                credits={{
                    enabled: false,
                }}
                render={() => (
                    <ReactFullpage.Wrapper>
                        <div className={classNames('section')} style={{ position: 'relative' }}>
                            <video
                                autoPlay
                                muted
                                playsInline
                                style={{
                                    position: 'absolute',
                                    inset: 0,
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                }}
                            >
                                <source src="https://files.welion.asia/solution/banner.mp4" type="video/mp4" />
                            </video>

                            <Title5
                                className="slide-top"
                                style={{
                                    position: 'absolute',
                                    top: '25%',
                                    left: '9.5833%',
                                }}
                                title={t('applications.title')}
                            />
                        </div>

                        <div className="section">
                            <Flex align="center" justify="center" style={{ height: '100vh' }}>
                                <Flex vertical>
                                    <Link href={`/${params.locale}/solution/a1/`}>
                                        <Space size={36}>
                                            <span className={styles.t1}>{t('applications.powerApplications')}</span>

                                            <img alt="" height={80} src="/static/solution/icon.png" width={80} />
                                        </Space>
                                    </Link>

                                    <div className={styles.t2}>{t('applications.powerDescription')}</div>

                                    <div className={styles.t3}>
                                        Power type
                                        <br />
                                        applications
                                    </div>
                                </Flex>

                                <img alt="" height={399} src="/static/solution/solution1.png" width={541} />
                            </Flex>
                        </div>

                        <div className="section">
                            <Flex align="center" justify="center" style={{ height: '100vh' }}>
                                <Flex vertical>
                                    <Link href={`/${params.locale}/solution/a2/`}>
                                        <Space size={36}>
                                            <span className={styles.t1}>
                                                {t('applications.lowAltitudeApplications')}
                                            </span>

                                            <img alt="" height={80} src="/static/solution/icon.png" width={80} />
                                        </Space>
                                    </Link>

                                    <div className={styles.t2}>{t('applications.lowAltitudeDescription')}</div>

                                    <div className={styles.t3}>
                                        Low-altitude
                                        <br />
                                        economic
                                        <br />
                                        applications
                                    </div>
                                </Flex>

                                <img alt="" height={399} src="/static/solution/solution2.png" width={541} />
                            </Flex>
                        </div>

                        <div className="section">
                            <Flex align="center" justify="center" style={{ height: '100vh' }}>
                                <Flex vertical>
                                    <Link href={`/${params.locale}/solution/c3/`}>
                                        <Space size={36}>
                                            <span className={styles.t1}>
                                                {t('applications.energyStorageApplications')}
                                            </span>

                                            <img alt="" height={80} src="/static/solution/icon.png" width={80} />
                                        </Space>
                                    </Link>

                                    <div className={styles.t2}>{t('applications.energyStorageDescription')}</div>

                                    <div className={styles.t3}>
                                        Energy
                                        <br />
                                        storage
                                        <br />
                                        applications
                                    </div>
                                </Flex>

                                <img alt="" height={399} src="/static/solution/solution3.png" width={541} />
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
