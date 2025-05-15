'use client';

import { Col, Flex, Row } from 'antd';
import { useParams } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

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
    const fullpageRef = useRef<HTMLDivElement>(null);

    const fullpageInstanceRef = useRef<any>(null);

    /**
     * States
     */
    const [active, setActive] = useState(false);

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
                    setActive(active);
                },
            });

            // 优化 hash 缓存不更新的问题
            instance.moveTo(window.location.hash?.replace('#', ''));

            fullpageInstanceRef.current = instance;

            return () => {
                instance.destroy('all');
            };
        }
    }, [fullpageRef]);

    return (
        <>
            <Header
                active={active}
                locale={params.locale as string}
                onClick={(href) => {
                    if (href.includes('#')) {
                        fullpageInstanceRef.current?.moveTo(href.split('#')[1]);
                    }
                }}
            />

            <div ref={fullpageRef}>
                {/* 协作共赢 */}
                <div className="section">
                    <div style={{ position: 'relative' }}>
                        <Row className={styles.cooperation}>
                            <Col className={styles.bg1} span={8}>
                                <Flex align="center" style={{ position: 'relative', top: '30%' }} vertical>
                                    <div className={styles.title}>协作共赢</div>

                                    <div className={styles.description}>WIN-WIN COOPERATION</div>
                                </Flex>
                            </Col>

                            <Col className={styles.bg2} span={8}>
                                <Flex align="center" style={{ position: 'relative', top: '30%' }} vertical>
                                    <div className={styles.title}>绿色循环</div>

                                    <div className={styles.description}>GREEN CYCLE</div>
                                </Flex>
                            </Col>

                            <Col className={styles.bg3} span={8}>
                                <Flex align="center" style={{ position: 'relative', top: '30%' }} vertical>
                                    <div className={styles.title}>持续创新</div>

                                    <div className={styles.description}>CONTINUOUS INNOVATION</div>
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
                    {/* 可持续发展 */}

                    {/* Footer */}
                    <Footer />
                </div>
            </div>
        </>
    );
};
