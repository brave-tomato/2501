'use client';

import { useI18n } from '@/locales/client';
import ReactFullpage from '@fullpage/react-fullpage';
import { useSetState } from 'ahooks';
import { Col, Flex, Row } from 'antd';
import dayjs from 'dayjs';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useEffect } from 'react';

/**
 * Components
 */
import AspectRatio from '@/components/aspect-ratio';
import Footer from '@/components/footer';
import Header from '@/components/header';
import Swiper from '@/components/swiper';

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
    const [state, setState] = useSetState({
        active: false,
        data: [],
    });

    /**
     * Effects
     */
    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/v1/news?category=activity`)
            .then((res) => res.json())
            .then((data) => {
                setState({
                    data: data?.data || [],
                });
            });
    }, []);

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
            <Header active={state.active} locale={params.locale as string} />

            <ReactFullpage
                beforeLeave={(_, destination) => {
                    setState({ active: [1].includes(destination.index) });
                }}
                credits={{
                    enabled: false,
                }}
                render={() => (
                    <ReactFullpage.Wrapper>
                        {/* 协作共赢 改为 绿色发展 */}
                        <div className="section">
                            <div style={{ position: 'relative' }}>
                                <Row className={styles.cooperation}>
                                    <Col className={styles.bg1} span={8}>
                                        <Flex align="center" style={{ position: 'relative', top: '30%' }} vertical>
                                            <div className={styles.title}>{t('about.s1')}</div>

                                            <div className={styles.description}>Green Development</div>
                                        </Flex>
                                    </Col>

                                    <Col className={styles.bg2} span={8}>
                                        <Flex align="center" style={{ position: 'relative', top: '30%' }} vertical>
                                            <div className={styles.title}>{t('about.s2')}</div>

                                            <div className={styles.description}>Responsible Accountability</div>
                                        </Flex>
                                    </Col>

                                    <Col className={styles.bg3} span={8}>
                                        <Flex align="center" style={{ position: 'relative', top: '30%' }} vertical>
                                            <div className={styles.title}>{t('about.s3')}</div>

                                            <div className={styles.description}>Compliance-driven Governance</div>
                                        </Flex>
                                    </Col>
                                </Row>

                                {/* ESG */}
                                <div className={styles['esg-btn']}>
                                    <div className={styles.esg}>
                                        <img alt="" src="/images/about-us/esg.png" />

                                        <span>
                                            <span style={{ letterSpacing: '0.25em' }}>
                                                {params.locale === 'zh' ? '企业' : ''}ES
                                            </span>
                                            G
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="section fp-auto-height">
                            <div style={{ maxWidth: 1920, margin: '0 auto' }}>
                                {/* 可持续发展 */}
                                <div className={`${styles.sustainable} ${styles.b1}`}>
                                    <Row gutter={86}>
                                        <Col span={12}>
                                            <AspectRatio ratio={630 / 360}>
                                                <img alt="" src="/static/about-us/sustainable_1.png" />
                                            </AspectRatio>
                                        </Col>

                                        <Col span={12}>
                                            <div className={styles.title}>{t('about.s01')}</div>

                                            <div className={styles.description}>{t('about.s02')}</div>

                                            <Link href={`/${params.locale}/about-us/a1/`}>
                                                <div className={styles.button}>{t('about.s03')}</div>
                                            </Link>
                                        </Col>
                                    </Row>
                                </div>

                                <div className={`${styles.sustainable} ${styles.b0}`}>
                                    <Row gutter={86}>
                                        <Col span={12}>
                                            <div className={styles.title}>{t('about.s04')}</div>

                                            <div className={styles.description}>{t('about.s05')}</div>

                                            <Link href={`/${params.locale}/about-us/a1/`}>
                                                <div className={styles.button}>{t('about.s06')}</div>
                                            </Link>
                                        </Col>

                                        <Col span={12}>
                                            <AspectRatio ratio={630 / 360}>
                                                <img alt="" src="/static/about-us/sustainable_2.png" />
                                            </AspectRatio>
                                        </Col>
                                    </Row>
                                </div>

                                <div className={`${styles.sustainable} ${styles.b1}`}>
                                    <Row gutter={86}>
                                        <Col span={12}>
                                            <AspectRatio ratio={630 / 360}>
                                                <img alt="" src="/static/about-us/sustainable_3.png" />
                                            </AspectRatio>
                                        </Col>

                                        <Col span={12}>
                                            <div className={styles.title}>{t('about.s07')}</div>

                                            <div className={styles.description}>{t('about.s08')}</div>

                                            <Link href={`/${params.locale}/about-us/a1/`}>
                                                <div className={styles.button}>{t('about.s09')}</div>
                                            </Link>
                                        </Col>
                                    </Row>
                                </div>

                                {/* 员工关怀 */}
                                <div className={`${styles.sustainable}`}>
                                    <Flex style={{ marginBottom: 42 }} vertical>
                                        <div className={styles.newsTitle1}>{t('about.s10')}</div>

                                        <div className={styles.newsTitle2}>News</div>
                                    </Flex>

                                    <Swiper>
                                        {state.data.map((news: any) => (
                                            <Link
                                                className={styles.employee}
                                                href={`/${params.locale}/news/${news.id}`}
                                                key={news.id}
                                            >
                                                <AspectRatio ratio={332 / 232}>
                                                    <img alt="" src={news.cover} />
                                                </AspectRatio>

                                                <div className={styles.newsTitle3}>{news.title}</div>

                                                <div className={styles.newsDescription3}>
                                                    {dayjs(news.created).format('YYYY-MM-DD')}
                                                </div>
                                            </Link>
                                        ))}
                                    </Swiper>
                                </div>
                            </div>

                            {/* Footer */}
                            <Footer />
                        </div>
                    </ReactFullpage.Wrapper>
                )}
            />
        </>
    );
};
