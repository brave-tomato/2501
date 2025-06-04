'use client';

import { Col, Flex, Popover, Row } from 'antd';
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
            if (window.location.hash) {
                instance.moveTo(window.location.hash.replace('#', ''));
            }

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
                                            <Flex gap={40}>
                                                <div>北京</div>

                                                <div>房山研发基地</div>
                                            </Flex>

                                            <Flex gap={40}>
                                                <div>广东</div>

                                                <div>南沙研发基地</div>
                                            </Flex>

                                            <Flex gap={40}>
                                                <div>深圳</div>

                                                <div>坪山研发基地</div>
                                            </Flex>

                                            <Flex gap={40}>
                                                <div>上海</div>

                                                <div>嘉定研发基地</div>
                                            </Flex>
                                        </Flex>
                                    }
                                    placement="left"
                                >
                                    <div className={styles.t1}>
                                        <span />
                                        研发基地
                                    </div>
                                </Popover>

                                <Popover
                                    arrow={false}
                                    classNames={{ body: styles['global-popover'] }}
                                    content={
                                        <Flex vertical>
                                            <div>山东淄博</div>

                                            <div>江苏溧阳</div>

                                            <div>广东珠海</div>

                                            <div>浙江湖州</div>
                                        </Flex>
                                    }
                                    placement="left"
                                >
                                    <div className={styles.t2}>
                                        <span />
                                        制造和服务网点
                                    </div>
                                </Popover>

                                <Popover
                                    arrow={false}
                                    classNames={{ body: styles['global-popover'] }}
                                    content={
                                        <Flex vertical>
                                            <div>马来西亚吉隆坡</div>

                                            <div>泰国曼谷</div>

                                            <div>匈牙利布达佩斯</div>

                                            <div>德国斯图加特</div>

                                            <div>日本大阪</div>
                                        </Flex>
                                    }
                                    placement="left"
                                >
                                    <div className={styles.t3}>
                                        <span />
                                        业务范围
                                    </div>
                                </Popover>
                            </Flex>
                        </Flex>

                        <Row style={{ width: '100%', padding: '0 130px' }}>
                            <Col span={8}>
                                <div className={styles.title}>研发</div>

                                <div className={styles.description}>北京，广东南沙，深圳，上海</div>
                            </Col>

                            <Col span={8}>
                                <div className={styles.title}>制造</div>

                                <div className={styles.description}>山东淄博，江苏溧阳，广东珠海，浙江湖州</div>
                            </Col>

                            <Col span={8}>
                                <div className={styles.title}>服务网点</div>

                                <div className={styles.description}>
                                    马来西亚吉隆坡，泰国曼谷，匈牙利布达佩斯，
                                    <br />
                                    德国斯图加特，日本大阪
                                </div>
                            </Col>
                        </Row>
                    </Flex>
                </div>

                <div className="section fp-auto-height">
                    <Footer />
                </div>
            </div>
        </>
    );
};
