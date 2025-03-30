'use client';
import classNames from 'classnames';
import React, { FC } from 'react';

import { ICustomComponentProps } from '@/types';

import { Flex, Image } from 'antd';
import AspectRatio from '../aspect-ratio';
import './index.scss';
import NewsItemContent from './news-item-content';
import NewsItemNav from './news-item-nav';

/**
 * 新闻展示模块 小块
 */
const NewsItemSmall: FC<ICustomComponentProps> = ({ className, news }) => {
    return (
        <Flex align="center" vertical style={{ width: 256 }}>
            {/* 上半个是图片 */}
            <div style={{ width: 256 }}>
                <AspectRatio ratio={256 / 247}>
                    <img src={news.url} style={{ width: '100%', height: '100%' }} />
                </AspectRatio>
            </div>
            <NewsItemNav nav={news.nav} />
            {/* 下半个是内容 */}
            <NewsItemContent className="bg-light" mode="small" news={news} rows={4} />
        </Flex>
    );
};

export default NewsItemSmall;
