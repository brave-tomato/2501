import { Button, Checkbox, Col, Flex, Form, Input, Row } from 'antd';
import React from 'react';

import { TitleSmallSection } from '@/components/title-section';
import Link from 'next/link';
import styles from './styles.module.scss';

// 定义来函目的的选项数组
const purposeOptions = [
    { value: 'advertisingPlacement', label: '广告投放' },
    { value: 'interview', label: '采访' },
    { value: 'visit', label: '参观' },
    { value: 'event', label: '活动' },
    { value: 'other', label: '其他' },
];

const Media: React.FC = () => {
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
            name="media_form"
            initialValues={{}}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            style={{ padding: `40px 76px 52px` }}
        >
            <Row>
                <Col span={12}>
                    <Form.Item className="space1" name="mediaName" label="媒体名称" labelCol={{ flex: '200px' }}>
                        <Input placeholder="请输入媒体名称" />
                    </Form.Item>
                </Col>
                <Col span={11} offset={1}>
                    <Form.Item className="space1" name="mediaAddress" label="媒体地址" labelCol={{ flex: '200px' }}>
                        <Input placeholder="请输入媒体地址" />
                    </Form.Item>
                </Col>

                <Col span={12}>
                    <Form.Item className="space1" name="name" label="姓名" labelCol={{ flex: '200px' }}>
                        <Input placeholder="请输入姓名" />
                    </Form.Item>
                </Col>
                <Col span={11} offset={1}>
                    <Form.Item className="space1" name="jobTitle" label="职务" labelCol={{ flex: '200px' }}>
                        <Input placeholder="请输入职务" />
                    </Form.Item>
                </Col>

                <Col span={12}>
                    <Form.Item className="space1" name="workEmail" label="工作邮箱" labelCol={{ flex: '200px' }}>
                        <Input placeholder="请输入工作邮箱" />
                    </Form.Item>
                </Col>
                <Col span={11} offset={1}>
                    <Form.Item className="space1" name="phone" label="电话" labelCol={{ flex: '200px' }}>
                        <Input placeholder="请输入电话" />
                    </Form.Item>
                </Col>
            </Row>

            {/* 来函目的（改为 Checkbox 多选 ）*/}
            <div style={{ marginBottom: 20 }}>
                <TitleSmallSection title="来函目的" />
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

export default Media;
