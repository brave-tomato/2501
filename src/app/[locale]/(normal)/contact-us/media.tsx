import { Button, Checkbox, Col, Flex, Form, Input, Row } from 'antd';
import React from 'react';

import { TitleSmallSection } from '@/components/title-section';
import { useI18n } from '@/locales/client';
import Link from 'next/link';
import styles from './styles.module.scss';

const Media: React.FC<{
    onSubmit?: (values: any, formType: string) => Promise<void>;
    loading?: boolean;
}> = ({ onSubmit, loading = false }) => {
    const t = useI18n();

    // 定义来函目的的选项数组
    const purposeOptions = [
        { value: 'advertisingPlacement', label: t('contact.advertising') },
        { value: 'interview', label: t('contact.interview') },
        { value: 'visit', label: t('contact.visit') },
        { value: 'event', label: t('contact.activity') },
        { value: 'other', label: t('contact.other') },
    ];

    const onFinish = async (values: any) => {
        console.log('Media form submitted:', values);
        if (onSubmit) {
            await onSubmit(values, 'media');
        }
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Form submission failed:', errorInfo);
    };

    return (
        <Form
            className={styles['form-wrapper']}
            colon={false}
            name="media_form"
            initialValues={{}}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            style={{ padding: `40px 76px 52px` }}
        >
            <Row>
                <Col span={12}>
                    <Form.Item
                        className="space1"
                        name="mediaName"
                        label={t('contact.mediaName')}
                        labelCol={{ flex: '200px' }}
                    >
                        <Input />
                    </Form.Item>
                </Col>
                <Col span={11} offset={1}>
                    <Form.Item
                        className="space1"
                        name="mediaAddress"
                        label={t('contact.mediaAddress')}
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
                    <Form.Item
                        className="space1"
                        name="jobTitle"
                        label={t('contact.jobTitle')}
                        labelCol={{ flex: '200px' }}
                    >
                        <Input />
                    </Form.Item>
                </Col>

                <Col span={12}>
                    <Form.Item
                        className="space1"
                        name="workEmail"
                        label={t('contact.workEmail')}
                        labelCol={{ flex: '200px' }}
                    >
                        <Input />
                    </Form.Item>
                </Col>
                <Col span={11} offset={1}>
                    <Form.Item className="space1" name="phone" label={t('contact.phone')} labelCol={{ flex: '200px' }}>
                        <Input />
                    </Form.Item>
                </Col>
            </Row>

            {/* 来函目的（改为 Checkbox 多选 ）*/}
            <div style={{ marginBottom: 20 }}>
                <TitleSmallSection title={t('contact.purpose')} />
            </div>
            <Flex className={styles['checkbox-single']} align="center">
                <Form.Item name="purpose" style={{ marginBottom: 0 }}>
                    <Checkbox.Group className="checkbox-radio-box">
                        {purposeOptions.map((option) => (
                            <Checkbox key={option.value} value={option.value}>
                                {option.label}
                            </Checkbox>
                        ))}
                    </Checkbox.Group>
                </Form.Item>
            </Flex>
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

export default Media;
