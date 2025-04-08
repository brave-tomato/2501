'use client';
import AspectRatio from '@/components/aspect-ratio';
import HeroSection from '@/components/hero-section';
import TitleSection from '@/components/title-section';
import { useSetState } from 'ahooks';
import { Col, Flex, Grid, Pagination, Row } from 'antd';
import classNames from 'classnames';
import { Pagination as SwiperPagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { getConf } from '@/utils';
import Link from 'next/link';

import styles from './styles.module.scss';

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

const newsList = [
    {
        image: '/images/news-media/news_item1@2x.png',
        date: '2024-04-24',
        category: '企业动态',
        title: '卫蓝新能源入选2024年中国独角兽企业名单，排名第103位！',
        description: '北京独角兽企业代表授牌仪式',
    },
    {
        image: '/images/news-media/news_item2@2x.png',
        date: '2023-11-27',
        category: '时事热点',
        title: '卫蓝新能源固态锂离子储能电池荣获中国能源研究会技术创新一等奖',
        description: '中国能源研究会能源创新奖颁奖仪式',
    },
    {
        image: '/images/news-media/news_item3@2x.png',
        date: '2024-04-24',
        category: '综合要闻',
        title: '卫蓝新能源与亿威科技签署战略合作协议',
        description: '卫蓝新能源与亿威科技合作相关场景',
    },
    {
        image: '/images/news-media/news_item2@2x.png',
        date: '2023-09-15',
        category: '企业动态',
        title: '卫蓝新能源入选2024年中国独角兽企业名单，排名第103位！',
        description: '中天科技园区相关活动场景',
    },
    {
        image: '/images/news-media/news_item2@2x.png',
        date: '2024-06-11',
        category: '时事热点',
        title: '浙江龙泉固态电池网侧大规模储能电站并网',
        description: '储能电站相关场景',
    },
    {
        image: '/images/news-media/news_item3@2x.png',
        date: '2024-04-24',
        category: '综合要闻',
        title: '卫蓝固态动力电池系统在CHINAPLAS 2024展会上广受关注',
        description: '展会现场相关场景',
    },
    {
        image: '/images/news-media/news_item2@2x.png',
        date: '2023-11-08',
        category: '企业动态',
        title: '卫蓝新能源入选2024年中国独角兽企业名单，排名第103位！',
        description: '相关工作场景',
    },
    {
        image: '/images/news-media/news_item2@2x.png',
        date: '2023-08-22',
        category: '时事热点',
        title: '卫蓝新能源通过CNAS评定获得“实验室认可证书”',
        description: '实验室相关场景',
    },
    {
        image: '/images/news-media/news_item3@2x.png',
        date: '2023-07-07',
        category: '综合要闻',
        title: '卫蓝新能源360Wh/kg锂电池电芯正式交付蔚来',
        description: '电动汽车充电相关场景',
    },
];

/**
 * 页面：新闻媒体
 */
const NewsMediaPage = () => {
    /**
     * Hooks
     */
    const conf = getConf(Grid.useBreakpoint());

    /**
     * States
     */
    const [state, setState] = useSetState<any>({
        swiperCulture2: null,
        currentPage: 1,
        total: 1000,
    });

    const onChange = (page: any, pageSize: any) => {
        console.log(page, pageSize, '---9999--page, pageSize');
    };

    return (
        <div>
            <HeroSection src="/images/hero-section/news-media@2x.png">
                <TitleSection title="新闻媒体" />
            </HeroSection>
            {/* tab选项卡 */}
            <div className="mw-1920" style={conf.xxxl ? { padding: `0 130px` } : {}}>
                {/* swiper */}
                <div className={styles['news-media-swiper-wrapper']}>
                    <div className={classNames(styles['swiper-button'], ' cursor-pointer ')}>
                        <Flex gap={40}>
                            <img
                                className={styles['button-prev']}
                                src="/images/news-media/icon_news_swiper_left@2x.png"
                                onClick={() => state.swiperCulture2.slidePrev()}
                            />
                            <img
                                className={styles['button-next']}
                                src="/images/news-media/icon_news_swiper_right@2x.png"
                                onClick={() => state.swiperCulture2.slideNext()}
                            />
                        </Flex>
                    </div>
                    <Swiper
                        modules={[SwiperPagination]}
                        className={styles['news-swiper']}
                        onSwiper={(swiper) => setState({ swiperCulture2: swiper })}
                    >
                        {events.map((event, index) => (
                            <SwiperSlide key={index}>
                                <Link href={'/news-media-details'}>
                                    <Row>
                                        <Col span={8}>
                                            {/* 内容 */}
                                            <Flex className={styles['event-text']} gap={48} vertical>
                                                <Flex gap={34} vertical>
                                                    <div className={styles.title}>{event.title}</div>
                                                    <div className={styles.subtitle}>{event.subtitle}</div>
                                                </Flex>

                                                <Flex className={styles['event-date']} gap={16}>
                                                    <div>{event.date}</div>
                                                    <div> {event.category}</div>
                                                </Flex>
                                            </Flex>
                                        </Col>
                                        <Col span={16}>
                                            {/* 图片 */}
                                            <div style={{ width: '100%' }}>
                                                <AspectRatio ratio={670 / 424}>
                                                    <img
                                                        src={event.image}
                                                        alt={event.title}
                                                        className={styles['event-image']}
                                                    />
                                                </AspectRatio>
                                            </div>
                                        </Col>
                                    </Row>
                                </Link>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                {/* 分页list */}
                <Flex className={styles['news-list-wrapper']} gap={104} vertical style={{ overflow: 'hidden' }}>
                    <Row gutter={[64, 60]}>
                        {newsList.map((payload: any, index: number) => (
                            <Col key={index} span={8}>
                                <Link href={'/news-media-details'}>
                                    <Flex
                                        align="start"
                                        className={styles['link-box']}
                                        gap={32}
                                        justify="start"
                                        vertical
                                    >
                                        {/* 图片 */}
                                        <div style={{ width: '100%' }}>
                                            <AspectRatio ratio={511 / 342}>
                                                <img src={payload.image} width={`100%`} height={`100%`} />
                                            </AspectRatio>
                                        </div>
                                        {/* 内容 */}
                                        <Flex gap={22} vertical>
                                            {/* 日期和分类 */}
                                            <Flex gap={28} style={{ fontSize: 18, color: `var(--custom-gray)` }}>
                                                <div>{payload.date}</div>
                                                <div>{payload.category}</div>
                                            </Flex>
                                            <div className={styles.title}>{payload.title}</div>
                                        </Flex>
                                    </Flex>
                                </Link>
                            </Col>
                        ))}
                    </Row>

                    {/* 分页 */}
                    <Flex justify="center">
                        <Pagination
                            className={styles.pagination}
                            defaultCurrent={state.currentPage}
                            total={state.total}
                            showSizeChanger={false}
                            onChange={onChange}
                        />
                    </Flex>
                </Flex>
            </div>
        </div>
    );
};

export default NewsMediaPage;
