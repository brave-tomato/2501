'use client';

import { useState } from 'react';

/**
 * Styles
 */
import IndexVideo from '@/components/index-video';
import NewsSection from '@/components/news-section';
import { Flex, Space } from 'antd';

const newsList: any[] = [
    {
        id: 1,
        url: '/images/indexpage/news_bg1@2x.png',
        nav: '综合要闻',
        date: '2025-02-22',
        title: '卫蓝新能源与钇威科技签署战略合作协议',
        content:
            '2024年4月22日，北京卫蓝新能源科技股份有限公司与钇威汽车科技有限公司在钇威汽车科技合肥签署了战路合作协议。2024年4月22日，北京卫蓝新能源科技股份有限公司与钇威汽车科技有限公司在钇威汽车科技合肥签署了战路合作协议。2024年4月22日，北京卫蓝新能源科技股份有限公司与钇威汽车科技有限公司在钇威汽车科技合肥签署了战路合作协议。2024年4月22日，北京卫蓝新能源科技股份有限公司与钇威汽车科技有限公司在钇威汽车科技合肥签署了战路合作协议。',
        styleConfig: {
            newsBox: ' bg-customblue bg-opacity-95',
            dateBox: 'text-white',
            titleColor: 'text-green-500',
            contentBox: 'text-white',
        },
    },
    {
        id: 2,
        url: '/images/indexpage/news_bg1@2x.png',

        nav: '企业动态',
        date: '2025-02-22',
        title: '卫蓝新能源与钇威科技签署战略合作协议',
        content:
            '2024年4月22日，北京卫蓝新能源科技股份有限公司与钇威汽车科技有限公司在钇威汽车科技合肥签署了战路合作协议。',
    },
    {
        id: 3,
        url: '/images/indexpage/news_bg1@2x.png',

        nav: '时事热点',
        date: '2025-02-22',
        title: '卫蓝新能源与钇威科技签署战略合作协议',
        content:
            '2024年4月22日，北京卫蓝新能源科技股份有限公司与钇威汽车科技有限公司在钇威汽车科技合肥签署2024年4月22日，北京卫蓝新能源科技股份有限公司与钇威汽车科技有限公司在钇威汽车科技合肥签署了战路合作协议。',
    },
];

const PageIndex = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <div>
            <IndexVideo />
            <NewsSection newsData={newsList} />
        </div>
    );
};

export default PageIndex;
