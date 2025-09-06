'use client';
import { useSetState } from 'ahooks';
import { Col, Flex, Grid, Pagination, Row } from 'antd';
import classNames from 'classnames';
import dayjs from 'dayjs';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useEffect } from 'react';
import { Pagination as SwiperPagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import AspectRatio from '@/components/aspect-ratio';
import HeroSection from '@/components/hero-section';
import TitleSection from '@/components/title-section';
import { getConf } from '@/utils';

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

/**
 * 页面：新闻媒体
 */
const NewsMediaPage = () => {
    /**
     * Params
     */
    const params = useParams();

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
        pageSize: 9,
        total: 0,
        newsList: [],
        loading: false,
    });

    /**
     * 获取新闻列表数据
     */
    const fetchNewsList = async (page = 1, size = 9) => {
        setState({ loading: true });
        try {
            const lang = params.locale === 'zh' ? 'zh-CN' : 'en-US';
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/v1/news?page=${page}&size=${size}&category=news&lang=${lang}`,
            );
            const data = await response.json();

            setState({
                newsList: data?.data || [],
                total: data?.total || 0,
                currentPage: page,
                loading: false,
            });
        } catch (error) {
            console.error('Failed to fetch news list:', error);
            setState({ loading: false });
        }
    };

    /**
     * Effects
     */
    useEffect(() => {
        fetchNewsList(state.currentPage, state.pageSize);
    }, [params.locale]);

    const onChange = (page: number, pageSize: number) => {
        fetchNewsList(page, pageSize);
    };

    return (
        <div>
            <HeroSection src="/images/hero-section/news-media@2x.png">
                <TitleSection title="新闻媒体" />
            </HeroSection>
            {/* tab选项卡 */}
            {/* <div className="mw-1920" style={conf.xxxl ? { padding: `0 210px` } : {}}> */}
            <div className="mw-1920" style={{ padding: `0 210px` }}>
                {/* swiper */}
                <div className={styles['news-media-swiper-wrapper']}>
                    <div className={classNames(styles['swiper-button'], ' cursor-pointer ')}>
                        <Flex gap={68}>
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
                                            <Flex className={styles['event-text']} gap={58} vertical>
                                                <Flex gap={34} vertical>
                                                    <div className={styles.title}>{event.title}</div>
                                                    <div className={styles.subtitle}>{event.subtitle}</div>
                                                </Flex>

                                                <Flex className={styles['event-date']} gap={34}>
                                                    <div>{event.date}</div>
                                                    <div> {event.category}</div>
                                                </Flex>
                                            </Flex>
                                        </Col>
                                        <Col span={16}>
                                            {/* 图片 */}
                                            <div style={{ width: '100%' }}>
                                                <AspectRatio ratio={985 / 691}>
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
                    <Row gutter={[44, 60]}>
                        {state.newsList.map((payload: any, index: number) => (
                            <Col key={payload.id || index} span={8}>
                                <Link href={`/${params.locale}/news/${payload.id}`}>
                                    <Flex
                                        align="start"
                                        className={styles['link-box']}
                                        gap={40}
                                        justify="start"
                                        vertical
                                    >
                                        {/* 图片 */}
                                        <div style={{ width: '100%' }}>
                                            <AspectRatio ratio={471 / 316}>
                                                <img
                                                    src={payload.cover || payload.image}
                                                    width={`100%`}
                                                    height={`100%`}
                                                />
                                            </AspectRatio>
                                        </div>
                                        {/* 内容 */}
                                        <Flex className={styles['content-box']} gap={22} vertical>
                                            {/* 日期和分类 */}
                                            <Flex gap={28} style={{ fontSize: 18, color: `var(--custom-gray)` }}>
                                                <div>
                                                    {payload.created
                                                        ? dayjs(payload.created).format('YYYY-MM-DD')
                                                        : payload.date}
                                                </div>
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
                            current={state.currentPage}
                            total={state.total}
                            pageSize={state.pageSize}
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
