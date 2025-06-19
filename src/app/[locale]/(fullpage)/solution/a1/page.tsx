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
            ['尖端电芯 领航能量密度', '采用半固态电池技术兼容新一代正负极材料，量产电芯比能量实现360Wh/kg行业最高水平'],
            ['超长续航 定义行业标杆', '超高比能单体电芯，赋能主机厂实现行业首个实测续航突破1000KM的量产车型'],
            ['极速快充 重构补能体验', '10-80%SOC最快仅需12分钟补能，峰值充电倍率高达6C'],
            ['多维安全 构筑防护体系', '多项固态电池原创核心技术切断热失控连锁反应，改善电芯本征安全特性'],
            ['智造革新 驱动产业升级', '支持46系列大圆柱全极耳电芯，实现Pack平台标准化，缩减系统开发成本'],
        ],
        image: '/static/solution/a1/01.jpg',
        link: '/static/solution/a1/01.pdf',
        logo: [
            { image: '/static/solution/a1/logo/01.jpg' },
            { image: '/static/solution/a1/logo/02.jpg' },
            { image: '/static/solution/a1/logo/03.jpg' },
            { image: '/static/solution/a1/logo/04.jpg' },
            { image: '/static/solution/a1/logo/05.jpg' },
            { image: '/static/solution/a1/logo/06.jpg' },
            { image: '/static/solution/a1/logo/07.jpg' },
            { image: '/static/solution/a1/logo/08.jpg' },
            { image: '/static/solution/a1/logo/09.jpg' },
            { image: '/static/solution/a1/logo/10.jpg' },
            { image: '/static/solution/a1/logo/11.jpg' },
            { image: '/static/solution/a1/logo/12.jpg' },
            { image: '/static/solution/a1/logo/13.jpg' },
            { image: '/static/solution/a1/logo/14.jpg' },
            { image: '/static/solution/a1/logo/15.jpg' },
            { image: '/static/solution/a1/logo/16.jpg' },
            { image: '/static/solution/a1/logo/17.jpg' },
            { image: '/static/solution/a1/logo/18.jpg' },
            { image: '/static/solution/a1/logo/19.jpg' },
            { image: '/static/solution/a1/logo/20.jpg' },
            { image: '/static/solution/a1/logo/21.jpg' },
        ],
        title: '纯电乘用车解决方案',
    },
    {
        features: [
            ['350Wh/kg高比能', '采用固态技术匹配高比能正负极材料，提供270-350Wh/kg多种高比能单体电芯选型'],
            ['7-10高倍率', '最高支持电池系统5C持续放电，7-10C峰值放电倍率，提供强劲动力性能。'],
            ['超长续航', '利用高效CTP系统集成技术，电池系统能量密度197Wh/Kg行业最高水平。'],
            ['高安全', '固态电池技术导入与智能制造结合，为高比能、高功率的安全性提供双重保障。'],
        ],
        image: '/static/solution/a1/02.jpg',
        link: '/static/solution/a1/02.pdf',
        logo: [
            { image: '/static/solution/a1/logo/01.jpg' },
            { image: '/static/solution/a1/logo/02.jpg' },
            { image: '/static/solution/a1/logo/03.jpg' },
            { image: '/static/solution/a1/logo/04.jpg' },
            { image: '/static/solution/a1/logo/05.jpg' },
            { image: '/static/solution/a1/logo/06.jpg' },
            { image: '/static/solution/a1/logo/07.jpg' },
            { image: '/static/solution/a1/logo/08.jpg' },
            { image: '/static/solution/a1/logo/09.jpg' },
            { image: '/static/solution/a1/logo/10.jpg' },
            { image: '/static/solution/a1/logo/11.jpg' },
            { image: '/static/solution/a1/logo/12.jpg' },
            { image: '/static/solution/a1/logo/13.jpg' },
            { image: '/static/solution/a1/logo/14.jpg' },
            { image: '/static/solution/a1/logo/15.jpg' },
            { image: '/static/solution/a1/logo/16.jpg' },
            { image: '/static/solution/a1/logo/17.jpg' },
            { image: '/static/solution/a1/logo/18.jpg' },
            { image: '/static/solution/a1/logo/19.jpg' },
            { image: '/static/solution/a1/logo/20.jpg' },
            { image: '/static/solution/a1/logo/21.jpg' },
        ],
        title: '电动快艇解决方案',
    },
    {
        features: [
            ['超大能量容量', '采用350Wh/kg混合固液电池，单包容量可达60KWh，轻松满足长时间航行需求'],
            ['船用级安全标准', '电芯通过IEC/IMO（待确认）船用安全认证，搭配智能BMS系统，确保舱内热管理与多级电气保护'],
            ['防水抗腐蚀设计', 'IP68防护等级，专为湿热、高盐雾环境打造，海上运行更安心'],
        ],
        image: '/static/solution/a1/03.jpg',
        link: '/static/solution/a1/03.pdf',
        logo: [
            { image: '/static/solution/a1/logo/01.jpg' },
            { image: '/static/solution/a1/logo/02.jpg' },
            { image: '/static/solution/a1/logo/03.jpg' },
            { image: '/static/solution/a1/logo/04.jpg' },
            { image: '/static/solution/a1/logo/05.jpg' },
            { image: '/static/solution/a1/logo/06.jpg' },
            { image: '/static/solution/a1/logo/07.jpg' },
            { image: '/static/solution/a1/logo/08.jpg' },
            { image: '/static/solution/a1/logo/09.jpg' },
            { image: '/static/solution/a1/logo/10.jpg' },
            { image: '/static/solution/a1/logo/11.jpg' },
            { image: '/static/solution/a1/logo/12.jpg' },
            { image: '/static/solution/a1/logo/13.jpg' },
            { image: '/static/solution/a1/logo/14.jpg' },
            { image: '/static/solution/a1/logo/15.jpg' },
            { image: '/static/solution/a1/logo/16.jpg' },
            { image: '/static/solution/a1/logo/17.jpg' },
            { image: '/static/solution/a1/logo/18.jpg' },
            { image: '/static/solution/a1/logo/19.jpg' },
            { image: '/static/solution/a1/logo/20.jpg' },
            { image: '/static/solution/a1/logo/21.jpg' },
        ],
        title: '电动游艇&轮船解决方案',
    },
    {
        features: [
            [
                '超高安全',
                '全球首款280Ah混合固液工程机械电池，采用原创的新型纳米固态电解质，1P52S模组280A过充无冒烟、不起火',
            ],
            ['超长耐久', '100%深度充放电7500次循环容量保持率≥80%，45℃高温循环3000周容量保持率≥70%。'],
            ['经济高效', '全球首款成本对标液态的大容量半固态电池方案，关键材料成本优化+高良率智能制造双重降本'],
            ['全球认证', 'GB/IEC/UL多体系认证矩阵，CCS船级社认证突破海上平台应用壁垒'],
        ],
        image: '/static/solution/a1/04.jpg',
        link: '/static/solution/a1/04.pdf',
        logo: [
            { image: '/static/solution/a1/logo/01.jpg' },
            { image: '/static/solution/a1/logo/02.jpg' },
            { image: '/static/solution/a1/logo/03.jpg' },
            { image: '/static/solution/a1/logo/04.jpg' },
            { image: '/static/solution/a1/logo/05.jpg' },
            { image: '/static/solution/a1/logo/06.jpg' },
            { image: '/static/solution/a1/logo/07.jpg' },
            { image: '/static/solution/a1/logo/08.jpg' },
            { image: '/static/solution/a1/logo/09.jpg' },
            { image: '/static/solution/a1/logo/10.jpg' },
            { image: '/static/solution/a1/logo/11.jpg' },
            { image: '/static/solution/a1/logo/12.jpg' },
            { image: '/static/solution/a1/logo/13.jpg' },
            { image: '/static/solution/a1/logo/14.jpg' },
            { image: '/static/solution/a1/logo/15.jpg' },
            { image: '/static/solution/a1/logo/16.jpg' },
            { image: '/static/solution/a1/logo/17.jpg' },
            { image: '/static/solution/a1/logo/18.jpg' },
            { image: '/static/solution/a1/logo/19.jpg' },
            { image: '/static/solution/a1/logo/20.jpg' },
            { image: '/static/solution/a1/logo/21.jpg' },
        ],
        title: '工程机械类解决方案',
    },
    {
        features: [
            ['轻巧之芯', '高质量能量密度 270~350Wh/kg，相同电量电池包，重量减小30%，体积减小30%'],
            ['澎湃之力', '最高支持 5-7C持续放电，起步快，载重高，玩乐更尽兴，跑单更有劲'],
            ['极速充电', '最高支持 2-3C 持续充电，满电只需片刻，让等待不再成为负担'],
            ['续航突破', '一次充电，轻松续航180km+，城市通勤/跨区送货更放心'],
            ['长循环长收益', '寿命高达1500+，日骑夜跑也不怕，降低长期用车成本'],
            ['“车规级”品质', '源自新能源汽车制造标准，一致性更高，性能更稳定，每一次骑行都放心'],
        ],
        image: '/static/solution/a1/05.jpg',
        link: '/static/solution/a1/05.pdf',
        logo: [
            { image: '/static/solution/a1/logo/01.jpg' },
            { image: '/static/solution/a1/logo/02.jpg' },
            { image: '/static/solution/a1/logo/03.jpg' },
            { image: '/static/solution/a1/logo/04.jpg' },
            { image: '/static/solution/a1/logo/05.jpg' },
            { image: '/static/solution/a1/logo/06.jpg' },
            { image: '/static/solution/a1/logo/07.jpg' },
            { image: '/static/solution/a1/logo/08.jpg' },
            { image: '/static/solution/a1/logo/09.jpg' },
            { image: '/static/solution/a1/logo/10.jpg' },
            { image: '/static/solution/a1/logo/11.jpg' },
            { image: '/static/solution/a1/logo/12.jpg' },
            { image: '/static/solution/a1/logo/13.jpg' },
            { image: '/static/solution/a1/logo/14.jpg' },
            { image: '/static/solution/a1/logo/15.jpg' },
            { image: '/static/solution/a1/logo/16.jpg' },
            { image: '/static/solution/a1/logo/17.jpg' },
            { image: '/static/solution/a1/logo/18.jpg' },
            { image: '/static/solution/a1/logo/19.jpg' },
            { image: '/static/solution/a1/logo/20.jpg' },
            { image: '/static/solution/a1/logo/21.jpg' },
        ],
        title: '电动摩托车解决方案',
    },
    {
        features: [
            ['轻巧之芯', '高质量能量密度 320~400Wh/kg，电池更轻盈，整车更省力'],
            ['迷你之芯', '高体积能量密度，≥700Wh/L，体积缩小能量不减，轻松集成于车架，满足更多设计可能'],
            ['续航突破', '一次充电，轻松续航超上百公里，骑行者的福音'],
            ['“车规级”品质', '源自新能源汽车制造标准，一致性更高，性能更稳定，每一次骑行都放心'],
        ],
        image: '/static/solution/a1/06.jpg',
        link: '/static/solution/a1/06.pdf',
        logo: [
            { image: '/static/solution/a1/logo/01.jpg' },
            { image: '/static/solution/a1/logo/02.jpg' },
            { image: '/static/solution/a1/logo/03.jpg' },
            { image: '/static/solution/a1/logo/04.jpg' },
            { image: '/static/solution/a1/logo/05.jpg' },
            { image: '/static/solution/a1/logo/06.jpg' },
            { image: '/static/solution/a1/logo/07.jpg' },
            { image: '/static/solution/a1/logo/08.jpg' },
            { image: '/static/solution/a1/logo/09.jpg' },
            { image: '/static/solution/a1/logo/10.jpg' },
            { image: '/static/solution/a1/logo/11.jpg' },
            { image: '/static/solution/a1/logo/12.jpg' },
            { image: '/static/solution/a1/logo/13.jpg' },
            { image: '/static/solution/a1/logo/14.jpg' },
            { image: '/static/solution/a1/logo/15.jpg' },
            { image: '/static/solution/a1/logo/16.jpg' },
            { image: '/static/solution/a1/logo/17.jpg' },
            { image: '/static/solution/a1/logo/18.jpg' },
            { image: '/static/solution/a1/logo/19.jpg' },
            { image: '/static/solution/a1/logo/20.jpg' },
            { image: '/static/solution/a1/logo/21.jpg' },
        ],
        title: '电动助力车解决方案',
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
                            {sections.map((section) => (
                                <div className="section" key={section.title}>
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
