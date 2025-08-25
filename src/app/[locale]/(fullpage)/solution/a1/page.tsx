'use client';

import { useI18n } from '@/locales/client';
import enTranslations from '@/locales/en';
import zhTranslations from '@/locales/zh';
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

export default () => {
    /**
     * Params
     */
    const params = useParams();
    const t = useI18n();
    const locale = params.locale as string;

    /**
     * Constants - Using direct translation imports
     */
    const translations = locale === 'zh' ? zhTranslations : enTranslations;
    const solutions = translations.applications.solutions;

    const sections = [
        {
            title: t('solutionElectricVehicleTitle'),
            features: solutions.electricVehicleSolution?.features || [],
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
            ],
        },
        {
            title: t('solutionElectricBoatTitle'),
            features: solutions.electricBoatSolution?.features || [],
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
            ],
        },
        {
            title: t('solutionElectricYachtTitle'),
            features: solutions.electricYachtSolution?.features || [],
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
            ],
        },
        {
            title: t('solutionConstructionMachineryTitle'),
            features: solutions.constructionMachinerySolution?.features || [],
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
            ],
        },
        {
            title: t('solutionElectricMotorcycleTitle'),
            features: solutions.electricMotorcycleSolution?.features || [],
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
            ],
        },
        {
            title: t('solutionElectricBikeTitle'),
            features: solutions.electricBikeSolution?.features || [],
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
            ],
        },
    ]; /**
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
                                                {section.features.map((feature: any, index: number) => (
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
                                                    {section.logo.map((logo: any, index: number) => (
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
