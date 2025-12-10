import { TitleSmallSection } from '@/components/title-section';
import { useI18n } from '@/locales/client';
import { Button, Checkbox, Col, Flex, Form, Input, Radio, Row, Select } from 'antd';
import Link from 'next/link';
import React from 'react';

import styles from './styles.module.scss';

const { Option } = Select;

const Demander2: React.FC<{
    onSubmit?: (values: any, formType: string) => Promise<void>;
    loading?: boolean;
}> = ({ onSubmit, loading = false }) => {
    const t = useI18n();

    // 定义各个 Checkbox.Group 的选项数组
    const passengerApplicationOptions = [
        { value: 'pureElectricPassengerCar', label: t('contact.pureElectricCar') },
        { value: 'pureElectricOperationalPassengerCar', label: t('contact.operationalCar') },
        { value: 'hybridPowerPassengerCar', label: t('contact.hybridCar') },
        { value: 'electricYacht', label: t('contact.electricYacht') },
    ];

    const commercialApplicationOptions = [
        { value: 'passengerBus', label: t('contact.passengerBus') },
        { value: 'urbanDelivery', label: t('contact.urbanDelivery') },
        { value: 'heavyLoadTruck', label: t('contact.heavyTruck') },
        { value: 'urbanRoadCleaning', label: t('contact.roadCleaning') },
        { value: 'engineeringMachinery', label: t('contact.engineeringVehicle') },
        { value: 'electricTwoWheeler', label: t('contact.electricTwoWheeler') },
        { value: 'electricFreightWheel', label: t('contact.electricFreightShip') },
        { value: 'specialApplicationAirportVehicle', label: t('contact.specialApplication') },
    ];

    const lowAltitudeEconomyApplicationOptions = [
        { value: 'droneSolution', label: t('contact.droneSolution') },
        { value: 'eVTOLSolution', label: t('contact.evtolSolution') },
    ];

    const energyStorageApplicationOptions = [
        { value: 'powerGenerationSide', label: t('contact.powerSide') },
        { value: 'gridSide', label: t('contact.gridSide') },
        { value: 'powerConsumptionSide', label: t('contact.consumptionSide') },
    ];

    const otherBusinessOptions = [{ value: 'otherBusinessValue', label: t('contact.otherBusiness') }];

    // 定义应用地区的选项数组
    const applicationRegionOptions = [{ value: t('contact.chinaMainland'), label: t('contact.chinaMainland') }];

    const onFinish = async (values: any) => {
        console.log('Demander form submitted:', values);
        if (onSubmit) {
            await onSubmit(values, 'demander');
        }
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
                applicationRegion: t('contact.chinaMainland'),
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            style={{ padding: `40px 76px 52px` }}
        >
            <Row>
                {/* 第一行表单字段 */}
                <Col span={8}>
                    <Form.Item
                        className={styles['space1']}
                        name="companyName"
                        label={t('contact.companyName')}
                        labelCol={{ flex: '200px' }}
                    >
                        <Input />
                    </Form.Item>
                </Col>
                <Col span={7} offset={1}>
                    <Form.Item
                        className={styles['space1']}
                        name="jobPosition"
                        label={t('contact.jobPosition')}
                        labelCol={{ flex: '200px' }}
                    >
                        <Input />
                    </Form.Item>
                </Col>
                <Col span={7} offset={1}>
                    <Form.Item
                        className={styles['space1']}
                        name="officialWebsite"
                        label={t('contact.officialWebsite')}
                        labelCol={{ flex: '200px' }}
                    >
                        <Input />
                    </Form.Item>
                </Col>

                {/* 第二行表单字段 */}
                <Col span={8}>
                    <Form.Item
                        className={styles['space1']}
                        name="name"
                        label={t('contact.name')}
                        labelCol={{ flex: '200px' }}
                    >
                        <Input />
                    </Form.Item>
                </Col>
                <Col span={7} offset={1}>
                    <Form.Item
                        className={styles['space1']}
                        name="phone"
                        label={t('contact.phone')}
                        labelCol={{ flex: '200px' }}
                    >
                        <Input />
                    </Form.Item>
                </Col>
                <Col span={7} offset={1}>
                    <Form.Item
                        className={styles['space1']}
                        name="email"
                        label={t('contact.email')}
                        labelCol={{ flex: '200px' }}
                    >
                        <Input />
                    </Form.Item>
                </Col>
            </Row>

            {/* 应用场景选择部分 */}
            <div style={{ marginBottom: 20 }}>
                <TitleSmallSection title={t('contact.applicationScenario')} />
            </div>
            <Row>
                <Col span={24}>
                    <Form.Item
                        className={styles['space2']}
                        name="passengerApplication"
                        label={t('contact.passengerApplications')}
                        labelCol={{ flex: '280px' }}
                    >
                        <Form.Item className={styles['checkbox-half']}>
                            <Checkbox.Group className="checkbox-radio-box ">
                                {passengerApplicationOptions.map((option) => (
                                    <Checkbox key={option.value} value={option.value}>
                                        {option.label}
                                    </Checkbox>
                                ))}
                            </Checkbox.Group>
                        </Form.Item>
                    </Form.Item>
                </Col>
                <Col span={24}>
                    <Form.Item
                        className={styles['space2']}
                        name="commercialApplication"
                        label={t('contact.commercialApplications')}
                        labelCol={{ flex: '280px' }}
                    >
                        <Form.Item className={styles['checkbox-half']}>
                            <Checkbox.Group className="checkbox-radio-box ">
                                {commercialApplicationOptions.map((option) => (
                                    <Checkbox key={option.value} value={option.value}>
                                        {option.label}
                                    </Checkbox>
                                ))}
                            </Checkbox.Group>
                        </Form.Item>
                    </Form.Item>
                </Col>
                <Col span={24}>
                    <Form.Item
                        className="no-spacing"
                        name="lowAltitudeEconomyApplication"
                        label={t('contact.lowAltitudeApplications')}
                        labelCol={{ flex: '280px' }}
                    >
                        <Form.Item className={styles['checkbox-half']}>
                            <Checkbox.Group className="checkbox-radio-box ">
                                {lowAltitudeEconomyApplicationOptions.map((option) => (
                                    <Checkbox key={option.value} value={option.value}>
                                        {option.label}
                                    </Checkbox>
                                ))}
                            </Checkbox.Group>
                        </Form.Item>
                    </Form.Item>
                </Col>

                <Col span={12}>
                    <Form.Item
                        className={styles['space2']}
                        name="energyStorageApplication"
                        label={t('contact.energyStorageApplications')}
                        labelCol={{ flex: '280px' }}
                    >
                        <Form.Item className={styles['checkbox-half']}>
                            <Checkbox.Group className="checkbox-radio-box ">
                                {energyStorageApplicationOptions.map((option) => (
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
                        className={styles['space2']}
                        name="otherBusiness"
                        label={t('contact.otherBusiness')}
                        labelCol={{ flex: '200px' }}
                    >
                        <Form.Item className={styles['checkbox-half']}>
                            <Checkbox.Group className="checkbox-radio-box ">
                                {otherBusinessOptions.map((option) => (
                                    <Checkbox key={option.value} value={option.value}>
                                        {option.label}
                                    </Checkbox>
                                ))}
                            </Checkbox.Group>
                        </Form.Item>
                    </Form.Item>
                </Col>
            </Row>

            {/* 详细需求描述 */}
            <div style={{ marginBottom: 20 }}>
                <TitleSmallSection title={t('contact.demandDescription')} />
            </div>
            <Row>
                <Col span={24}>
                    <Form.Item name="detailedDemandDescription">
                        <Input.TextArea
                            className={styles['textarea-box']}
                            placeholder={t('contact.orderEstimate')}
                            maxLength={100}
                            style={{ height: 168, resize: 'none', borderRadius: 0 }}
                        />
                    </Form.Item>
                </Col>
            </Row>

            {/* 应用地区 */}
            <Row gutter={34} align="middle">
                <Col>
                    <TitleSmallSection title={t('contact.applicationArea')} />
                </Col>
                <Col>
                    <Form.Item name="applicationRegion" style={{ marginBottom: 0 }}>
                        <Select className={styles['select-box']} placeholder={t('contact.applicationArea')}>
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

export default Demander2;
