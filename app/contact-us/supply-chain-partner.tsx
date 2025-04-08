'use client';

import { TitleSmallSection } from '@/components/title-section';
import { Button, Checkbox, Col, Flex, Form, Input, Row } from 'antd';
import Link from 'next/link';
import React from 'react';
import styles from './styles.module.scss';

// 定义角色属性的选项数组
const roleOptions = [
    { value: 'cellMaterialSupplier', label: '电芯源材料商' },
    { value: 'productionEquipmentSupplier', label: '生产设备商' },
    { value: 'nonProductCategory', label: '非产品类（备注）' },
];

const SupplyChainPartner: React.FC = () => {
    const onFinish = (values: any) => {
        console.log('Form submitted:', values);
        // 这里可以添加实际的提交逻辑，比如发送到后端接口
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
                    <Form.Item className="space1" name="roleAttribute" label="角色属性" labelCol={{ flex: '200px' }}>
                        <Flex className={styles['checkbox-half']} align="center">
                            <Checkbox.Group className="checkbox-radio-box ">
                                {roleOptions.map((option) => (
                                    <Checkbox key={option.value} value={option.value}>
                                        {option.label}
                                    </Checkbox>
                                ))}
                            </Checkbox.Group>
                        </Flex>
                    </Form.Item>
                </Col>
                <Col span={11} offset={1}>
                    <Form.Item className="space1" name="companyName" label="公司名称" labelCol={{ flex: '200px' }}>
                        <Input placeholder="请输入公司名称" />
                    </Form.Item>
                </Col>

                <Col span={12}>
                    <Form.Item className="space1" name="name" label="姓名" labelCol={{ flex: '200px' }}>
                        <Input placeholder="请输入姓名" />
                    </Form.Item>
                </Col>
                <Col span={11} offset={1}>
                    <Form.Item className="space1" name="phone" label="电话" labelCol={{ flex: '200px' }}>
                        <Input placeholder="请输入电话" />
                    </Form.Item>
                </Col>

                <Col span={12}>
                    <Form.Item className="space1" name="jobPosition" label="职务" labelCol={{ flex: '200px' }}>
                        <Input placeholder="请输入职务" />
                    </Form.Item>
                </Col>
                <Col span={11} offset={1}>
                    <Form.Item className="space1" name="email" label="邮箱" labelCol={{ flex: '200px' }}>
                        <Input placeholder="请输入邮箱" />
                    </Form.Item>
                </Col>
            </Row>

            {/* 详细需求描述 */}
            <div style={{ marginBottom: 20, marginTop: 32 }}>
                <TitleSmallSection title="详细需求描述" />
            </div>
            <Row>
                <Col span={24}>
                    <Form.Item name="detailedDemandDescription" style={{ marginBottom: 0 }}>
                        <Input.TextArea
                            className={styles['textarea-box']}
                            placeholder="订单需求预估，期望交货时间，其他特殊需求等……"
                            maxLength={100}
                            style={{ height: 168, resize: 'none', borderRadius: 0 }}
                        />
                    </Form.Item>
                </Col>
            </Row>

            {/* 隐私声明 */}
            <Form.Item
                name="agreePrivacyStatement"
                valuePropName="checked"
                rules={[{ required: true, message: '请勾选同意隐私声明' }]}
                style={{ marginTop: 48 }}
            >
                <Checkbox className={styles['checkbox-content']}>
                    我已仔细阅读并同意<Link href={'/'}>隐私声明</Link>
                </Checkbox>
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 9, span: 7 }}>
                <Button className={styles['button-submit']} block htmlType="submit" type="primary" shape="round">
                    提交
                </Button>
            </Form.Item>
        </Form>
    );
};

export default SupplyChainPartner;
