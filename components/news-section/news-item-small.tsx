'use client';
import classNames from 'classnames';
import React, { FC } from 'react';

import { ICustomComponentProps } from '@/types';

import { Flex, Image } from 'antd';
import './index.scss';
import NewsItemContent from './news-item-content';
import NewsItemNav from './news-item-nav';

/**
 * 新闻展示模块 小块
 */
const NewsItemSmall: FC<ICustomComponentProps> = ({ className, news }) => {
    return (
        <Flex className={classNames('', className)}>
            <Flex vertical>
                {/* 上半个是图片 */}
                <Flex flex={'auto'}>
                    <Image src={news.url} preview={false} />
                </Flex>
                <NewsItemNav nav={news.nav} />

                <Flex flex={1}>
                    {/* 下半个是内容 */}
                    <NewsItemContent className="bg-light" mode="small" news={news} rows={4} />
                </Flex>
            </Flex>
        </Flex>
    );
};

export default NewsItemSmall;
