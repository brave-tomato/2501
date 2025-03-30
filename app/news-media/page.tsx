'use client';
import HeroSection from '@/components/hero-setion';
import TitleSection from '@/components/title-section';
import { ICustomComponentProps } from '@/types';
import classNames from 'classnames';
import { FC } from 'react';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Flex } from 'antd';
import './index.scss';

const events = [
    {
        title: '卫蓝新能源2024大事件',
        subtitle: '让人类享受绿色能源',
        date: '2024-04-24',
        category: '企业动态',
        image: '/images/news-media/news_big@2x.png', // 替换为实际图片地址
    },
    // 可添加更多事件对象
    {
        title: '卫蓝新能源2025大事件',
        subtitle: '让人类享受绿色能源',
        date: '2024-04-24',
        category: '企业动态',
        image: '/images/news-media/news_big@2x.png', // 替换为实际图片地址
    },
    {
        title: '卫蓝新能源2026大事件',
        subtitle: '让人类享受绿色能源',
        date: '2024-04-24',
        category: '企业动态',
        image: '/images/news-media/news_big@2x.png', // 替换为实际图片地址
    },
    {
        title: '卫蓝新能源2027大事件',
        subtitle: '让人类享受绿色能源',
        date: '2024-04-24',
        category: '企业动态',
        image: '/images/news-media/news_big@2x.png', // 替换为实际图片地址
    },
];

/**
 * 页面：新闻媒体
 */
const NewsMediaPage: FC<ICustomComponentProps> = ({ className }) => {
    return (
        <div className={classNames('', className)}>
            <HeroSection src="/images/hero-section/news-media@2x.png">
                <TitleSection title="新闻媒体" />
            </HeroSection>
            {/* tab选项卡 */}
            <div className="news-media-swiper-wrapper">
                <Swiper modules={[Pagination]} className="news-swiper">
                    {events.map((event, index) => (
                        <SwiperSlide key={index}>
                            <div className="event-container">
                                <div className="event-text">
                                    <h2>{event.title}</h2>
                                    <p>{event.subtitle}</p>
                                    <Flex className="event-date" gap={16}>
                                        <div>{event.date}</div>
                                        <div> {event.category}</div>
                                    </Flex>
                                </div>
                                <img src={event.image} alt={event.title} className="event-image" />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <div className="swiper-button">
                    <Flex gap={40}>
                        <img className="swiper-button-prev" src="/images/news-media/icon_news_swiper_left@2x.png" />
                        <img className="swiper-button-next" src="/images/news-media/icon_news_swiper_right@2x.png" />
                    </Flex>
                </div>
            </div>
            {/* 分页list */}
        </div>
    );
};

export default NewsMediaPage;
