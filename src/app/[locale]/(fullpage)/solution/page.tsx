'use client';

import classNames from 'classnames';
import { useParams } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

/**
 * Components
 */
import Footer from '@/components/footer';
import Header from '@/components/header';
import { Title5 } from '@/components/headline';

/**
 * Styles
 */
import { Flex, Space } from 'antd';
import styles from './styles.module.scss';

export default () => {
    /**
     * Params
     */
    const params = useParams();

    /**
     * Hooks
     */
    const fullpageRef = useRef<HTMLDivElement>(null);

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
                credits: {
                    enabled: false,
                },
                beforeLeave: (_: any, destination: any) => {
                    // 特殊页面高亮菜单
                    setActive(![0].includes(destination.index));
                },
            });

            return () => {
                instance.destroy('all');
            };
        }
    }, [fullpageRef]);

    return (
        <>
            <Header active={active} locale={params.locale as string} />

            <div ref={fullpageRef}>
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
                        <source src="https://2501-r2.liuuu.net/solution/banner.mp4" type="video/mp4" />
                    </video>

                    <Title5
                        className="slide-top"
                        style={{
                            position: 'absolute',
                            top: '25%',
                            left: '9.5833%',
                        }}
                        title="应用与解决方案"
                    />
                </div>

                <div className="section">
                    <Flex align="center" justify="center" style={{ height: '100vh' }}>
                        <Flex vertical>
                            <Space size={36}>
                                <span className={styles.t1}>动力类应用</span>

                                <img alt="" height={80} src="/static/solution/icon.png" width={80} />
                            </Space>

                            <div className={styles.t2}>XXXXXXXXXXX</div>

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
                            <Space size={36}>
                                <span className={styles.t1}>低空经济类应用</span>

                                <img alt="" height={80} src="/static/solution/icon.png" width={80} />
                            </Space>

                            <div className={styles.t2}>XXXXXXXXXXX</div>

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
                            <Space size={36}>
                                <span className={styles.t1}>储能应用</span>

                                <img alt="" height={80} src="/static/solution/icon.png" width={80} />
                            </Space>

                            <div className={styles.t2}>XXXXXXXXXXX</div>

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
            </div>
        </>
    );
};
