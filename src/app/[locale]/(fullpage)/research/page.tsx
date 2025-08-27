'use client';

import { useI18n } from '@/locales/client';
import ReactFullpage from '@fullpage/react-fullpage';
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

export default () => {
    /**
     * Params
     */
    const params = useParams();
    const t = useI18n();

    /**
     * Technology slides with translations
     */
    const technologySlides = [
        {
            image: '/static/research/technology_01', // 自动拼接 _[locale].jpg，如 _zh.jpg
            video: 'https://files.welion.asia/research/technology_01', // 自动拼接 _[locale].mp4，如 _zh.mp4
            title: t('research.tech6Title'),
            subtitle: 'In-situ Solidification',
            description: t('research.tech6Desc'),
        },
        {
            image: '/static/research/technology_02',
            video: 'https://files.welion.asia/research/technology_02',
            title: t('research.tech2Title'),
            subtitle: 'Solid Electrolyte Blending',
            description: t('research.tech2Desc'),
        },
        {
            image: '/static/research/technology_03',
            video: 'https://files.welion.asia/research/technology_03',
            title: t('research.tech1Title'),
            subtitle: 'Solid Electrolyte Coating Cathode',
            description: t('research.tech1Desc'),
        },
        {
            image: '/static/research/technology_04',
            video: 'https://files.welion.asia/research/technology_04',
            title: t('research.tech4Title'),
            subtitle: 'Ionic Conductive Separator',
            description: t('research.tech4Desc'),
        },
        {
            image: '/static/research/technology_05',
            video: 'https://files.welion.asia/research/technology_05',
            title: t('research.ultraThinLithiumTitle'),
            subtitle: 'Ultra-thin Lithium Metal Foil',
            description: t('research.ultraThinLithiumDesc'),
        },
        {
            image: '/static/research/technology_06',
            video: 'https://files.welion.asia/research/technology_06',
            title: t('research.tech5Title'),
            subtitle: 'High-precision Anode Pre-lithiation',
            description: t('research.tech5Desc'),
        },
    ];

    /**
     * Hooks
     */
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
        // @ts-ignore
        const fullpageApi = window.fullpage_api;

        if (!fullpageApi) return;

        const section = fullpageApi.getActiveSection();

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
        // @ts-ignore
        const fullpageApi = window.fullpage_api;

        if (!fullpageApi) return;

        const section = fullpageApi.getActiveSection();

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
                afterLoad={(_, destination) => {
                    // 如果当前 section 有片段和视频
                    const segment = segments.find((s, i) => {
                        return i === destination.index;
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
                }}
                beforeLeave={(_, destination) => {
                    setActive([2, 3, 4].includes(destination.index));
                }}
                credits={{
                    enabled: false,
                }}
                render={() => (
                    <ReactFullpage.Wrapper>
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
                                <source src="https://files.welion.asia/research/banner.mp4" type="video/mp4" />
                            </video>

                            <Title5
                                className="slide-top"
                                style={{
                                    position: 'absolute',
                                    top: '25%',
                                    left: '9.5833%',
                                }}
                                subtitle={t('research.subtitle')}
                                title={t('research.title')}
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
                                <source src="https://files.welion.asia/research/technology_zh.mp4" type="video/mp4" />
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

                                                    <img
                                                        alt=""
                                                        src="/static/research/play.png"
                                                        style={{
                                                            position: 'absolute',
                                                            top: '50%',
                                                            left: '50%',
                                                            transform: 'translate(-50%, -50%)',
                                                            width: 100,
                                                            height: 100,
                                                            cursor: 'pointer',
                                                        }}
                                                    />
                                                </AspectRatio>

                                                <div className={styles.technologySwiperContent}>
                                                    <div
                                                        className={styles.t1}
                                                        style={{
                                                            fontSize: params.locale === 'zh' ? '32px' : '20px',
                                                            lineHeight: params.locale === 'zh' ? '40px' : '28px',
                                                            color: params.locale === 'zh' ? '#103675' : '#2dafb7',
                                                        }}
                                                    >
                                                        {slide.title}
                                                    </div>

                                                    {/* <div className={styles.t2}>{slide.subtitle}</div> */}

                                                    <div
                                                        className={styles.t3}
                                                        style={{
                                                            fontSize: params.locale === 'zh' ? '20px' : '16px',
                                                            lineHeight: params.locale === 'zh' ? '28px' : '1.3',
                                                        }}
                                                    >
                                                        {slide.description}
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>

                                <div
                                    className="swiperPrev"
                                    onClick={() => technologySwiper.current?.swiper.slidePrev()}
                                >
                                    <img alt="" src="/static/vendors/swiper_prev.svg" />
                                </div>

                                <div
                                    className="swiperNext"
                                    onClick={() => technologySwiper.current?.swiper.slideNext()}
                                >
                                    <img alt="" src="/static/vendors/swiper_next.svg" />
                                </div>
                            </div>
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
