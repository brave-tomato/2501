'use client';
import HeroSection from '@/components/hero-section';
import TitleSection from '@/components/title-section';
import { useSetState } from 'ahooks';
import { Col, ConfigProvider, Flex, GetProps, Grid, Input, Menu, MenuProps, Pagination, Row, Tabs } from 'antd';
type SearchProps = GetProps<typeof Input.Search>;

import jobList from './data';

import styles from './styles.module.scss';

import { getConf } from '@/utils';
import classNames from 'classnames';
import { useState } from 'react';

const tabItems = [
    {
        key: 'all-jobs',
        label: '全部职位',
    },
    {
        key: 'research',
        label: '研发类',
    },
    {
        key: 'engineering',
        label: '工程技术类',
    },
    {
        key: 'computer',
        label: '计算机类',
    },
    {
        key: 'production',
        label: '生产运营类',
    },
    {
        key: 'marketing',
        label: '营销类',
    },
    {
        key: 'functional',
        label: '职能类',
    },
];
/**
 * 页面：人才招聘
 */
const JobPage = () => {
    /**
     * Hooks
     */
    const conf = getConf(Grid.useBreakpoint());

    /**
     * States
     */
    const [state, setState] = useSetState<any>({
        currentPage: 1,
        total: 1000,
    });

    const onChange = (page: any, pageSize: any) => {
        console.log(page, pageSize, '---9999--page, pageSize');
    };

    const onSearch: SearchProps['onSearch'] = (value, _e, info) => console.log(info?.source, value);

    // const handleTabChange = (key: any) => {
    //     console.log('当前选中的标签:', key);
    //     // 这里可以添加更多自定义逻辑，比如根据选中标签加载对应数据等
    // };

    const [activeKey, setActiveKey] = useState(tabItems[0].key);

    const handleTabChange = (key: any) => {
        setActiveKey(key);
    };

    return (
        <div>
            <HeroSection src="/images/hero-section/job@2x.png">
                <TitleSection title="人才招聘" />
            </HeroSection>
            <div
                className={classNames('mw-1920', styles['job-wrapper'])}
                style={conf.xxxl ? { padding: `0 150px` } : {}}
            >
                {/* 搜索条 */}
                <Row style={{ marginBottom: 112 }}>
                    <Col span={3}>
                        <div className={styles.title}>职位类型</div>
                    </Col>
                    <Col span={1}></Col>
                    <Col span={20}>
                        <div className={styles['input-box']}>
                            <Input.Search
                                allowClear
                                className={styles.customInput}
                                enterButton={<div className={styles['enter-button']}>搜索职位</div>}
                                prefix={
                                    <img
                                        src="/images/job/icon_search@2x.png"
                                        width={32}
                                        height={32}
                                        style={{ marginRight: 32 }}
                                    />
                                }
                                placeholder="搜索职位关键词"
                                size="large"
                                onSearch={onSearch}
                            />
                        </div>
                    </Col>
                </Row>
                {/* 左右布局 */}
                <Row className={styles['jianli']}>
                    <Col span={3}>
                        <Flex className={styles['menu-wrapper']} gap={26} vertical>
                            {tabItems.map((item: any) => (
                                <div
                                    className={classNames(
                                        item.key === activeKey ? styles['active'] : '',
                                        styles['menu-item'],
                                    )}
                                    key={item.key}
                                    onClick={() => handleTabChange(item.key)}
                                >
                                    {item.label}
                                </div>
                            ))}
                        </Flex>
                    </Col>
                    <Col span={1}></Col>
                    <Col span={20} style={{ width: '100%', padding: '0 34px 0 0' }}>
                        <Row
                            className={styles['job-list-wrapper']}
                            id="grid-job-playground"
                            gutter={[68, 68]}
                            justify="space-around"
                        >
                            {jobList.map((payload: any, index: number) => (
                                <Col key={index} span={8}>
                                    <Flex className={styles['list-item-box']} gap={19} vertical>
                                        <Flex gap={25} vertical>
                                            {/* 标题 */}
                                            <div className={styles['job-title']}>{payload.jobTitle}</div>
                                            {/* 小内容 */}
                                            <Flex className={styles.subtitle} justify="space-between">
                                                <Flex gap={4}>
                                                    <img
                                                        src="/images/job/icon_moeny@2x.png"
                                                        style={{ width: 14, height: 14 }}
                                                    />
                                                    <span>{payload.salary}</span>
                                                </Flex>
                                                <Flex gap={4}>
                                                    <img
                                                        src="/images/job/icon_xueli@2x.png"
                                                        style={{ width: 14, height: 14 }}
                                                    />
                                                    <span>{payload.education}</span>
                                                </Flex>
                                                <Flex gap={4}>
                                                    <img
                                                        src="/images/job/icon_address@2x.png"
                                                        style={{ width: 14, height: 14 }}
                                                    />
                                                    <span>{payload.location}</span>
                                                </Flex>
                                            </Flex>
                                        </Flex>
                                        {/* 职位描述 */}
                                        <Flex className={styles['list-item-content-box']} gap={18} vertical>
                                            <div className={styles['job-title2']}>职位描述</div>
                                            <div
                                                className={styles['content']}
                                                dangerouslySetInnerHTML={{ __html: payload.description }}
                                            />
                                        </Flex>
                                        <Flex justify="end">
                                            <img
                                                className="cursor-pointer"
                                                src="/images/job/icon_more@2x.png"
                                                style={{ width: 38, height: 38 }}
                                            />
                                        </Flex>
                                    </Flex>
                                </Col>
                            ))}
                        </Row>
                        <Flex align="center" style={{ width: '100%', marginTop: 104 }}>
                            <Flex justify="center" style={{ width: '100%' }}>
                                <Pagination
                                    defaultCurrent={state.currentPage}
                                    total={state.total}
                                    showSizeChanger={false}
                                    onChange={onChange}
                                />
                            </Flex>
                        </Flex>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default JobPage;
