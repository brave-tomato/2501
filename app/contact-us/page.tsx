'use client';

import { EnvironmentOutlined, MailOutlined, PhoneOutlined } from '@ant-design/icons';
import { useSetState } from 'ahooks';
import { Col, Flex, Form, Input, Modal, Result, Row } from 'antd';

/**
 * Components
 */
import AspectRatio from '@/components/aspect-ratio';
import HeroSection from '@/components/hero-section';
import TitleSection from '@/components/title-section';

/**
 * Styles
 */
import styles from './styles.module.scss';

const Page = () => {
    /**
     * States
     */
    const [state, setState] = useSetState({
        open: false,
    });

    return (
        <div style={{ maxWidth: '1920px', margin: '0 auto' }}>
            <HeroSection src="/images/hero-section/contact-us@2x.png">
                <TitleSection title="联系我们" />
            </HeroSection>

            <Row style={{ padding: '84px 80px' }}>
                <Col span={12}>
                    <AspectRatio ratio={720 / 576}>
                        <img
                            alt=""
                            src="/images/contact-us/map.jpg"
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                            }}
                        />
                    </AspectRatio>
                </Col>

                <Col span={12}>
                    <AspectRatio ratio={720 / 576}>
                        <Flex
                            align="center"
                            justify="center"
                            style={{ width: '100%', height: '100%', backgroundColor: '#F7F7F7' }}
                        >
                            <Flex vertical>
                                <div className={styles.title1}>北京卫蓝新能源科技股份有限公司</div>

                                <Flex className={styles.info1} gap={5} vertical>
                                    <span>
                                        <EnvironmentOutlined style={{ marginRight: 10 }} />
                                        北京市房山区普安路91号
                                    </span>

                                    <span>
                                        <PhoneOutlined style={{ marginRight: 10 }} />
                                        010-82150066
                                    </span>

                                    <span>
                                        <MailOutlined style={{ marginRight: 10 }} />
                                        info@welion.cn
                                    </span>
                                </Flex>
                            </Flex>
                        </Flex>
                    </AspectRatio>
                </Col>
            </Row>

            {/* 在线留言 */}
            <div className={styles.btn1} onClick={() => setState({ open: true })}>
                <img alt="" src="/images/contact-us/btn.png" />

                <span>
                    <span style={{ letterSpacing: '0.25em' }}>在线留</span>言
                </span>
            </div>

            <Modal
                className={styles.modal}
                closeIcon={null}
                footer={null}
                open={state.open}
                width={1074}
                onCancel={() => setState({ open: false })}
            >
                <div className={styles.title}>欢迎在线留言</div>

                <div className={styles.subtitle}>Welcome to Leave a Message Online</div>

                <Form></Form>

                <Result status="404" title="重构中" />
            </Modal>
        </div>
    );
};

export default Page;
