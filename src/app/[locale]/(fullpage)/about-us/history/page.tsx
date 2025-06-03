'use client';

import { useParams } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

/**
 * Components
 */
import Footer from '@/components/footer';
import Header from '@/components/header';

/**
 * Constants
 */
const segments = [
    {
        durations: [
            // 第 1 段
            1.166,
            // 第 2 到 10 段
            1.5, 1.5, 1.5, 1.5, 1.5, 1.5, 1.5, 1.5, 1.5,
            // 第 11 段
            1.333,
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
    const [active, setActive] = useState(true);

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
                afterLoad: (_: any, destination: any, direction: any) => {
                    if (direction === 'up') {
                        return true;
                    }

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

            const handleWheel = (event: WheelEvent) => {
                const section = instance.getActiveSection();
                console.log('section :>> ', section);

                if (event.deltaY > 0 || section.index() !== 0) {
                    return;
                }

                // 如果当前 section 有片段和视频
                const segment = segments[section.index()];
                const video = section.item.querySelector('video');

                if (segment && video) {
                    // 如果视频正在播放
                    if (segment.playing) {
                        return;
                    }

                    // 如果视频还没返回到起点
                    if (segment.index >= 2) {
                        // 获取上一个片段的开始时间和结束时间
                        const startTime = segment.durations
                            .slice(0, segment.index - 2)
                            .reduce((acc, cur) => acc + cur, 0);
                        const endTime = segment.durations
                            .slice(0, segment.index - 1)
                            .reduce((acc, cur) => acc + cur, 0);

                        video.currentTime = startTime;

                        video.play();
                        segment.playing = true;

                        const checkTime = () => {
                            if (video.currentTime >= endTime) {
                                video.pause();
                                segment.index -= 1;
                                segment.playing = false;
                            } else {
                                requestAnimationFrame(checkTime);
                            }
                        };
                        requestAnimationFrame(checkTime);
                    }
                }
            };

            // 添加滚轮事件监听
            window.addEventListener('wheel', handleWheel, { passive: false });

            return () => {
                instance.destroy('all');

                window.removeEventListener('wheel', handleWheel);
            };
        }
    }, [fullpageRef]);

    return (
        <>
            <Header active={active} locale={params.locale as string} />

            <div ref={fullpageRef}>
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
                        <source src="https://files.welion.asia/about-us/history.mp4" type="video/mp4" />
                    </video>
                </div>

                <div className="section fp-auto-height">
                    <Footer />
                </div>
            </div>
        </>
    );
};
