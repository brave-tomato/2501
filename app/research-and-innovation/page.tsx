'use client';
import { Title1 } from '@/components/headline';
import Title2 from '@/components/headline/title2';
import HeroSection from '@/components/hero-setion';
import TitleSection from '@/components/title-section';
import { ICustomComponentProps } from '@/types';
import classNames from 'classnames';
import { FC, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import AspectRatio from '@/components/aspect-ratio';
import { useSetState } from 'ahooks';
import { Flex, Image } from 'antd';
import ImageTextSection from './components/image-text-section';

import './index.scss';

/**
 * Constants
 */
const culture1 = [
    {
        id: 1,
        src: '/images/research-and-innovation/play@2x.png',
        video: '/images/about-us/banner.mp4',
        title: '原位固态化',
        subtitle: 'In-situ Solidification',
        content: '原位固态化原位固态化',
    },
    {
        id: 2,
        src: '/images/research-and-innovation/play_02@2x.png',
        video: '/images/about-us/banner.mp4',
        title: '固态电解质涂敷',
        subtitle: 'Solid Electrolyte Blending',
        content: '固态电解质涂敷固态电解质涂敷',
    },
    {
        id: 3,
        src: '/images/research-and-innovation/play@2x.png',
        video: '/images/about-us/banner.mp4',
        title: '固态电解质正极包覆',
        subtitle: 'Solid Electrolyte Coating the Cathode',
        content: '固态电解质正极包覆固态电解质正极包覆',
    },
    {
        id: 4,
        src: '/images/research-and-innovation/play_02@2x.png',
        video: '/images/about-us/banner.mp4',
        title: 'Title 4',
        subtitle: 'Subtitle 4',
        content: 'Content for item 4',
    },
    {
        id: 5,
        src: '/images/research-and-innovation/play@2x.png',
        video: '/images/about-us/banner.mp4',
        title: 'Title 5',
        subtitle: 'Subtitle 5',
        content: 'Content for item 5',
    },
    {
        id: 6,
        src: '/images/research-and-innovation/play_02@2x.png',
        video: '/images/about-us/banner.mp4',
        title: 'Title 6',
        subtitle: 'Subtitle 6',
        content: 'Content for item 6',
    },
    {
        id: 7,
        src: '/images/research-and-innovation/play@2x.png',
        video: '/images/about-us/banner.mp4',
        title: 'Title 7',
        subtitle: 'Subtitle 7',
        content: 'Content for item 7',
    },
];

/**
 * 固态电池研发与创新
 */
const ResearchAndInnovation: FC<ICustomComponentProps> = ({ className }) => {
    const [showVideoModal, setShowVideoModal] = useState(false);
    const [selectedVideoSrc, setSelectedVideoSrc] = useState('');

    /**
     * States
     */
    const [state, setState] = useSetState<any>({
        swiperCulture1: null,
        swiperCulture2: null,
    });

    const handleCoverClick = (videoSrc: any) => {
        setSelectedVideoSrc(videoSrc);
        setShowVideoModal(true);
    };

    const handleCloseModal = () => {
        setShowVideoModal(false);
    };

    return (
        <div className={classNames('', className)}>
            <HeroSection src="/images/hero-section/research-and-innovation@2x.png">
                <TitleSection title="固态电池研发与创新" subtitle="人才与创新是卫蓝聚焦未来技术的基础" />
            </HeroSection>
            {/* 固态电池研发 */}
            <Title1 title="固态电池研发" subtitle="Solid-State Battery R&D" />
            <Title2 title="固态生态" />
            <ImageTextSection />

            <Title2 title="固态技术" />
            <div className="swiper-culture">
                <div className="swiper-button-prev" onClick={() => state.swiperCulture2.slidePrev()} />
                <div className="swiper-button-next" onClick={() => state.swiperCulture2.slideNext()} />

                <Swiper slidesPerView={3} spaceBetween={28} onSwiper={(swiper) => setState({ swiperCulture2: swiper })}>
                    {culture1.map((payload, index) => (
                        <SwiperSlide key={index}>
                            <Flex className="swiper-item-wrapper" vertical>
                                <AspectRatio ratio={327 / 164}>
                                    <Image
                                        alt=""
                                        preview={{
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
                                                        loop
                                                        playsInline
                                                        src={payload.video}
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
                                        src="/images/about-us/img_03.png"
                                        style={{ width: '100%', cursor: 'pointer' }}
                                    />
                                </AspectRatio>

                                <Flex className="bg-linear-green content-box" gap={16} vertical>
                                    <Flex gap={4} vertical>
                                        <div className="title">{payload.title}</div>
                                        <div className="subtitle">{payload.subtitle}</div>
                                    </Flex>
                                    <div className="content">{payload.content}</div>
                                </Flex>
                            </Flex>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* 固态电池制造 */}
            <Title1 title="固态电池制造" subtitle="Solid-State Battery Process" />
            <div style={{ backgroundColor: `var(--custom-gray-light)`, maxWidth: '1920px', height: 600 }}></div>
        </div>
    );
};

export default ResearchAndInnovation;
