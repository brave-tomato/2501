'use client';

import { EnvironmentOutlined, MailOutlined, PhoneOutlined } from '@ant-design/icons';
import { useSetState } from 'ahooks';
import { Col, Flex, Form, Grid, Input, Modal, Result, Row } from 'antd';

/**
 * Components
 */
import AspectRatio from '@/components/aspect-ratio';
import HeroSection from '@/components/hero-section';
import TitleSection from '@/components/title-section';

/**
 * Styles
 */
import { getConf } from '@/utils';
import classNames from 'classnames';
import { useState } from 'react';
import Demander from './demander';
import Media from './media';
import styles from './styles.module.scss';
import SupplyChainPartner from './supply-chain-partner';

const Page = () => {
    /**
     * Hooks
     */
    const conf = getConf(Grid.useBreakpoint());

    /**
     * States
     */
    const [state, setState] = useSetState({
        open: false,
    });

    const roles: any = [
        {
            key: 'demander',
            label: '我是需求方',
            component: Demander,
        },
        {
            key: 'media',
            label: '我是媒体',
            component: Media,
        },
        {
            key: 'supplyChainPartner',
            label: '我是供应链伙伴',
            component: SupplyChainPartner,
        },
    ];

    const [activeKey, setActiveKey] = useState(roles[0].key);

    const handleTabChange = (key: any) => {
        setActiveKey(key);
    };
    const getActiveComponent = () => {
        const activeRole = roles.find((role: any) => role.key === activeKey);
        console.log(activeRole, '===activeRole===');
        return activeRole ? activeRole.component : null;
    };

    const ActiveComponent = getActiveComponent();
    return (
        <div>
            <HeroSection src="/images/hero-section/contact-us@2x.png">
                <TitleSection title="联系我们" />
            </HeroSection>

            <div className="mw-1920" style={conf.xxxl ? { padding: `0 130px`, marginTop: 104 } : { marginTop: 104 }}>
                <Flex vertical>
                    <div className={styles.title}>欢迎在线留言</div>
                    <div className={styles.subtitle}>Welcome to Leave a Message Online</div>
                </Flex>
                {/* tab */}
                <Row className={styles['tab-wrapper']}>
                    {roles.map((item: any) => (
                        <Col key={item.key} span={8}>
                            <Flex
                                className={classNames(
                                    item.key === activeKey ? styles['active'] : '',
                                    styles['tabname'],
                                )}
                                align="center"
                                justify="center"
                                onClick={() => handleTabChange(item.key)}
                            >
                                {item.label}
                            </Flex>
                        </Col>
                    ))}
                </Row>
                <div> {ActiveComponent && <ActiveComponent />}</div>
            </div>

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
