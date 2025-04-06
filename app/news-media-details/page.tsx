'use client';
import HeroSection from '@/components/hero-section';
import TitleSection from '@/components/title-section';

import { FC } from 'react';
import { Pagination as SwiperPagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import AspectRatio from '@/components/aspect-ratio';
import { getConf } from '@/utils';
import { useSetState } from 'ahooks';
import { Col, Flex, Grid, Pagination, Row } from 'antd';
import classNames from 'classnames';
import { stat } from 'fs';
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
const NewsMediaDetailsPage = () => {
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
            {/* 左右布局：左边展示详情，右边切换 */}
            <div className="mw-1920" style={conf.xxxl ? { padding: `0 90px`, marginTop: 104 } : { marginTop: 104 }}>
                <Row gutter={70}>
                    <Col span={16} style={{ width: '100%' }}>
                        <Flex className={styles['news-details-left-box']} gap={36} vertical>
                            <Flex gap={24} vertical>
                                <div className={styles.title}>
                                    卫蓝新能源入选2024年中国独角兽企业名单，排名第103位！
                                </div>
                                <Flex className={styles.subtitle} gap={70}>
                                    <div>时间：2025-03-31</div>
                                    <div>点击量：12345</div>
                                </Flex>
                            </Flex>
                            <div className={styles.content}>
                                <p>
                                    近年来，中国科技创新整体实力稳步提升，创新体系日益完备，孕育了一大批独角兽企业，为培育新质生产力提供源源不断的动能。独角兽企业具有创新能力强、成长性好、市场认可度高等特征，是新经济发展的“风向标”，是新质生产力的典型代表。
                                    在4月28日举行的中关村论坛——全球独角兽企业大会上发布的《中国独角兽企业发展报告（2024年）》公布了中国独角兽企业名单，共有369家，卫蓝新能源排名第103位。
                                </p>
                                <Flex align="center" justify="center" vertical>
                                    <div style={{ textAlign: 'center', width: '100%' }}>
                                        <AspectRatio ratio={1137 / 739}>
                                            <img
                                                src={'/images/news-media/details/img_1@2x.png'}
                                                style={{ width: '100%' }}
                                            />
                                        </AspectRatio>
                                    </div>
                                    <div className={styles['img-title']}>（图：中关村论坛现场）</div>
                                </Flex>
                                <p>
                                    卫蓝新能源是中国科学院物理研究所固态电池产学研孵化企业，成立于2016年，位于北京房山窦店，主营固态锂离子电池，集研发、生产、市场、销售于一体，是国家级专精特新小巨人企业、独角兽企业，具有CNAS资质及40余年固态电池产业研究经验，在多个固态锂电技术领域实现“首次”突破。公司由中国工程院院士陈立泉、中国科学院物理研究所研究员李泓、教授级高级工程师俞会根共同发起创办，汇聚了电池材料、电芯、系统等领域的高精尖人才。
                                </p>
                                <Flex align="center" justify="center" vertical>
                                    <div style={{ textAlign: 'center', width: '100%' }}>
                                        <AspectRatio ratio={1137 / 739}>
                                            <img
                                                src={'/images/news-media/details/img_2@2x.png'}
                                                style={{ width: '100%' }}
                                            />
                                        </AspectRatio>
                                    </div>
                                    <div className={styles['img-title']}>
                                        （图：中关村论坛北京独角兽企业代表授牌仪式现场）
                                    </div>
                                </Flex>
                                <Flex align="center" justify="center" vertical style={{ marginTop: 48 }}>
                                    <div style={{ textAlign: 'center', width: 533 }}>
                                        <AspectRatio ratio={533 / 691}>
                                            <img
                                                src={'/images/news-media/details/img_3@2x.png'}
                                                style={{ width: 533 }}
                                            />
                                        </AspectRatio>
                                    </div>
                                    <div className={styles['img-title']}>（图：2024年北京市独角兽企业证书）</div>
                                </Flex>
                                <p>
                                    <p>
                                        目前，369家独角兽企业分布在16个领域。独角兽企业覆盖了全国47个城市，“北上深广杭”集聚超六成，北京以114家的数量位居全国首位。
                                    </p>
                                    <p>
                                        注：《中国独角兽企业发展报告（2024年）》由中关村独角兽企业发展联盟联合毕马威企业咨询（中国）有限公司、长城战略咨询、北京方迪经济发展研究院、清华大学中国科技政策研究中心共同发布。
                                    </p>
                                </p>
                            </div>
                        </Flex>
                    </Col>
                    <Col span={8}>
                        <Flex className={styles['news-details-right-box']} gap={24} vertical>
                            {/* 上一条 */}
                            <Flex className={styles['right-item']} gap={25} vertical>
                                <div className={styles.nav}>上一条</div>
                                <Flex className={styles.title} gap={47} vertical>
                                    <div>泰国国务院总理府助理总理委员会主席罗亚蒙一行访问卫蓝新能源</div>
                                    <div>2025-03-31</div>
                                </Flex>
                            </Flex>
                            {/* 下一条 */}
                            <Flex className={styles['right-item']} gap={25} vertical>
                                <div className={styles.nav}>下一条</div>
                                <Flex className={styles.title} gap={47} vertical>
                                    <div>泰国国务院总理府助理总理委员会主席罗亚蒙一行访问卫蓝新能源</div>
                                    <div>2025-03-31</div>
                                </Flex>
                            </Flex>
                            {/* 分享到 */}
                            <Flex className={styles['right-item']} gap={18} vertical>
                                <div className={styles.nav}>分享到</div>
                                <Flex className={styles.title} gap={24} vertical>
                                    <Flex gap={20}>
                                        <img src={'/images/news-media/details/icon_weixin@2x.png'} />
                                        <img src={'/images/news-media/details/icon_weibo@2x.png'} />
                                        <img src={'/images/news-media/details/icon_qq@2x.png'} />
                                    </Flex>
                                    <div>2025-03-31</div>
                                </Flex>
                            </Flex>
                        </Flex>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default NewsMediaDetailsPage;
