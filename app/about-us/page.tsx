'use client';

import { getConf } from '@/utils';
import { useSetState } from 'ahooks';
import { Col, Flex, Grid, Image, Row } from 'antd';
import dynamic from 'next/dynamic';

import ReactFullpage from '@fullpage/react-fullpage';
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
import classNames from 'classnames';
import Link from 'next/link';
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

// 愿景
const contentData = [
    {
        title: '愿景',
        description:
            'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
    },
    {
        title: '使命',
        description:
            'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
    },
    {
        title: '价值观',
        description:
            'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
    },
];

// 员工
const yuangongList = [
    {
        image: '/images/about-us/yuangong_item@2x.png',
        date: '2024-04-24',
        category: '企业动态',
        title: '卫蓝新能源入选2024年中国独角兽企业名单，排名第103位！',
        description: '北京独角兽企业代表授牌仪式',
    },
    {
        image: '/images/about-us/yuangong_item@2x.png',
        date: '2023-11-27',
        category: '时事热点',
        title: '卫蓝新能源固态锂离子储能电池荣获中国能源研究会技术创新一等奖',
        description: '中国能源研究会能源创新奖颁奖仪式',
    },
    {
        image: '/images/about-us/yuangong_item@2x.png',
        date: '2024-04-24',
        category: '综合要闻',
        title: '卫蓝新能源与亿威科技签署战略合作协议',
        description: '卫蓝新能源与亿威科技合作相关场景',
    },
    {
        image: '/images/about-us/yuangong_item@2x.png',
        date: '2023-09-15',
        category: '企业动态',
        title: '卫蓝新能源入选2024年中国独角兽企业名单，排名第103位！',
        description: '中天科技园区相关活动场景',
    },
    {
        image: '/images/about-us/yuangong_item@2x.png',
        date: '2024-06-11',
        category: '时事热点',
        title: '浙江龙泉固态电池网侧大规模储能电站并网',
        description: '储能电站相关场景',
    },
    {
        image: '/images/about-us/yuangong_item@2x.png',
        date: '2024-04-24',
        category: '综合要闻',
        title: '卫蓝固态动力电池系统在CHINAPLAS 2024展会上广受关注',
        description: '展会现场相关场景',
    },
];

