'use client';
import classNames from 'classnames';
import React, { FC } from 'react';

import { ICustomComponentProps } from '@/types';
import { Flex } from 'antd';
import AspectRatio from '../aspect-ratio';

import './index.scss';
import NewsItemContent from './news-item-content';
import NewsItemNav from './news-item-nav';

/**
 * 新闻展示模块
 */
const NewsItemBig: FC<ICustomComponentProps> = ({ className, news }) => {
    return (
        <div className="news-item-big-box">
            <div style={{ width: 523 }}>
                <AspectRatio ratio={523 / 461}>
                    <img src={news.url} style={{ width: '100%', height: '100%' }} />
                </AspectRatio>
            </div>
            <NewsItemNav nav={news.nav} />

            <NewsItemContent news={news} />
        </div>
    );
};

export default NewsItemBig;
