'use client';

import { useSetState } from 'ahooks';
import { Image } from 'antd';
import classNames from 'classnames';
import { useParams } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

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
        anchor: 'technology',
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

const technologySlides = [
    {
        image: '/static/research/technology_01', // 自动拼接 _[locale].jpg，如 _zh.jpg
        video: 'https://2501-r2.liuuu.net/research/technology_01', // 自动拼接 _[locale].mp4，如 _zh.mp4
        title: '原位固态化',
        subtitle: 'In-situ Solidification',
        description: 'xxxxxxxxxxxxxxxxxxx',
    },
    {
        image: '/static/research/technology_02',
        video: 'https://2501-r2.liuuu.net/research/technology_02',
        title: '固态电解质掺混',
        subtitle: 'Solid Electrolyte Blending',
        description: 'xxxxxxxxxxxxxxxxxxx',
    },
    {
        image: '/static/research/technology_03',
        video: 'https://2501-r2.liuuu.net/research/technology_03',
        title: '固态电解质正极包覆',
        subtitle: 'Solid Electrolyte Coating Cathode',
        description: 'xxxxxxxxxxxxxxxxxxx',
    },
    {
        image: '/static/research/technology_04',
        video: 'https://2501-r2.liuuu.net/research/technology_04',
        title: '离子导体膜',
        subtitle: 'Ionic Conductive Separator',
        description: 'xxxxxxxxxxxxxxxxxxx',
    },
    {
        image: '/static/research/technology_05',
        video: 'https://2501-r2.liuuu.net/research/technology_05',
        title: '超薄金属锂',
        subtitle: 'Ultra-thin Lithium Metal Foil',
        description: 'xxxxxxxxxxxxxxxxxxx',
    },
    {
        image: '/static/research/technology_06',
        video: 'https://2501-r2.liuuu.net/research/technology_06',
        title: '高精度负极预锂化',
        subtitle: 'High-precision Anode Pre-lithiation',
        description: 'xxxxxxxxxxxxxxxxxxx',
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

    const fullpageInstanceRef = useRef<any>(null);

    const technologySwiper = useRef<any>(null);

    /**
     * States
     */
    const [active, setActive] = useState(false);

    const [state, setState] = useSetState({
        index: 0,
    });

    /**
     * Events
     */
    const onFirstClick = () => {
        const section = fullpageInstanceRef.current.getActiveSection();

        if (section.index() !== 1) return;

        setState({
            index: 0,
        });

        const segment = segments[1];
        const video = section.item.querySelector('video');

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
    };

    const onSecondClick = () => {
        const section = fullpageInstanceRef.current.getActiveSection();

        if (section.index() !== 1) return;

        setState({
            index: 1,
        });

        const segment = segments[1];
        const video = section.item.querySelector('video');

        if (segment && video) {
            const endTime = segment.durations.reduce((acc, cur) => acc + cur, 0);

            video.play();
            segment.playing = true;

            const checkTime = () => {
                if (video.currentTime >= endTime) {
                    video.pause();
                    segment.index += 0;
                    segment.playing = false;
                } else {
                    requestAnimationFrame(checkTime);
                }
            };
            requestAnimationFrame(checkTime);
        }
    };

    /**
     * Effects
     */
    useEffect(() => {
        if (fullpageRef.current) {
            // @ts-ignore
            const instance = new fullpage(fullpageRef.current, {
                anchors: ['research-1', 'research-2', 'research-3', 'research-4', 'footer'],
                animateAnchor: true,
                credits: {
                    enabled: false,
                },
                lockAnchors: false,
                normalScrollElements: 'header',
                afterLoad: (_: any, destination: any) => {
                    // 如果当前 section 有片段和视频
                    const segment = segments.find((s, i) => {
                        return i === destination.index || s?.anchor === destination.anchor;
                    });
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
                beforeLeave: (origin: any, destination: any) => {
                    const active = [2, 3].includes(destination.index) || ['production'].includes(destination.anchor);

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
            <Header active={active} locale={params.locale as string} />

            <div ref={fullpageRef}>
                <div className="section" style={{ position: 'relative' }}>
                    <video
                        autoPlay
                        loop
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
                        <source src="https://2501-r2.liuuu.net/research/banner.mp4" type="video/mp4" />
                    </video>

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

                    <div className={styles.indicators}>
                        <span
                            className={classNames(styles.indicator, { [styles.active]: state.index === 0 })}
                            onClick={onFirstClick}
                        />

                        <span
                            className={classNames(styles.indicator, { [styles.active]: state.index === 1 })}
                            onClick={onSecondClick}
                        />
                    </div>
                </div>

                <div className="section">
                    <div style={{ position: 'relative', width: 1459, margin: '0 auto' }}>
                        <Swiper loop ref={technologySwiper} slidesPerView={3} spaceBetween={32}>
                            {technologySlides.map((slide) => (
                                <SwiperSlide key={slide.title}>
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
                                                                src={`${slide.video}_${params.locale || 'zh'}.mp4`}
                                                                style={{
                                                                    width: '100%',
                                                                    height: '100%',
                                                                    objectFit: 'contain',
                                                                }}
                                                            />
                                                        </div>
                                                    ),
                                                    toolbarRender: () => null,
                                                }}
                                                src={`${slide.image}_${params.locale || 'zh'}.jpg`}
                                                style={{
                                                    width: '100%',
                                                    height: '100%',
                                                    objectFit: 'cover',
                                                    cursor: 'pointer',
                                                }}
                                            />
                                        </AspectRatio>

                                        <div className={styles.technologySwiperContent}>
                                            <div className={styles.t1}>{slide.title}</div>

                                            <div className={styles.t2}>{slide.subtitle}</div>

                                            <div className={styles.t3}>{slide.description}</div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        <div className="swiperPrev" onClick={() => technologySwiper.current?.swiper.slidePrev()}>
                            <img alt="" src="/static/vendors/swiper_prev.svg" />
                        </div>

                        <div className="swiperNext" onClick={() => technologySwiper.current?.swiper.slideNext()}>
                            <img alt="" src="/static/vendors/swiper_next.svg" />
                        </div>
                    </div>
                </div>

                <div className="section" style={{ position: 'relative' }}>
                    <video
                        autoPlay
                        loop
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
                        <source src="https://2501-r2.liuuu.net/research/liucheng.mp4" type="video/mp4" />
                    </video>
                </div>

                <div className="section fp-auto-height">
                    <Footer />
                </div>
            </div>
        </>
    );
};
