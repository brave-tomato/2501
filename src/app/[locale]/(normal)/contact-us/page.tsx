'use client';

import { useI18n } from '@/locales/client';
import { EnvironmentOutlined, MailOutlined, PhoneOutlined } from '@ant-design/icons';
import { useSetState } from 'ahooks';
import { Col, Flex, Form, Grid, Input, Modal, Result, Row, message } from 'antd';

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
        submitLoading: false,
    });

    // 通用的表单提交处理函数
    const handleFormSubmit = async (values: any, formType: string) => {
        try {
            setState({ submitLoading: true });

            const apiUrl = process.env.NEXT_PUBLIC_API_URL || '';
            const response = await fetch(`${apiUrl}/v1/messages`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...values,
                    form_type: formType, // 标识表单类型
                }),
            });

            const result = await response.json();

            if (response.ok) {
                message.success('提交成功！');
                setState({ open: true }); // 显示成功弹窗
            } else {
                message.error(result.message || '提交失败，请重试');
            }
        } catch (error) {
            console.error('提交失败:', error);
            message.error('网络错误，请重试');
        } finally {
            setState({ submitLoading: false });
        }
    };

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
                <div>
                    {' '}
                    {ActiveComponent && <ActiveComponent onSubmit={handleFormSubmit} loading={state.submitLoading} />}
                </div>
            </div>

            {/* 成功提交弹窗 */}
            <Modal
                title=""
                open={state.open}
                onCancel={() => setState({ open: false })}
                footer={null}
                centered
                width={400}
            >
                <Result status="success" title="提交成功" subTitle="我们已收到您的留言，将尽快与您联系！" />
            </Modal>
        </div>
    );
};

export default Page;
