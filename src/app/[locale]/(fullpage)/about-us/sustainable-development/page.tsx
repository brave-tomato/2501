'use client';

import { useSetState } from 'ahooks';
import { Col, Flex, Row } from 'antd';
import dayjs from 'dayjs';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useEffect, useRef } from 'react';

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
    const fullpageRef = useRef<HTMLDivElement>(null);

    const fullpageInstanceRef = useRef<any>(null);

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
        if (fullpageRef.current) {
            // @ts-ignore
            const instance = new fullpage(fullpageRef.current, {
                animateAnchor: true,
                credits: {
                    enabled: false,
                },
                lockAnchors: false,
                normalScrollElements: 'header',
                beforeLeave: (origin: any, destination: any) => {
                    const active = [1].includes(destination.index) || [''].includes(destination.anchor);

                    // 特殊页面高亮菜单
                    setState({ active });
                },
            });

            // 优化 hash 缓存不更新的问题
            if (window.location.hash) {
                instance.moveTo(window.location.hash.replace('#', ''));
            }

            fullpageInstanceRef.current = instance;

            return () => {
                instance.destroy('all');
            };
        }
    }, [fullpageRef]);

    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/v1/news?category=activity`)
            .then((res) => res.json())
            .then((data) => {
                setState({
                    data: data?.data || [],
                });
            });
    }, []);

    return (
        <>
            <Header
                active={state.active}
                locale={params.locale as string}
                onClick={(href) => {
                    if (href.includes('#')) {
                        fullpageInstanceRef.current?.moveTo(href.split('#')[1]);
                    }
                }}
            />

            <div ref={fullpageRef}>
                {/* 协作共赢 改为 绿色发展 */}
                <div className="section">
                    <div style={{ position: 'relative' }}>
                        <Row className={styles.cooperation}>
                            <Col className={styles.bg1} span={8}>
                                <Flex align="center" style={{ position: 'relative', top: '30%' }} vertical>
                                    <div className={styles.title}>绿色发展</div>

                                    <div className={styles.description}>Green Development</div>
                                </Flex>
                            </Col>

                            <Col className={styles.bg2} span={8}>
                                <Flex align="center" style={{ position: 'relative', top: '30%' }} vertical>
                                    <div className={styles.title}>履责担当</div>

                                    <div className={styles.description}>Responsible Accountability</div>
                                </Flex>
                            </Col>

                            <Col className={styles.bg3} span={8}>
                                <Flex align="center" style={{ position: 'relative', top: '30%' }} vertical>
                                    <div className={styles.title}>合规治企</div>

                                    <div className={styles.description}>Compliance-driven Governance</div>
                                </Flex>
                            </Col>
                        </Row>

                        {/* ESG */}
                        <div className={styles['esg-btn']}>
                            <div className={styles.esg}>
                                <img alt="" src="/images/about-us/esg.png" />

                                <span>
                                    <span style={{ letterSpacing: '0.25em' }}>企业ES</span>G
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
                                    <div className={styles.title}>供应链尽责管理</div>

                                    <div className={styles.description}>
                                        卫蓝新能源严格甄选具有相同可持续发展经营理念的供应商，供应商筛选、评估、准入、动态管理等全流程采取严格的管控措施，建立公开评估准则，提高供应商履行社会责任的意识，推进负责任供应链的建设。
                                    </div>

                                    <div className={styles.button}>了解我们的供应链管理</div>
                                </Col>
                            </Row>
                        </div>

                        <div className={`${styles.sustainable} ${styles.b0}`}>
                            <Row gutter={86}>
                                <Col span={12}>
                                    <div className={styles.title}>环境健康与职业安全</div>

                                    <div className={styles.description}>
                                        卫蓝新能源始终坚持“尊重自然、顺应自然、保护自然”的生态文明理念。环境健康是可持续发展的核心，通过减少污染、保护生态确保人类与自然和谐共生，而职业安全则聚焦工作场所风险控制，推动绿色、安全生产方式。两者协调推进实现经济、环境与社会的长期平衡。
                                    </div>

                                    <div className={styles.button}>了解我们的健康与安全</div>
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
                                    <div className={styles.title}>劳工与人权</div>

                                    <div className={styles.description}>
                                        劳工权益与人权保障密不可分，卫蓝新能源遵守国际劳工标准、履行社会责任，推进包容性经济增长，实现可持续发展协同共进。强调公平就业的工作环境，确保劳动者享有平等机会。
                                    </div>

                                    <div className={styles.button}>了解我们的人权</div>
                                </Col>
                            </Row>
                        </div>

                        {/* 员工关怀 */}
                        <div className={`${styles.sustainable}`}>
                            <Flex style={{ marginBottom: 42 }} vertical>
                                <div className={styles.newsTitle1}>员工关怀</div>

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
            </div>
        </>
    );
};
