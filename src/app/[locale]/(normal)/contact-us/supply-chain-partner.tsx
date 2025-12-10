'use client';

import { TitleSmallSection } from '@/components/title-section';
import { useI18n } from '@/locales/client';
import { Button, Checkbox, Col, Flex, Form, Input, Row } from 'antd';
import Link from 'next/link';
import React from 'react';
import styles from './styles.module.scss';

const SupplyChainPartner: React.FC<{
    onSubmit?: (values: any, formType: string) => Promise<void>;
    loading?: boolean;
}> = ({ onSubmit, loading = false }) => {
    const t = useI18n();

    // 定义角色属性的选项数组
    const roleOptions = [
        { value: 'cellMaterialSupplier', label: t('contact.materialSupplier') },
        { value: 'productionEquipmentSupplier', label: t('contact.equipmentSupplier') },
        { value: 'nonProductCategory', label: t('contact.nonProductCategory') },
    ];

    const onFinish = async (values: any) => {
        console.log('SupplyChainPartner form submitted:', values);
        if (onSubmit) {
            await onSubmit(values, 'supply_chain');
        }
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Form submission failed:', errorInfo);
    };

    return (
        <Form
            className={styles['form-wrapper']}
            colon={false}
            name="supplyChainPartner_form"
            initialValues={{}}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            style={{ padding: `40px 76px 52px` }}
        >
            <Row>
                <Col span={12}>
                    <Form.Item
                        className="space1"
                        name="roleAttribute"
                        label={t('contact.roleAttribute')}
                        labelCol={{ flex: '200px' }}
                    >
                        <Form.Item className={styles['checkbox-half']}>
                            <Checkbox.Group className="checkbox-radio-box ">
                                {roleOptions.map((option) => (
                                    <Checkbox key={option.value} value={option.value}>
                                        {option.label}
                                    </Checkbox>
                                ))}
                            </Checkbox.Group>
                        </Form.Item>
                    </Form.Item>
                </Col>
                <Col span={11} offset={1}>
                    <Form.Item
                        className="space1"
                        name="companyName"
                        label={t('contact.companyName')}
                        labelCol={{ flex: '200px' }}
                    >
                        <Input />
                    </Form.Item>
                </Col>

                <Col span={12}>
                    <Form.Item className="space1" name="name" label={t('contact.name')} labelCol={{ flex: '200px' }}>
                        <Input />
                    </Form.Item>
                </Col>
                <Col span={11} offset={1}>
                    <Form.Item className="space1" name="phone" label={t('contact.phone')} labelCol={{ flex: '200px' }}>
                        <Input />
                    </Form.Item>
                </Col>

                <Col span={12}>
                    <Form.Item
                        className="space1"
                        name="jobPosition"
                        label={t('contact.position')}
                        labelCol={{ flex: '200px' }}
                    >
                        <Input />
                    </Form.Item>
                </Col>
                <Col span={11} offset={1}>
                    <Form.Item className="space1" name="email" label={t('contact.email')} labelCol={{ flex: '200px' }}>
                        <Input />
                    </Form.Item>
                </Col>
            </Row>

            {/* 详细需求描述 */}
            <div style={{ marginBottom: 20, marginTop: 32 }}>
                <TitleSmallSection title={t('contact.demandDescription')} />
            </div>
            <Row>
                <Col span={24}>
                    <Form.Item name="detailedDemandDescription" style={{ marginBottom: 0 }}>
                        <Input.TextArea
                            className={styles['textarea-box']}
                            maxLength={100}
                            placeholder={t('contact.orderEstimate')}
                            style={{ height: 168, resize: 'none', borderRadius: 0 }}
                        />
                    </Form.Item>
                </Col>
            </Row>

            {/* 隐私声明 */}
            <Form.Item
                name="agreePrivacyStatement"
                valuePropName="checked"
                rules={[{ required: true, message: t('contact.privacyStatementError') }]}
                style={{ marginTop: 48 }}
            >
                <Checkbox className={styles['checkbox-content']}>
                    {t('contact.privacyStatement')}
                    <Link href={'/'}></Link>
                </Checkbox>
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 9, span: 7 }}>
                <Button
                    className={styles['button-submit']}
                    block
                    htmlType="submit"
                    type="primary"
                    shape="round"
                    loading={loading}
                >
                    {t('contact.submit')}
                </Button>
            </Form.Item>
        </Form>
    );
};

export default SupplyChainPartner;
