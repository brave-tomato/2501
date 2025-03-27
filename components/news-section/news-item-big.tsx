'use client';
import classNames from 'classnames';
import React, { FC } from 'react';

import { ICustomComponentProps } from '@/types';
import { Flex, Image, Typography } from 'antd';
import AspectRatio from '../aspect-ratio';

import './index.scss';

const { Paragraph } = Typography;

/**
 * 新闻展示模块
 */
const NewsItemBig: FC<ICustomComponentProps> = ({ className, news }) => {
    return (
        <Flex className={classNames('', className)}>
            <div className="news-item-big-box">
                {/* TODO：Image组件会随着屏幕的宽度变化，但是AspectRatio没有变化 */}
                <Image src={news.url} preview={false} />
                <Flex align="center" className="nav" justify="center">
                    {news.nav}
                </Flex>
                {/* <div style={{ maxWidth: 650, width: 'auto' }}>
                    <AspectRatio ratio={650 / 548}></AspectRatio>
                </div> */}
                <Flex className="news-item-big-box-content" gap={26} vertical>
                    <div className="date">{news.date}</div>
                    <Flex vertical gap={4}>
                        <div className="title">{news.title}</div>
                        <Flex vertical gap={20}>
                            <Paragraph className="content" ellipsis={{ rows: 2 }}>
                                {news.content}
                            </Paragraph>
                            <Flex justify="flex-end">
                                <Flex align="center" className="more cursor-pointer" justify="center">
                                    <img
                                        src="/images/indexpage/icon_arrow_right_blue@2x.png"
                                        style={{ width: 8, height: 16 }}
                                    />
                                </Flex>
                            </Flex>
                        </Flex>
                    </Flex>
                </Flex>
            </div>
        </Flex>
    );
};

export default NewsItemBig;
