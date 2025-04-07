import { TitleSmallSection } from '@/components/title-section';
import { Button, Checkbox, Col, Flex, Form, Input, Radio, Row, Select } from 'antd';
import Link from 'next/link';
import React from 'react';

import styles from './styles.module.scss';

const { Option } = Select;

// 定义各个 Radio.Group 的选项数组
const passengerApplicationOptions = [
    { value: 'pureElectricPassengerCar', label: '纯电乘用车' },
    { value: 'pureElectricOperationalPassengerCar', label: '纯电运营类乘用车' },
    { value: 'hybridPowerPassengerCar', label: '混动力乘用车' },
    { value: 'electricYacht', label: '电动游艇' },
];

const commercialApplicationOptions = [
    { value: 'passengerBus', label: '客运大巴' },
    { value: 'urbanDelivery', label: '城市配送' },
    { value: 'heavyLoadTruck', label: '重型运载货车' },
    { value: 'urbanRoadCleaning', label: '城市道路清洁' },
    { value: 'engineeringMachinery', label: '工程机械车' },
    { value: 'electricTwoWheeler', label: '电动两轮车' },
    { value: 'electricFreightWheel', label: '电动货运轮' },
    { value: 'specialApplicationAirportVehicle', label: '特种应用（机场用车）' },
];

const lowAltitudeEconomyApplicationOptions = [
    { value: 'droneSolution', label: '无人机解决方案' },
    { value: 'eVTOLSolution', label: 'eVTOL解决方案' },
];

const energyStorageApplicationOptions = [
    { value: 'powerGenerationSide', label: '发电侧' },
    { value: 'gridSide', label: '电网侧' },
    { value: 'powerConsumptionSide', label: '用电侧' },
];

const otherBusinessOptions = [{ value: 'otherBusinessValue', label: '其他业务' }];

// 定义应用地区的选项数组
const applicationRegionOptions = [
    { value: '中国大陆', label: '中国大陆' },
    // 可根据实际情况添加更多选项
    { value: '中国香港', label: '中国香港' },
    { value: '中国澳门', label: '中国澳门' },
    { value: '中国台湾', label: '中国台湾' },
];

