'use client';

import { getConf } from '@/utils';
import { useSetState } from 'ahooks';
import { Col, Flex, Grid, Image, Row } from 'antd';
import dynamic from 'next/dynamic';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

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

    return (
        <div style={{ maxWidth: '1920px', margin: '0 auto' }}>
            {/* Banner */}
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
                    {conf.lg ? <source src="/images/about-us/banner.mp4" type="video/mp4" /> : null}
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

            {/* 企业文化 */}
            <Title1 title="企业文化" subtitle="Culture" />

            <Flex gap={80} align="center" style={{ marginTop: 105 }} vertical={true}>
                <img alt="" src="/images/about-us/img_01.png" style={{ width: '196px' }} />

                <Title2 title="愿景使命价值观" subtitle="愿景使命价值观的详细内容需要提供" />

                <div className="swiper-culture">
                    <div className="swiper-button-prev" onClick={() => state.swiperCulture1.slidePrev()} />
                    <div className="swiper-button-next" onClick={() => state.swiperCulture1.slideNext()} />

                    <Swiper
                        slidesPerView={4}
                        spaceBetween={41}
                        onSwiper={(swiper) => setState({ swiperCulture1: swiper })}
                    >
                        {culture1.map((src, index) => (
                            <SwiperSlide key={index}>
                                <AspectRatio ratio={450 / 722}>
                                    <img alt="" height="100%" src={src} width="100%" />
                                </AspectRatio>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </Flex>

            <Flex gap={80} align="center" style={{ marginTop: 105 }} vertical={true}>
                <img alt="" src="/images/about-us/img_02.png" style={{ width: '190px' }} />

                <Title2 title="员工关怀" subtitle="员工关怀的详细内容需要提供" />

                <div className="swiper-culture">
                    <div className="swiper-button-prev" onClick={() => state.swiperCulture2.slidePrev()} />
                    <div className="swiper-button-next" onClick={() => state.swiperCulture2.slideNext()} />

                    <Swiper
                        slidesPerView={4}
                        spaceBetween={41}
                        onSwiper={(swiper) => setState({ swiperCulture2: swiper })}
                    >
                        {culture1.map((src, index) => (
                            <SwiperSlide key={index}>
                                <AspectRatio ratio={450 / 722}>
                                    <img alt="" height="100%" src={src} width="100%" />
                                </AspectRatio>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </Flex>

            {/* 公司简介 */}
            <Title1 title="公司简介" subtitle="Profile" />

            <Flex gap={68}>
                <div style={{ width: '809px' }}>
                    <AspectRatio ratio={conf.img03}>
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
                                            src="/images/about-us/zh_CN.mp4"
                                            style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                                        />
                                    </div>
                                ),
                                toolbarRender: () => null,
                            }}
                            src="/images/about-us/img_03.png"
                            style={{ width: '100%', cursor: 'pointer' }}
                        />
                    </AspectRatio>
                </div>

                <div style={{ flex: 1, color: '#969696', fontSize: '22px', lineHeight: '39px' }}>
                    <div>
                        北京卫蓝新能源科技股份有限公司（以下简称“卫蓝新能源”）是中国科学院物理研究所固态电池产学研孵化企业，成立于2016年，位于北京房山窦店，主营固态锂离子电池，集研发、生产、市场、销售于一体，是国家级专精特新小巨人企业、独角兽企业，具有CNAS资质，具有40余年固态电池产业研究经验，在多个固态锂电技术领域实现“首次”突破。
                    </div>

                    <div>
                        公司由中国工程院院士陈立泉、中国科学院物理研究所研究员李泓、教授级高级工程师俞会根共同发起创办，汇聚了电池材料、电芯、系统等领域的高精尖人才。
                    </div>

                    <div>产品主要应用领域涵盖新能源汽车、储能、低空经济动力三大部分，其中典型电芯产品有：</div>

                    <div>
                        360Wh/kg高能量密度动力电芯：具备超高能量密度，单次续航里程超过1000km，已于2023年底量产交付蔚来汽车，并在多家知名整车厂获得定点。
                    </div>

                    <div>
                        280Ah超高安全储能电芯：已于2023年下半年量产交付，为三峡、海博思创、国电投等多个储能项目供货。
                    </div>

                    <div>
                        320Wh/kg高能量密度低空经济动力电芯：目前已为多家国内外无人机、机器人、便携电源等客户供货。
                    </div>
                </div>
            </Flex>

            {/* 全球布局 */}
            <Title1 title="全球布局" subtitle="Global Layout" />

            <AspectRatio ratio={conf.globe}>
                <ComponentGlobe />
            </AspectRatio>

            {/* 可持续发展 */}
            <Title1 title="可持续发展" subtitle="Sustainable" />

            <Swiper
                autoplay={{
                    delay: 500,
                    disableOnInteraction: false,
                }}
                className="swiper-sustainable"
                loop={true}
                modules={[Pagination]}
                pagination={true}
            >
                <SwiperSlide>
                    <AspectRatio ratio={conf.sustainable}>
                        <img alt="" height="100%" src="/images/about-us/img_04_01.jpg" width="100%" />
                    </AspectRatio>
                </SwiperSlide>

                <SwiperSlide>
                    <AspectRatio ratio={conf.sustainable}>
                        <img alt="" height="100%" src="/images/about-us/img_04_02.jpg" width="100%" />
                    </AspectRatio>
                </SwiperSlide>

                <SwiperSlide>
                    <AspectRatio ratio={conf.sustainable}>
                        <img alt="" height="100%" src="/images/about-us/img_04_03.jpg" width="100%" />
                    </AspectRatio>
                </SwiperSlide>
            </Swiper>

            {/* 企业 ESG */}
            <div className={styles.esg}>
                <img alt="" src="/images/about-us/esg.png" />

                <span>
                    <span style={{ letterSpacing: '0.25em' }}>企业ES</span>G
                </span>
            </div>
        </div>
    );
};

export default Page;
