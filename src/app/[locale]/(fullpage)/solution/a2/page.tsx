'use client';

import ReactFullpage from '@fullpage/react-fullpage';
import { Col, Flex, Row } from 'antd';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useEffect } from 'react';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

/**
 * Components
 */
import AspectRatio from '@/components/aspect-ratio';
import Footer from '@/components/footer';
import Header from '@/components/header';

/**
 * Styles
 */
import styles from './styles.module.scss';

/**
 * Constants
 */
const sections = [
    {
        features: [
            ['高能量密度', '提供 270~350+Wh/kg 多种高能量密度电芯方案，飞行更持久，作业更广，一次起飞，多点巡航'],
            ['高倍率放电能力', '最高支持5C+持续放电能力，轻松应对无人机起飞、爬升、抗风、重载飞行等全工况飞行需求'],
            ['高安全邢恩能够', '采用自主研发的混合固液电池，安全升级大幅提升，运行更安心'],
            ['强低温性能', '可在-40℃环境下稳定放电，容量保持率≥75%，挑战高源与极寒无压力'],
            ['长循环寿命', '单体电芯支持1000-2000次超长循环寿命，满足高频飞行等高强度任务场景需要'],
            ['“车规级”品质', '源自新能源汽车制造标准，一致性更高，性能更稳定，每一次飞行都放心'],
        ],
        image: '/static/solution/a2/01.jpg',
        link: '/static/solution/a2/01.pdf',
        logo: [
            { image: '/static/solution/a2/logo/01.jpg' },
            { image: '/static/solution/a2/logo/02.jpg' },
            { image: '/static/solution/a2/logo/03.jpg' },
            { image: '/static/solution/a2/logo/04.jpg' },
            { image: '/static/solution/a2/logo/05.jpg' },
            { image: '/static/solution/a2/logo/06.jpg' },
            { image: '/static/solution/a2/logo/07.jpg' },
            { image: '/static/solution/a2/logo/08.jpg' },
        ],
        title: '工业&植保无人机解决方案',
    },
    {
        features: [
            ['高能量密度', '≥300Wh/kg航空级电芯，轻装高效，助力实现百公里级续航飞行'],
            ['大功率输出', '支持5C以上持续放电，垂直起降、急速爬升稳如飞行堡垒！'],
            ['极致安全设计', '混合固态电芯+多层电芯防护 + 热管理系统 + 冗余安全策略，全维保障飞行安全'],
            ['宽温适应能力', '-40℃~60℃宽温性能，全天候飞行环境下稳定可靠！'],
            ['长循环寿命', '≥1000次循环寿命，支持高频次飞行任务，运营成本更低'],
            ['车规级/航空质控', '对标新能源汽车与航空标准双重验证，严控一致性与可追溯性'],
        ],
        image: '/static/solution/a2/02.jpg',
        link: '/static/solution/a2/02.pdf',
        logo: [
            { image: '/static/solution/a2/logo/01.jpg' },
            { image: '/static/solution/a2/logo/02.jpg' },
            { image: '/static/solution/a2/logo/03.jpg' },
            { image: '/static/solution/a2/logo/04.jpg' },
            { image: '/static/solution/a2/logo/05.jpg' },
            { image: '/static/solution/a2/logo/06.jpg' },
            { image: '/static/solution/a2/logo/07.jpg' },
            { image: '/static/solution/a2/logo/08.jpg' },
        ],
        title: 'EVTOL 解决方案',
    },
];

export default () => {
    /**
     * Params
     */
    const params = useParams();

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
            <Header active={true} locale={params.locale as string} />

            <div className={styles.page}>
                <ReactFullpage
                    credits={{
                        enabled: false,
                    }}
                    render={() => (
                        <ReactFullpage.Wrapper>
                            {sections.map((section, index) => (
                                <div className="section" data-anchor={`anchor-${index}`} key={section.title}>
                                    <Row align="middle" gutter={40} style={{ maxWidth: 1280, margin: '0 auto' }}>
                                        {/* 左侧 */}
                                        <Col span={12}>
                                            <Flex align="center" vertical>
                                                {/* 图片 */}
                                                <div className={styles.image}>
                                                    <AspectRatio ratio={447 / 308}>
                                                        <img
                                                            alt={section.title}
                                                            src={section.image}
                                                            style={{
                                                                width: '100%',
                                                                height: '100%',
                                                                objectFit: 'contain',
                                                            }}
                                                        />
                                                    </AspectRatio>
                                                </div>

                                                {/* 标题 */}
                                                <div className={styles.title}>{section.title}</div>

                                                {/* 链接 */}
                                                <Link className={styles.link} href={section.link} target="_blank" />
                                            </Flex>
                                        </Col>

                                        {/* 右侧 */}
                                        <Col span={12}>
                                            <Row gutter={[40, 40]} className={styles.features}>
                                                {section.features.map((feature, index) => (
                                                    <Col key={index} span={12}>
                                                        <div className={styles.feature}>
                                                            {/* 标题 */}
                                                            <div className={styles.featureTitle}>{feature[0]}</div>

                                                            {/* 描述 */}
                                                            <div className={styles.featureDesc}>{feature[1]}</div>
                                                        </div>
                                                    </Col>
                                                ))}
                                            </Row>

                                            {/* 合作商 */}
                                            {section.logo?.length && (
                                                <Swiper
                                                    autoplay={{
                                                        delay: 1500,
                                                        disableOnInteraction: false,
                                                        pauseOnMouseEnter: true,
                                                    }}
                                                    loop={true}
                                                    modules={[Autoplay]}
                                                    slidesPerView={5}
                                                    style={{ marginTop: 80 }}
                                                >
                                                    {section.logo.map((logo, index) => (
                                                        <SwiperSlide key={index} style={{ textAlign: 'center' }}>
                                                            {logo?.link ? (
                                                                <Link href={logo.link} target="_blank">
                                                                    <img
                                                                        alt=""
                                                                        src={logo.image}
                                                                        style={{
                                                                            width: 79,
                                                                            height: 36,
                                                                            objectFit: 'contain',
                                                                        }}
                                                                    />
                                                                </Link>
                                                            ) : (
                                                                <img
                                                                    alt=""
                                                                    src={logo.image}
                                                                    style={{
                                                                        width: 79,
                                                                        height: 36,
                                                                        objectFit: 'contain',
                                                                    }}
                                                                />
                                                            )}
                                                        </SwiperSlide>
                                                    ))}
                                                </Swiper>
                                            )}
                                        </Col>
                                    </Row>
                                </div>
                            ))}

                            <div className="section fp-auto-height">
                                <Footer />
                            </div>
                        </ReactFullpage.Wrapper>
                    )}
                />
            </div>
        </>
    );
};
