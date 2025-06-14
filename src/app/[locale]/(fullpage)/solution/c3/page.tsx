'use client';

import ReactFullpage from '@fullpage/react-fullpage';
import { useParams } from 'next/navigation';
import { useEffect } from 'react';

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
            0.75,
            // 第 2 段
            1.75,
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
     * Effects
     */
    useEffect(() => {
        // @ts-ignore
        const fullpageApi = window.fullpage_api;

        const handleWheel = (event: WheelEvent) => {
            if (!fullpageApi) return;

            const section = fullpageApi.getActiveSection();

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
                    const startTime = segment.durations.slice(0, segment.index - 2).reduce((acc, cur) => acc + cur, 0);
                    const endTime = segment.durations.slice(0, segment.index - 1).reduce((acc, cur) => acc + cur, 0);

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
            window.removeEventListener('wheel', handleWheel);

            if (fullpageApi) {
                fullpageApi.moveTo(1);
            }
        };
    }, []);

    return (
        <>
            <Header active={true} locale={params.locale as string} />

            <ReactFullpage
                afterLoad={(_, destination, direction) => {
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
                }}
                beforeLeave={(origin, _, direction) => {
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
                }}
                credits={{
                    enabled: false,
                }}
                render={() => (
                    <ReactFullpage.Wrapper>
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
                                <source src="https://files.welion.asia/solution/0610.mp4" type="video/mp4" />
                            </video>
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
