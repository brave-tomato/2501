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
                afterLoad: (_: any, destination: any) => {
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
                beforeLeave: (origin: any) => {
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
                        <source src="https://2501-r2.liuuu.net/about-us/history.mp4" type="video/mp4" />
                    </video>
                </div>

                <div className="section fp-auto-height">
                    <Footer />
                </div>
            </div>
        </>
    );
};
