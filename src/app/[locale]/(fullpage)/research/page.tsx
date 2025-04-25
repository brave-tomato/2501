'use client';

import { Flex, Image } from 'antd';
import classNames from 'classnames';
import { useParams } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

/**
 * Components
 */
import AspectRatio from '@/components/aspect-ratio';
import Footer from '@/components/footer';
import Header from '@/components/header';
import { Title5 } from '@/components/headline';

/**
 * Styles
 */
import styles from './styles.module.scss';

/**
 * Constants
 */
const segments = [
    null,
    {
        durations: [
            // 第 1 段
            0.7333,
            // 第 2 段
            1.5,
        ],
        index: 0,
        playing: false,
    },
];

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
                afterLoad: (_: any, destination: any) => {
                    // 特殊页面高亮菜单
                    setActive([2, 3].includes(destination.index));

                    // 如果当前 section 有片段和视频
                    const segment = segments[destination.index];
                    const video = destination.item.querySelector('video');

                    if (segment && video) {
                        // 结束时间
                        const endTime = segment.durations[0];

                        video.currentTime = 0;
                        video.play();
                        segment.index = 0;
                        segment.playing = true;

                        const checkTime = () => {
                            if (video.currentTime >= endTime) {
                                video.pause();
                                segment.index += 1;
                                segment.playing = false;
                            } else {
                                requestAnimationFrame(checkTime);
                            }
                        };

                        requestAnimationFrame(checkTime);
                    }
                },
                beforeLeave: (origin: any, _: any, direction: any) => {
                    if (direction === 'up') {
                        return true;
                    }

                    // 如果当前 section 有片段和视频
                    const segment = segments[origin.index];
                    const video = origin.item.querySelector('video');

                    if (segment && video) {
                        // 结束时间
                        const endTime = segment.durations
                            .slice(0, segment.index + 1)
                            .reduce((acc, cur) => acc + cur, 0);

                        // 如果视频正在播放
                        if (segment.playing) {
                            // 阻止离开当前 section
                            return false;
                        }

                        // 如果视频还有片段
                        if (segment.index < segment.durations.length) {
                            video.play();
                            segment.playing = true;

                            const checkTime = () => {
                                if (video.currentTime >= endTime) {
                                    video.pause();
                                    segment.index += 1;
                                    segment.playing = false;
                                } else {
                                    requestAnimationFrame(checkTime);
                                }
                            };

                            requestAnimationFrame(checkTime);

                            // 阻止离开当前 section
                            return false;
                        }
                    }
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
                <div className={classNames('section', styles.bg1)}>
                    <Title5
                        className="slide-top"
                        style={{
                            position: 'absolute',
                            top: '25%',
                            left: '9.5833%',
                        }}
                        subtitle="人才与创新是卫蓝聚焦未来技术的基础"
                        title="固态电池产业化"
                    />
                </div>

                <div className="section">
                    <video
                        loop={false}
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
                        <source src="https://2501-r2.liuuu.net/research/technology_zh.mp4" type="video/mp4" />
                    </video>
                </div>

                <div className="section">
                    <Flex align="center" gap={32} justify="center">
                        <div className={styles.technologySwiper}>
                            <AspectRatio ratio={465 / 233}>
                                <Image
                                    alt=""
                                    preview={{
                                        destroyOnClose: true,
                                        mask: '',
                                        imageRender: () => (
                                            <div
                                                style={{
                                                    aspectRatio: '16/9',
                                                    width: '100%',
                                                    height: 'auto',
                                                    maxWidth: '90vw',
                                                    maxHeight: '90vh',
                                                    margin: 'auto',
                                                }}
                                            >
                                                <video
                                                    autoPlay
                                                    controls
                                                    loop
                                                    playsInline
                                                    src="https://2501-r2.liuuu.net/research/technology_01_zh.mp4"
                                                    style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                                                />
                                            </div>
                                        ),
                                        toolbarRender: () => null,
                                    }}
                                    src="/static/research/technology_01.jpg"
                                    style={{ width: '100%', height: '100%', objectFit: 'cover', cursor: 'pointer' }}
                                />
                            </AspectRatio>

                            <div className={styles.technologySwiperContent}>
                                <div className={styles.t1}>原位固态化</div>

                                <div className={styles.t2}>In-situ Solidification</div>

                                <div className={styles.t3}>xxxxxxxxxxxxxxxxxxx</div>
                            </div>
                        </div>

                        <div className={styles.technologySwiper}>
                            <AspectRatio ratio={465 / 233}>
                                <Image
                                    alt=""
                                    preview={{
                                        destroyOnClose: true,
                                        mask: '',
                                        imageRender: () => (
                                            <div
                                                style={{
                                                    aspectRatio: '16/9',
                                                    width: '100%',
                                                    height: 'auto',
                                                    maxWidth: '90vw',
                                                    maxHeight: '90vh',
                                                    margin: 'auto',
                                                }}
                                            >
                                                <video
                                                    autoPlay
                                                    controls
                                                    loop
                                                    playsInline
                                                    src="https://2501-r2.liuuu.net/research/technology_02_zh.mp4"
                                                    style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                                                />
                                            </div>
                                        ),
                                        toolbarRender: () => null,
                                    }}
                                    src="/static/research/technology_02.jpg"
                                    style={{ width: '100%', height: '100%', objectFit: 'cover', cursor: 'pointer' }}
                                />
                            </AspectRatio>

                            <div className={styles.technologySwiperContent}>
                                <div className={styles.t1}>固态电解质涂敷</div>

                                <div className={styles.t2}>Solid Electrolyte Blending</div>

                                <div className={styles.t3}>xxxxxxxxxxxxxxxxxxx</div>
                            </div>
                        </div>

                        <div className={styles.technologySwiper}>
                            <AspectRatio ratio={465 / 233}>
                                <Image
                                    alt=""
                                    preview={{
                                        destroyOnClose: true,
                                        mask: '',
                                        imageRender: () => (
                                            <div
                                                style={{
                                                    aspectRatio: '16/9',
                                                    width: '100%',
                                                    height: 'auto',
                                                    maxWidth: '90vw',
                                                    maxHeight: '90vh',
                                                    margin: 'auto',
                                                }}
                                            >
                                                <video
                                                    autoPlay
                                                    controls
                                                    loop
                                                    playsInline
                                                    src="https://2501-r2.liuuu.net/research/technology_03_zh.mp4"
                                                    style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                                                />
                                            </div>
                                        ),
                                        toolbarRender: () => null,
                                    }}
                                    src="/static/research/technology_03.jpg"
                                    style={{ width: '100%', height: '100%', objectFit: 'cover', cursor: 'pointer' }}
                                />
                            </AspectRatio>

                            <div className={styles.technologySwiperContent}>
                                <div className={styles.t1}>固态电解质正极包覆</div>

                                <div className={styles.t2}>Solid Electrolyte Coating the Cathode</div>

                                <div className={styles.t3}>xxxxxxxxxxxxxxxxxxx</div>
                            </div>
                        </div>
                    </Flex>
                </div>

                <div className="section fp-auto-height">
                    <Footer />
                </div>
            </div>
        </>
    );
};