// 可持续发展
const kechixufazhanData = [
    {
        title: '协作共赢',
        subtitle: 'WIN-WIN COOPERATION',
        bg: '/images/about-us/ke_bg1@2x.png',
    },
    {
        title: '绿色循环',
        subtitle: 'GREEN CYCLE',
        bg: '/images/about-us/ke_bg2@2x.png',
    },
    {
        title: '持续创新',
        subtitle: 'CONTINUOUS INNOVATION',
        bg: '/images/about-us/ke_bg3@2x.png',
    },
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

    const beforeLeave = (origin, destination, direction, trigger) => {
        console.log('222 :>> ', 222, origin);
    };

    const afterLoad = (origin, destination, direction, trigger) => {
        console.log('111 :>> ', 111, origin);
        // Resetting the video on the previous section
    };
    return (
        <div className="App">
            <ReactFullpage
                debug
                beforeLeave={beforeLeave}
                afterLoad={afterLoad}
                navigation={true}
                // licenseKey="xxxxxxxxxxxxxxxxxxxxxxxxx"
                render={() => (
                    <ReactFullpage.Wrapper>
                        <div className="section">
                            <AspectRatio ratio={1920 / 1080}>
                                {/* 视频 */}
                                <video
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    poster="/images/about-us/top_bg@2x.png"
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                    }}
                                >
                                    {conf.lg ? (
                                        <source src="https://2501-r2.liuuu.net/about-us/banner.mp4" type="video/mp4" />
                                    ) : null}
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
                        </div>

                        {/* 愿景 */}
                        <div className="section">
                            <Row
                                align={'middle'}
                                style={{
                                    height: '100vh',
                                    backgroundImage: 'url(/images/about-us/bg_yuanjing@2x.png)',
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                }}
                            >
                                {contentData.map((itemCol, index) => (
                                    <Col span="8" style={{ height: '100%' }}>
                                        <Flex
                                            align="center"
                                            className={classNames(
                                                styles['yuanjing-wrapper'],
                                                index === contentData.length - 1 && styles['no-border-right'],
                                            )}
                                            vertical
                                        >
                                            <div className={styles.title}>{itemCol.title}</div>
                                            <div className={styles.description}>{itemCol.description}</div>
                                        </Flex>
                                    </Col>
                                ))}
                            </Row>
                        </div>
                        {/* 员工关怀  */}
                        <div className="section" style={{ padding: `64px 230px ` }}>
                            <Flex
                                className={styles['yuangong-list-wrapper']}
                                gap={104}
                                vertical
                                style={{ overflow: 'hidden' }}
                            >
                                <Row gutter={[0, 10]}>
                                    {yuangongList.map((payload: any, index: number) => (
                                        <Col key={index} span={8} className={styles['item-col']}>
                                            <Link href={'/'}>
                                                <Flex
                                                    align="start"
                                                    className={styles['link-box']}
                                                    gap={20}
                                                    justify="start"
                                                    vertical
                                                >
                                                    {/* 图片 */}
                                                    <div style={{ width: '100%' }}>
                                                        <AspectRatio ratio={465 / 232}>
                                                            <img src={payload.image} width={`100%`} height={`100%`} />
                                                        </AspectRatio>
                                                    </div>
                                                    {/* 内容 */}
                                                    <Flex className={styles['content-box']} gap={18} vertical>
                                                        <div className={styles.title}>{payload.title}</div>
                                                        {/* 日期和分类 */}
                                                        <Flex>
                                                            <div className={styles['date']}>{payload.date}</div>
                                                        </Flex>
                                                    </Flex>
                                                </Flex>
                                            </Link>
                                        </Col>
                                    ))}
                                </Row>
                            </Flex>
                        </div>
                        {/* 全球布局 */}
                        <div className="section">
                            <div
                                style={{
                                    height: '100vh',
                                    backgroundImage: 'url(/images/about-us/quanqiu_bg@2x.png)',
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                }}
                            >
                                <Flex align="center" justify="center">
                                    <div style={{ width: 1249 }}>
                                        <AspectRatio ratio={1249 / 666}>
                                            <img
                                                src="/images/about-us/quanqiu_map1@2x.png"
                                                width={`100%`}
                                                height={`100%`}
                                            />
                                        </AspectRatio>
                                    </div>
                                </Flex>
                            </div>
                        </div>
                        {/* 可持续发展 */}
                        <div className="section" style={{ position: 'relative' }}>
                            <Row className={styles['kechixufazhan-wrapper']}>
                                {kechixufazhanData.map((item, index) => (
                                    <Col key={item.title} span={8}>
                                        <Flex
                                            align="center"
                                            gap={20}
                                            // justify="center"
                                            vertical
                                            style={{
                                                height: '100vh',
                                                backgroundImage: `url(${item.bg})`,
                                                backgroundSize: 'cover',
                                                backgroundPosition: 'center',
                                                paddingTop: 224,
                                            }}
                                        >
                                            <div className={styles['title']}>{item.title}</div>
                                            <div className={styles['subtitle']}>{item.subtitle}</div>
                                        </Flex>
                                    </Col>
                                ))}
                            </Row>
                            {/* 企业 ESG */}
                            <div className={styles['esg-btn']}>
                                <div className={styles.esg}>
                                    <img alt="" src="/images/about-us/esg.png" />

                                    <span>
                                        <span style={{ letterSpacing: '0.25em' }}>企业ES</span>G
                                    </span>
                                </div>
                            </div>
                        </div>
                    </ReactFullpage.Wrapper>
                )}
            />
        </div>
    );
};

export default Page;
