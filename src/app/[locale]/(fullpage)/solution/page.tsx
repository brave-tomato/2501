'use client';

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
                                title="应用与解决方案"
                            />
                        </div>

                        <div className="section">
                            <Flex align="center" justify="center" style={{ height: '100vh' }}>
                                <Flex vertical>
                                    <Link href={`/${params.locale}/solution/a1/`}>
                                        <Space size={36}>
                                            <span className={styles.t1}>动力类应用</span>

                                            <img alt="" height={80} src="/static/solution/icon.png" width={80} />
                                        </Space>
                                    </Link>

                                    <div className={styles.t2}>半固态/固态高比能电池助力动力汽车突破续航极限</div>

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
                                            <span className={styles.t1}>低空经济类应用</span>

                                            <img alt="" height={80} src="/static/solution/icon.png" width={80} />
                                        </Space>
                                    </Link>

                                    <div className={styles.t2}>高倍率半固态电池助力航天蓬勃发展</div>

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
                                            <span className={styles.t1}>储能应用</span>

                                            <img alt="" height={80} src="/static/solution/icon.png" width={80} />
                                        </Space>
                                    </Link>

                                    <div className={styles.t2}>高安全半固态储能电池助力新型储能零风险</div>

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
