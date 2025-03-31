'use client';
import { Space, Tabs } from 'antd';
import React, { useState } from 'react';
import styled from 'styled-components';

// 定义样式
const StyledTabs = styled(Tabs)`
    .ant-tabs-nav-list {
        flex-direction: column;
    }
    .ant-tabs-tab {
        padding: 10px 20px;
        margin-bottom: 10px;
    }
    .ant-tabs-tab.ant-tabs-tab-active {
        background-color: green;
        color: white;
        .ant-tabs-tab-btn {
            color: white;
        }
    }
    // 去掉竖线的样式
    .ant-tabs-left > .ant-tabs-content-holder {
        border-left: none;
    }
`;

// 定义 Tab 数据
const tabData = [
    {
        key: 'all-jobs',
        label: '全部职位',
        content: <div>这里是全部职位的相关内容。</div>,
    },
    {
        key: 'research',
        label: '研发类',
        content: <div>这里是研发类职位的相关内容。</div>,
    },
    {
        key: 'engineering',
        label: '工程技术类',
        content: <div>这里是工程技术类职位的相关内容。</div>,
    },
    {
        key: 'computer',
        label: '计算机类',
        content: <div>这里是计算机类职位的相关内容。</div>,
    },
    {
        key: 'production',
        label: '生产运营类',
        content: <div>这里是生产运营类职位的相关内容。</div>,
    },
    {
        key: 'marketing',
        label: '营销类',
        content: <div>这里是营销类职位的相关内容。</div>,
    },
    {
        key: 'functional',
        label: '职能类',
        content: <div>这里是职能类职位的相关内容。</div>,
    },
];

const CustomTab = () => {
    const [activeKey, setActiveKey] = useState(tabData[0].key);

    const handleTabChange = (key: any) => {
        setActiveKey(key);
    };

    return (
        <Space style={{ width: '100%' }}>
            <StyledTabs
                activeKey={activeKey}
                onChange={handleTabChange}
                tabPosition="left"
                items={tabData.map((item) => ({
                    key: item.key,
                    label: item.label,
                }))}
            />
            <div style={{ flex: 1, padding: '0 20px' }}>{tabData.find((item) => item.key === activeKey)?.content}</div>
        </Space>
    );
};

export default CustomTab;
