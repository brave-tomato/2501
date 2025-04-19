'use client';

import { getConf } from '@/utils';
import { useSetState } from 'ahooks';
import { Col, Flex, Grid, Image, Row } from 'antd';
import dynamic from 'next/dynamic';

import ReactFullpage from '@fullpage/react-fullpage';
/**
 * Components
 */
import AspectRatio from '@/components/aspect-ratio';
import { Title1, Title2 } from '@/components/headline';
import { StaggeredText } from '@/components/motion';

const ComponentGlobe = dynamic(() => import('@/components/globe'), { ssr: false });

/**
 * Styles
 */
import classNames from 'classnames';
import styles from './styles.module.scss';

/**
 * Constants
 */
const culture1 = [
    '/images/about-us/img_01_01.png',
    '/images/about-us/img_01_02.png',
    '/images/about-us/img_01_03.png',
    '/images/about-us/img_01_04.png',
    '/images/about-us/img_01_01.png',
    '/images/about-us/img_01_02.png',
    '/images/about-us/img_01_03.png',
    '/images/about-us/img_01_04.png',
];

const culture2 = [
    '/images/about-us/img_01_01.png',
    '/images/about-us/img_01_02.png',
    '/images/about-us/img_01_03.png',
    '/images/about-us/img_01_04.png',
    '/images/about-us/img_01_01.png',
    '/images/about-us/img_01_02.png',
    '/images/about-us/img_01_03.png',
    '/images/about-us/img_01_04.png',
];

const contentData = [
    {
        title: '愿景',
        description:
            'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
    },
    {
        title: '使命',
        description:
            'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
    },
    {
        title: '价值观',
        description:
            'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
    },
];

const Page = () => {
    /**
     * Hooks
     */
    const conf = getConf(Grid.useBreakpoint());

    /**
     * States
     */
    const [state, setState] = useSetState<any>({
        swiperCulture1: null,
        swiperCulture2: null,
    });

    const beforeLeave = (origin, destination, direction, trigger) => {
        console.log('222 :>> ', 222, origin);
    };

    const afterLoad = (origin, destination, direction, trigger) => {
        console.log('111 :>> ', 111, origin);
        // Resetting the video on the previous section
    };
    return (
        <div className="App">
            <ReactFullpage
                debug
                beforeLeave={beforeLeave}
                afterLoad={afterLoad}
                navigation={true}
                // licenseKey="xxxxxxxxxxxxxxxxxxxxxxxxx"
                render={() => (
                    <ReactFullpage.Wrapper>
                        <div className="section">
                            <AspectRatio ratio={conf.banner}>
                                {/* 视频 */}
                                <video
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    poster="/images/about-us/banner.jpg"
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                    }}
                                >
                                    {conf.lg ? (
                                        <source src="https://2501-r2.liuuu.net/about-us/banner.mp4" type="video/mp4" />
                                    ) : null}
                                </video>

                                {/* 文案 */}
                                <div
                                    style={{
                                        position: 'absolute',
                                        top: '50%',
                                        width: '100%',
                                        transform: 'translateY(-50%)',
                                        color: 'white',
                                        fontSize: '50px',
                                        textAlign: 'center',
                                    }}
                                >
                                    <StaggeredText style={{ margin: '0 12px' }} text="让人类享受更安全的绿色能源" />
                                </div>
                            </AspectRatio>
                        </div>

                        <div className="section">
                            <Row
                                align={'middle'}
                                style={{
                                    height: '100vh',
                                    backgroundImage: 'url(/images/about-us/bg_yuanjing@2x.png)',
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                }}
                            >
                                {contentData.map((itemCol, index) => (
                                    <Col span="8" style={{ height: '100%' }}>
                                        <Flex
                                            align="center"
                                            className={classNames(
                                                styles['yuanjing-wrapper'],
                                                index === contentData.length - 1 && styles['no-border-right'],
                                            )}
                                            vertical
                                        >
                                            <div className={styles.title}>{itemCol.title}</div>
                                            <div className={styles.description}>{itemCol.description}</div>
                                        </Flex>
                                    </Col>
                                ))}
                            </Row>
                        </div>
                        <div className="section">sdfsdf22222222222222</div>
                        <div className="section">sdfsdf22222222222222</div>
                        <div className="section">sdfsdf22222222222222</div>
                        <div className="section">sdfsdf22222222222222</div>
                        <div className="section">sdfsdf22222222222222</div>
                    </ReactFullpage.Wrapper>
                )}
            />
        </div>
    );
};

export default Page;
