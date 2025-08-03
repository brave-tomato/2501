'use client';

import { useI18n } from '@/locales/client';
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
        title: 'about.vision',
        description: 'about.visionDesc',
    },
    {
        title: 'about.mission',
        description: 'about.missionDesc',
    },
    {
        title: 'about.values',
        description: 'about.valuesDesc',
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
    const t = useI18n();

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
                                poster="/static/about-us/banner.jpg"
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
                                <StaggeredText
                                    style={{ margin: params.locale === 'zh' ? '0 12px' : '0 6px' }}
                                    text={t('about.banner')}
                                />
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
                                            <div className={styles.title}>{t(item.title)}</div>

                                            <div className={styles.description}>{t(item.description)}</div>
                                        </Flex>
                                    </Col>
                                ))}
                            </Row>
                        </div>

                        {/* 公司简介 */}
                        <div className={`section ${styles.intro}`}>
                            <Row align="middle" className={styles.bg}>
                                <Col offset={1} span={7}>
                                    <div className={styles.title}>{t('about.profile')}</div>

                                    <div className={styles.subtitle}>Profile</div>

                                    <div className={styles.description}>
                                        {t('about.p1')}
                                        <br />
                                        {t('about.p2')}
                                        <br />
                                        {t('about.p3')}
                                        <br />
                                        {t('about.p4')}
                                        <br />
                                        {t('about.p5')}
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
                                            src="/static/about-us/intro.png"
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'cover',
                                                cursor: 'pointer',
                                            }}
                                            wrapperStyle={{
                                                width: '100%',
                                                height: '100%',
                                            }}
                                        />

                                        <img
                                            alt=""
                                            src="/static/research/play.png"
                                            style={{
                                                position: 'absolute',
                                                top: '50%',
                                                left: '50%',
                                                transform: 'translate(-50%, -50%)',
                                                width: '100px',
                                                height: '100px',
                                                cursor: 'pointer',
                                            }}
                                        ></img>
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
