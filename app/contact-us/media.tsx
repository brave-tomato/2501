import { Button, Checkbox, Form, Input, TextArea } from 'antd';
import React from 'react';

const { Item } = Form;

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
            name="media_form"
            labelCol={{
                span: 8,
            }}
            wrapperCol={{
                span: 16,
            }}
            initialValues={{}}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
        >
            {/* 左侧表单字段 */}
            <Item name="mediaName" label="媒体名称" rules={[{ required: true, message: '请输入媒体名称' }]}>
                <Input placeholder="请输入媒体名称" />
            </Item>
            <Item name="name" label="姓名" rules={[{ required: true, message: '请输入姓名' }]}>
                <Input placeholder="请输入姓名" />
            </Item>
            <Item
                name="workEmail"
                label="工作邮箱"
                rules={[{ required: true, message: '请输入工作邮箱', type: 'email' }]}
            >
                <Input placeholder="请输入工作邮箱" />
            </Item>
            {/* 右侧表单字段 */}
            <Item name="mediaAddress" label="媒体地址" rules={[{ required: false }]}>
                <Input placeholder="请输入媒体地址" />
            </Item>
            <Item name="jobTitle" label="职务" rules={[{ required: false }]}>
                <Input placeholder="请输入职务" />
            </Item>
            <Item name="phone" label="电话" rules={[{ required: true, message: '请输入电话' }]}>
                <Input placeholder="请输入电话" />
            </Item>
            {/* 来函目的（改为 Checkbox 多选 ）*/}
            <Item name="purpose" label="来函目的">
                <Checkbox.Group>
                    {purposeOptions.map((option) => (
                        <Checkbox key={option.value} value={option.value}>
                            {option.label}
                        </Checkbox>
                    ))}
                </Checkbox.Group>
            </Item>
            {/* 详细需求描述 */}
            <Item name="detailedDemandDescription" label="详细需求描述" rules={[{ required: false }]}>
                <Input.TextArea placeholder="订单需求预估，期望交货时间，其他特殊需求等……" />
            </Item>
            {/* 隐私声明 */}
            <Item
                name="agreePrivacyStatement"
                valuePropName="checked"
                rules={[{ required: true, message: '请勾选同意隐私声明' }]}
            >
                <Checkbox>我已仔细阅读并同意隐私声明</Checkbox>
            </Item>
            <Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                    提交
                </Button>
            </Item>
        </Form>
    );
};

export default Media;
