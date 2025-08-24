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
            1.166,
            // 第 2 到 10 段
            1.5, 1.5, 1.5, 1.5, 1.5, 1.5, 1.5, 1.5, 1.5,
            // 第 11 段
            1.333,
        ],
        // 反向视频的时间段配置（每段1秒，共10段）
        backDurations: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        forwardIndex: 0, // 正向视频的播放索引
        playing: false,
        userInteracted: false, // 标记用户是否已经交互过
    },
];

export default () => {
    /**
     * Params
     */
    const params = useParams();

    // 辅助函数：计算正向视频某个索引的开始时间
    const getForwardStartTime = (index: number) => {
        return segments[0].durations.slice(0, index).reduce((acc, cur) => acc + cur, 0);
    };

    // 辅助函数：计算正向视频某个索引的结束时间
    const getForwardEndTime = (index: number) => {
        return segments[0].durations.slice(0, index + 1).reduce((acc, cur) => acc + cur, 0);
    };

    // 辅助函数：计算反向视频某个索引的开始时间
    const getBackStartTime = (index: number) => {
        return segments[0].backDurations.slice(0, index).reduce((acc, cur) => acc + cur, 0);
    };

    /**
     * Effects
     */
    useEffect(() => {
        segments[0].forwardIndex = 0;
        segments[0].userInteracted = false; // 重置用户交互标记

        // @ts-ignore
        const fullpageApi = window.fullpage_api;

        const handleWheel = (event: WheelEvent) => {
            if (!fullpageApi) return;

            const section = fullpageApi.getActiveSection();

            if (section.index() !== 0) {
                return;
            }

            // 阻止默认滚动行为
            event.preventDefault();
            event.stopPropagation();

            // 获取两个视频元素
            const forwardVideo = section.item.querySelector('#history-forward') as HTMLVideoElement;
            const backVideo = section.item.querySelector('#history-back') as HTMLVideoElement;
            const segment = segments[section.index()];

            if (!segment || !forwardVideo || !backVideo) return;

            // 向下滚动
            if (event.deltaY > 0) {
                // 阻止默认行为和事件冒泡
                event.preventDefault();
                event.stopPropagation();

                // 如果视频正在播放，阻止滚动
                if (segment.playing) {
                    return;
                }

                // 如果还有下一个片段可以播放
                if (segment.forwardIndex < segment.durations.length) {
                    // 标记用户已经交互过
                    segment.userInteracted = true;

                    // 暂停反向视频（确保不会干扰）
                    backVideo.pause();

                    // 确保正向视频在正确的时间位置
                    const startTime = getForwardStartTime(segment.forwardIndex);
                    forwardVideo.currentTime = startTime;

                    // 计算当前片段的结束时间
                    const endTime = getForwardEndTime(segment.forwardIndex);

                    // 等待视频状态稳定后再切换显示和播放
                    setTimeout(() => {
                        // 切换到正向视频显示（只调整层级）
                        forwardVideo.style.zIndex = '3';
                        backVideo.style.zIndex = '1';

                        // 立即开始播放
                        forwardVideo.play();
                        segment.playing = true;

                        const checkTime = () => {
                            if (forwardVideo.currentTime >= endTime) {
                                forwardVideo.pause();
                                segment.forwardIndex += 1;
                                segment.playing = false;
                            } else {
                                requestAnimationFrame(checkTime);
                            }
                        };
                        requestAnimationFrame(checkTime);
                    }, 10); // 短暂延迟确保视频状态设置完成
                }
                return;
            }

            // 向上滚动
            if (event.deltaY < 0) {
                // 阻止默认行为和事件冒泡
                event.preventDefault();
                event.stopPropagation();

                // 如果视频正在播放，阻止滚动
                if (segment.playing) {
                    return;
                }

                // 只有在用户已经交互过且正向索引大于1时才允许向上滚动（倒退）
                // 注意：第一段（0→1）不能倒放，所以必须 forwardIndex > 1
                if (segment.userInteracted && segment.forwardIndex > 1) {
                    // 计算要倒退到的目标位置
                    const targetIndex = segment.forwardIndex - 1;

                    // 暂停正向视频
                    forwardVideo.pause();

                    // 计算反向视频对应的片段
                    // 映射逻辑说明：
                    // - 正向视频有11段，索引0-10（0→1.166s, 1.166→2.666s, 2.666→4.166s...）
                    // - 反向视频有10段，索引0-9（0→1s, 1→2s, 2→3s...9→10s）
                    // - forwardIndex=2（播放完第2段）→ 倒退到第1段 → 反向视频第9段（9-10秒，内容2→1）
                    // - forwardIndex=3（播放完第3段）→ 倒退到第2段 → 反向视频第8段（8-9秒，内容3→2）
                    // - 公式：reverseSegmentIndex = 11 - forwardIndex
                    const reverseSegmentIndex = 11 - segment.forwardIndex;

                    // 确保反向片段索引在有效范围内
                    if (reverseSegmentIndex >= 0 && reverseSegmentIndex < segment.backDurations.length) {
                        const startTime = getBackStartTime(reverseSegmentIndex);
                        const endTime = startTime + segment.backDurations[reverseSegmentIndex];

                        // 设置反向视频的时间位置
                        backVideo.currentTime = startTime;

                        // 等待反向视频准备就绪
                        const waitForVideoReady = () => {
                            if (backVideo.readyState >= 3) {
                                // HAVE_FUTURE_DATA
                                // 切换到反向视频显示
                                backVideo.style.zIndex = '3';
                                forwardVideo.style.zIndex = '1';

                                // 立即开始播放反向视频
                                backVideo.play();
                                segment.playing = true;

                                // 在反向视频开始播放后，再设置正向视频到目标位置
                                const targetForwardTime = getForwardStartTime(targetIndex);
                                forwardVideo.currentTime = targetForwardTime;

                                const checkTime = () => {
                                    if (backVideo.currentTime >= endTime) {
                                        backVideo.pause();
                                        segment.playing = false;

                                        // 播放完成后，更新forwardIndex并切换回正向视频显示
                                        segment.forwardIndex = targetIndex;

                                        requestAnimationFrame(() => {
                                            forwardVideo.style.zIndex = '3';
                                            backVideo.style.zIndex = '1';
                                        });
                                    } else {
                                        requestAnimationFrame(checkTime);
                                    }
                                };
                                requestAnimationFrame(checkTime);
                            } else {
                                // 视频还没准备好，继续等待
                                requestAnimationFrame(waitForVideoReady);
                            }
                        };

                        waitForVideoReady();
                    }
                }
                return;
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
                scrollingSpeed={1000}
                easing={'easeInOutCubic'}
                afterLoad={(_, destination, direction) => {
                    // 如果当前 section 有片段和视频
                    const segment = segments[destination.index];
                    const forwardVideo = destination.item.querySelector('#history-forward') as HTMLVideoElement;
                    const backVideo = destination.item.querySelector('#history-back') as HTMLVideoElement;

                    if (segment?.forwardIndex !== 0 && direction === 'up') {
                        return true;
                    }

                    if (segment && forwardVideo && backVideo) {
                        // 初始化显示正向视频（只设置层级）
                        forwardVideo.style.zIndex = '3';
                        backVideo.style.zIndex = '1';

                        // 结束时间
                        const endTime = segment.durations[0];

                        forwardVideo.currentTime = 0;
                        forwardVideo.play();
                        segment.forwardIndex = 0;
                        segment.playing = true;

                        const checkTime = () => {
                            if (forwardVideo.currentTime >= endTime) {
                                forwardVideo.pause();
                                segment.forwardIndex += 1;
                                segment.playing = false;
                                // 初始播放完成后，标记用户可以开始交互
                                segment.userInteracted = true;
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
                    const forwardVideo = origin.item.querySelector('#history-forward') as HTMLVideoElement;

                    if (segment && forwardVideo) {
                        // 结束时间
                        const endTime = getForwardEndTime(segment.forwardIndex);

                        // 如果视频正在播放
                        if (segment.playing) {
                            // 阻止离开当前 section
                            return false;
                        }

                        // 如果视频还有片段
                        if (segment.forwardIndex < segment.durations.length) {
                            // 确保显示正向视频（只设置层级）
                            forwardVideo.style.zIndex = '3';

                            forwardVideo.play();
                            segment.playing = true;

                            const checkTime = () => {
                                if (forwardVideo.currentTime >= endTime) {
                                    forwardVideo.pause();
                                    segment.forwardIndex += 1;
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
                            {/* 向下滚动播放的视频 */}
                            <video
                                id="history-forward"
                                loop={false}
                                muted
                                playsInline
                                style={{
                                    position: 'absolute',
                                    inset: 0,
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    zIndex: 3,
                                }}
                            >
                                <source
                                    src={`https://files.welion.asia/about-us/history_${params.locale}.mp4`}
                                    type="video/mp4"
                                />
                            </video>

                            {/* 向上滚动播放的视频 */}
                            <video
                                id="history-back"
                                loop={false}
                                muted
                                playsInline
                                style={{
                                    position: 'absolute',
                                    inset: 0,
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    zIndex: 1,
                                }}
                            >
                                <source
                                    src={`https://files.welion.asia/about-us/history_${params.locale}_back.mp4`}
                                    type="video/mp4"
                                />
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
