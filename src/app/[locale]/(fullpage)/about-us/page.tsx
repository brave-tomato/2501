'use client';

import ReactFullpage from '@fullpage/react-fullpage';
import { Col, Flex, Image, Row } from 'antd';
import classNames from 'classnames';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

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
     * States
     */
    const [active, setActive] = useState(false);

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
            <Header active={active} locale={params.locale as string} />

            <ReactFullpage
                beforeLeave={(_, destination) => {
                    setActive([2, 3].includes(destination.index));
                }}
                credits={{
                    enabled: false,
                }}
                render={() => (
                    <ReactFullpage.Wrapper>
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
                                <source src="https://files.welion.asia/about-us/banner.mp4" type="video/mp4" />
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
                                                            src={`https://files.welion.asia/about-us/intro_${params.locale || 'zh'}.mp4`}
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

                        <div className="section fp-auto-height">
                            <Footer />
                        </div>
                    </ReactFullpage.Wrapper>
                )}
            />
        </>
    );
};
