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
 * 新闻展示模块
 */
const NewsItemBig: FC<ICustomComponentProps> = ({ className, news }) => {
    return (
        <Flex className={classNames('', className)}>
            <div className="news-item-big-box">
                {/* TODO：Image组件会随着屏幕的宽度变化，但是AspectRatio没有变化 */}
                <Image src={news.url} preview={false} />
                <NewsItemNav nav={news.nav} />
                {/* <div style={{ maxWidth: 650, width: 'auto' }}>
                    <AspectRatio ratio={650 / 548}></AspectRatio>
                </div> */}
                <NewsItemContent news={news} />
            </div>
        </Flex>
    );
};

export default NewsItemBig;
