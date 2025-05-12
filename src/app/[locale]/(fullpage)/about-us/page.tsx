'use client';

import { Col, Flex, Image, Popover, Row } from 'antd';
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
import { StaggeredText } from '@/components/motion';

/**
 * Styles
 */
import styles from './styles.module.scss';

/**
 * Constants
 */
// 使命
const missionData = [
    {
        title: '愿景',
        description: '成为全球固态电池领军企业',
    },
    {
        title: '使命',
        description: '让人类享受绿色能源',
    },
    {
        title: '价值观',
        description: '原始创新·深度思考·兼收并蓄·极致执行',
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

    /**
     * States
     */
    const [active, setActive] = useState(false);

    /**
     * Effects
     */
    useEffect(() => {
        if (fullpageRef.current) {
            // @ts-ignore
            const instance = new fullpage(fullpageRef.current, {
                anchors: ['about-us-1', 'about-us-2', 'about-us-3', 'about-us-4', 'about-us-5'],
                animateAnchor: true,
                credits: {
                    enabled: false,
                },
                lockAnchors: false,
                normalScrollElements: 'header',
                beforeLeave: (origin: any, destination: any) => {
                    const active = [2].includes(destination.index) || [''].includes(destination.anchor);

                    // 特殊页面高亮菜单
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
            <Header
                active={active}
                locale={params.locale as string}
                onClick={(href) => {
                    if (href.includes('#')) {
                        fullpageInstanceRef.current?.moveTo(href.split('#')[1]);
                    }
                }}
            />

            <div ref={fullpageRef}>
                {/* Banner */}
                <div className="section" style={{ position: 'relative' }}>
                    <video
                        autoPlay
                        muted
                        playsInline
                        poster="/static/about-us/banner.png"
                        style={{
                            position: 'absolute',
                            inset: 0,
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                        }}
                    >
                        <source src="https://2501-r2.liuuu.net/about-us/banner.mp4" type="video/mp4" />
                    </video>

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
                </div>

                {/* 使命 */}
                <div className="section">
                    <Row
                        align="middle"
                        style={{
                            height: '100vh',
                            backgroundImage: 'url(/static/about-us/bg_yuanjing@2x.png)',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    >
                        {missionData.map((item, index) => (
                            <Col key={index} span="8" style={{ height: '100%' }}>
                                <Flex
                                    align="center"
                                    className={classNames(styles['mission-wrapper'], {
                                        [styles['br-0']]: index === missionData.length - 1,
                                    })}
                                    justify="center"
                                    vertical
                                >
                                    <div className={styles.title}>{item.title}</div>

                                    <div className={styles.description}>{item.description}</div>
                                </Flex>
                            </Col>
                        ))}
                    </Row>
                </div>

                {/* 公司简介 */}
                <div className={`section ${styles.intro}`}>
                    <Row align="middle" className={styles.bg}>
                        <Col offset={1} span={7}>
                            <div className={styles.title}>公司简介</div>

                            <div className={styles.subtitle}>Profile</div>

                            <div className={styles.description}>
                                北京卫蓝新能源科技股份有限公司（以下简称“卫蓝新能源”）是中国科学院物理研究所固态电池产学研孵化企业，成立于2016年，位于北京房山窦店，主营固态锂离子电池，集研发、生产、市场、销售于一体，是国家级专精特新小巨人企业、独角兽企业，具有CNAS资质，具有40余年固态电池产业研究经验，在多个固态锂电技术领域实现“首次”突破。
                                <br />
                                公司由中国工程院院士陈立泉、中国科学院物理研究所研究员李泓、教授级高级工程师俞会根共同发起创办，汇聚了电池材料、电芯、系统等领域的高精尖人才。
                                <br />
                                产品主要应用领域涵盖新能源汽车、储能、低空经济动力三大部分，其中典型电芯产品有：
                                <br />
                                360Wh/kg高能量密度动力电芯：具备超高能量密度，单次续航里程超过1000km，已于2023年底量产交付蔚来汽车，并在多家知名整车厂获得定点。
                                <br />
                                280Ah超高安全储能电芯：已于2023年下半年量产交付，为三峡、海博思创、国电投等多个储能项目供货。
                                <br />
                                320Wh/kg高能量密度低空经济动力电芯：目前已为多家国内外无人机、机器人、便携电源等客户供货。
                            </div>
                        </Col>

                        <Col offset={1} span={14}>
                            <AspectRatio ratio={887 / 500}>
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
                                                    src={`https://2501-r2.liuuu.net/about-us/intro_${params.locale || 'zh'}.mp4`}
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
                                    src="/static/about-us/intro.jpg"
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        cursor: 'pointer',
                                    }}
                                />
                            </AspectRatio>
                        </Col>
                    </Row>
                </div>

                {/* 全球布局 */}
                <div className="section">
                    <Flex align="center" className={styles.global} justify="center" vertical>
                        <Flex align="center" gap={64}>
                            <img alt="" height={565} src="/static/about-us/global.png" width={1099} />

                            <Flex gap={9} vertical>
                                <Popover
                                    arrow={false}
                                    classNames={{ body: styles['global-popover'] }}
                                    content={
                                        <Flex vertical>
                                            <Flex gap={40}>
                                                <div>北京</div>

                                                <div>房山研发基地</div>
                                            </Flex>

                                            <Flex gap={40}>
                                                <div>广东</div>

                                                <div>南沙研发基地</div>
                                            </Flex>

                                            <Flex gap={40}>
                                                <div>深圳</div>

                                                <div>坪山研发基地</div>
                                            </Flex>

                                            <Flex gap={40}>
                                                <div>上海</div>

                                                <div>嘉定研发基地</div>
                                            </Flex>
                                        </Flex>
                                    }
                                    placement="left"
                                >
                                    <div className={styles.t1}>
                                        <span />
                                        研发基地
                                    </div>
                                </Popover>

                                <Popover
                                    arrow={false}
                                    classNames={{ body: styles['global-popover'] }}
                                    content={
                                        <Flex vertical>
                                            <div>山东淄博</div>

                                            <div>江苏溧阳</div>

                                            <div>广东珠海</div>

                                            <div>浙江湖州</div>
                                        </Flex>
                                    }
                                    placement="left"
                                >
                                    <div className={styles.t2}>
                                        <span />
                                        制造和服务网点
                                    </div>
                                </Popover>

                                <Popover
                                    arrow={false}
                                    classNames={{ body: styles['global-popover'] }}
                                    content={
                                        <Flex vertical>
                                            <div>马来西亚吉隆坡</div>

                                            <div>泰国曼谷</div>

                                            <div>匈牙利布达佩斯</div>

                                            <div>德国斯图加特</div>

                                            <div>日本大阪</div>
                                        </Flex>
                                    }
                                    placement="left"
                                >
                                    <div className={styles.t3}>
                                        <span />
                                        业务范围
                                    </div>
                                </Popover>
                            </Flex>
                        </Flex>

                        <Row style={{ width: '100%', padding: '0 130px' }}>
                            <Col span={8}>
                                <div className={styles.title}>研发</div>

                                <div className={styles.description}>北京，广东南沙，深圳，上海</div>
                            </Col>

                            <Col span={8}>
                                <div className={styles.title}>制造</div>

                                <div className={styles.description}>山东淄博，江苏溧阳，广东珠海，浙江湖州</div>
                            </Col>

                            <Col span={8}>
                                <div className={styles.title}>服务网点</div>

                                <div className={styles.description}>
                                    马来西亚吉隆坡，泰国曼谷，匈牙利布达佩斯，
                                    <br />
                                    德国斯图加特，日本大阪
                                </div>
                            </Col>
                        </Row>
                    </Flex>
                </div>

                {/* 协作共赢 */}
                <div className="section">
                    <div style={{ position: 'relative' }}>
                        <Row className={styles.cooperation}>
                            <Col className={styles.bg1} span={8}>
                                <Flex align="center" style={{ position: 'relative', top: '30%' }} vertical>
                                    <div className={styles.title}>协作共赢</div>

                                    <div className={styles.description}>WIN-WIN COOPERATION</div>
                                </Flex>
                            </Col>

                            <Col className={styles.bg2} span={8}>
                                <Flex align="center" style={{ position: 'relative', top: '30%' }} vertical>
                                    <div className={styles.title}>绿色循环</div>

                                    <div className={styles.description}>GREEN CYCLE</div>
                                </Flex>
                            </Col>

                            <Col className={styles.bg3} span={8}>
                                <Flex align="center" style={{ position: 'relative', top: '30%' }} vertical>
                                    <div className={styles.title}>持续创新</div>

                                    <div className={styles.description}>CONTINUOUS INNOVATION</div>
                                </Flex>
                            </Col>
                        </Row>

                        {/* ESG */}
                        <div className={styles['esg-btn']}>
                            <div className={styles.esg}>
                                <img alt="" src="/images/about-us/esg.png" />

                                <span>
                                    <span style={{ letterSpacing: '0.25em' }}>企业ES</span>G
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="section fp-auto-height">
                    {/* 可持续发展 */}

                    {/* Footer */}
                    <Footer />
                </div>
            </div>
        </>
    );
};
