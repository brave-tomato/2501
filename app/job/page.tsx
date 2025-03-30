'use client';
import HeroSection from '@/components/hero-section';
import TitleSection from '@/components/title-section';
import { useSetState } from 'ahooks';
import { Flex, GetProps, Input, Pagination, Tabs } from 'antd';
type SearchProps = GetProps<typeof Input.Search>;

import jobList from './data';

import styles from './styles.module.scss';

import { useState } from 'react';
import styled from 'styled-components';

// 定义样式
const StyledTabs = styled(Tabs)`
    .ant-tabs-nav-list {
        flex-direction: column;
        padding: 0 100px;
    }
    .ant-tabs-tab {
        padding: 6px 14px;
        // margin-bottom: 28px;
        font-size: 16px;
        width: auto;
        color: var(--custom-black);
    }
    .ant-tabs-left > .ant-tabs-nav .ant-tabs-tab,
    .ant-tabs-tab.ant-tabs-tab-active {
        background-color: var(--custom-green);
        color: white;
        font-size: 16px;
        border-radius: 30px;
        .ant-tabs-tab-btn {
            color: white;
        }
    }

    .ant-tabs-nav-list .ant-tabs-ink-bar {
        background: transparent;
    }
    // 去掉竖线的样式
    .ant-tabs-content-holder,
    .ant-tabs-left > .ant-tabs-content-holder {
        border-left: none;
    }
    // 鼠标移入
    .ant-tabs-nav-list .ant-tabs-tab:hover {
        color: var(--custonm-black);
    }
    .ant-tabs-nav-list .ant-tabs-tab-btn:active {
        color: var(--custom-green);
    }
`;

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
            <div className={styles['job-wrapper']} style={{ maxWidth: 1920, margin: '70px auto 0' }}>
                {/* 搜索条 */}
                <Flex align="center" gap={60} justify="center" style={{ marginBottom: 63 }}>
                    <div className={styles.title}>职位类型</div>
                    <div className={styles['input-box']}>
                        <Input.Search
                            allowClear
                            className={styles.customInput}
                            enterButton={<div className={styles['enter-button']}>搜索职位</div>}
                            prefix={
                                <img
                                    src="/images/job/icon_search@2x.png"
                                    width={20}
                                    height={20}
                                    style={{ marginRight: 12 }}
                                />
                            }
                            placeholder="搜索职位关键词"
                            size="large"
                            onSearch={onSearch}
                        />
                    </div>
                </Flex>
                {/* 左右布局 */}

                <Flex className={styles['jianli']} justify="center" style={{ width: '100%' }}>
                    <StyledTabs
                        activeKey={activeKey}
                        onChange={handleTabChange}
                        tabPosition="left"
                        items={tabItems.map((item) => ({
                            key: item.key,
                            label: item.label,
                        }))}
                    />
                    <Flex className={styles['job-list-wrapper']} gap={70} wrap>
                        {jobList.map((payload: any, index: number) => (
                            <Flex className={styles['list-item-box']} key={index} gap={16} vertical>
                                <Flex gap={6} vertical>
                                    {/* 标题 */}
                                    <div className={styles['job-title']}>{payload.jobTitle}</div>
                                    {/* 小内容 */}
                                    <Flex className={styles.subtitle} gap={16}>
                                        <Flex gap={4}>
                                            <img src="/images/job/icon_moeny@2x.png" style={{ width: 9, height: 9 }} />
                                            <span>{payload.salary}</span>
                                        </Flex>
                                        <Flex gap={4}>
                                            <img src="/images/job/icon_xueli@2x.png" style={{ width: 9, height: 9 }} />
                                            <span>{payload.education}</span>
                                        </Flex>
                                        <Flex gap={4}>
                                            <img
                                                src="/images/job/icon_address@2x.png"
                                                style={{ width: 9, height: 9 }}
                                            />
                                            <span>{payload.location}</span>
                                        </Flex>
                                    </Flex>
                                </Flex>
                                {/* 职位描述 */}
                                <Flex className={styles['list-item-content-box']} gap={8} vertical>
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
                                        style={{ width: 24, height: 24 }}
                                    />
                                </Flex>
                            </Flex>
                        ))}
                        <Flex align="center" style={{ width: '100%' }}>
                            <Flex justify="center" style={{ width: '100%' }}>
                                <Pagination
                                    defaultCurrent={state.currentPage}
                                    total={state.total}
                                    showSizeChanger={false}
                                    onChange={onChange}
                                />
                            </Flex>
                        </Flex>
                    </Flex>
                </Flex>
            </div>
        </div>
    );
};

export default JobPage;