const Demander = () => {
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
            name="my_form"
            initialValues={{
                // 可根据需求设置初始值
                applicationRegion: '中国大陆',
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            style={{ padding: `40px 76px 0` }}
        >
            <Row>
                {/* 第一行表单字段 */}
                <Col span={8}>
                    <Form.Item
                        className={styles['space1']}
                        name="companyName"
                        label="公司名称"
                        labelCol={{ flex: '200px' }}
                    >
                        <Input />
                    </Form.Item>
                </Col>
                <Col span={7} offset={1}>
                    <Form.Item
                        className={styles['space1']}
                        name="jobPosition"
                        label="职位"
                        labelCol={{ flex: '200px' }}
                    >
                        <Input />
                    </Form.Item>
                </Col>
                <Col span={7} offset={1}>
                    <Form.Item
                        className={styles['space1']}
                        name="officialWebsite"
                        label="官方网站"
                        labelCol={{ flex: '200px' }}
                    >
                        <Input />
                    </Form.Item>
                </Col>

                {/* 第二行表单字段 */}
                <Col span={8}>
                    <Form.Item className={styles['space1']} name="name" label="姓名" labelCol={{ flex: '200px' }}>
                        <Input />
                    </Form.Item>
                </Col>
                <Col span={7} offset={1}>
                    <Form.Item className={styles['space1']} name="phone" label="电话" labelCol={{ flex: '200px' }}>
                        <Input />
                    </Form.Item>
                </Col>
                <Col span={7} offset={1}>
                    <Form.Item className={styles['space1']} name="email" label="邮箱" labelCol={{ flex: '200px' }}>
                        <Input />
                    </Form.Item>
                </Col>
            </Row>

            {/* 应用场景选择部分 */}
            <div style={{ marginBottom: 20 }}>
                <TitleSmallSection title="应用场景选择" />
            </div>
            <Row>
                <Col span={24}>
                    <Form.Item
                        className={styles['space2']}
                        name="passengerApplication"
                        label="乘用类应用"
                        labelCol={{ flex: '200px' }}
                        valuePropName="checked"
                    >
                        <Radio.Group className={styles['radio-wrapper']}>
                            {passengerApplicationOptions.map((option) => (
                                <Radio key={option.value} value={option.value}>
                                    {option.label}
                                </Radio>
                            ))}
                        </Radio.Group>
                    </Form.Item>
                </Col>
                <Col span={24}>
                    <Form.Item
                        className={styles['space2']}
                        name="commercialApplication"
                        label="商用类应用"
                        labelCol={{ flex: '200px' }}
                        valuePropName="checked"
                    >
                        <Radio.Group className={styles['radio-wrapper']}>
                            {commercialApplicationOptions.map((option) => (
                                <Radio key={option.value} value={option.value}>
                                    {option.label}
                                </Radio>
                            ))}
                        </Radio.Group>
                    </Form.Item>
                </Col>
                <Col span={24}>
                    <Form.Item
                        name="lowAltitudeEconomyApplication"
                        label="低空经济类应用"
                        labelCol={{ flex: '200px' }}
                        valuePropName="checked"
                    >
                        <Radio.Group className={styles['radio-wrapper']}>
                            {lowAltitudeEconomyApplicationOptions.map((option) => (
                                <Radio key={option.value} value={option.value}>
                                    {option.label}
                                </Radio>
                            ))}
                        </Radio.Group>
                    </Form.Item>
                </Col>

                <Col span={12}>
                    <Form.Item
                        className={styles['space2']}
                        name="energyStorageApplication"
                        label="储能应用"
                        labelCol={{ flex: '200px' }}
                        valuePropName="checked"
                    >
                        <Radio.Group className={styles['radio-wrapper']}>
                            {energyStorageApplicationOptions.map((option) => (
                                <Radio key={option.value} value={option.value}>
                                    {option.label}
                                </Radio>
                            ))}
                        </Radio.Group>
                    </Form.Item>
                </Col>
                <Col span={11} offset={1}>
                    <Form.Item
                        className={styles['space2']}
                        name="otherBusiness"
                        label="其他业务"
                        labelCol={{ flex: '200px' }}
                        valuePropName="checked"
                    >
                        <Radio.Group className={styles['radio-wrapper']}>
                            {otherBusinessOptions.map((option) => (
                                <Radio key={option.value} value={option.value}>
                                    {option.label}
                                </Radio>
                            ))}
                        </Radio.Group>
                    </Form.Item>
                </Col>
            </Row>

            {/* 详细需求描述 */}
            <div style={{ marginBottom: 20 }}>
                <TitleSmallSection title="详细需求描述" />
            </div>
            <Row>
                <Col span={24}>
                    <Form.Item name="detailedDemandDescription">
                        <Input.TextArea placeholder="订单需求预估，期望交货时间，其他特殊需求等……" />
                    </Form.Item>
                </Col>
            </Row>

            {/* 应用地区 */}
            <Row>
                <Col>
                    <TitleSmallSection title="应用地区" />
                </Col>
                <Col>
                    <Form.Item name="applicationRegion">
                        <Select placeholder="请选择应用地区">
                            {applicationRegionOptions.map((option) => (
                                <Option key={option.value} value={option.value}>
                                    {option.label}
                                </Option>
                            ))}
                        </Select>
                    </Form.Item>
                </Col>
            </Row>

            {/* 隐私声明 */}
            <Form.Item
                name="agreePrivacyStatement"
                valuePropName="checked"
                rules={[{ required: true, message: '请勾选同意隐私声明' }]}
            >
                <Checkbox>
                    我已仔细阅读并同意<Link href={'/'}>隐私声明</Link>
                </Checkbox>
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 9, span: 7 }} style={{ backgroundColor: 'pink' }}>
                <Button block htmlType="submit" type="primary" shape="round">
                    提交
                </Button>
            </Form.Item>
        </Form>
    );
};

export default Demander;
