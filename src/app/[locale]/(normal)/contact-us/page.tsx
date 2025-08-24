'use client';

import { useI18n } from '@/locales/client';
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
    const t = useI18n();

    /**
     * States
     */
    const [state, setState] = useSetState({
        open: false,
    });

    const roles: any = [
        {
            key: 'demander',
            label: t('contact.demandSide'),
            component: Demander,
        },
        {
            key: 'media',
            label: t('contact.media'),
            component: Media,
        },
        {
            key: 'supplyChain',
            label: t('contact.supplyChain'),
            component: SupplyChainPartner,
        },
    ];

    const [activeKey, setActiveKey] = useState(roles[0].key);

    const handleTabChange = (key: any) => {
        setActiveKey(key);
    };
    const getActiveComponent = () => {
        const activeRole = roles.find((role: any) => role.key === activeKey);
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
                                    'cursor-pointer',
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
        </div>
    );
};

export default Page;
