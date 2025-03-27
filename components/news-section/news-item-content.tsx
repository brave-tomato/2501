'use client';
import classNames from 'classnames';
import React, { FC } from 'react';

import { ICustomComponentProps } from '@/types';

import { Flex, Typography } from 'antd';
import './index.scss';

const { Paragraph } = Typography;

/**
 *
 */
const NewsItemContent: FC<ICustomComponentProps> = ({ className, mode = 'big', news, rows = 2 }) => {
    return (
        <Flex className={classNames(className, 'news-item-big-box-content')} gap={26} vertical>
            <div className="date">{news.date}</div>
            <Flex vertical gap={4}>
                <div className="title">{news.title}</div>
                <Flex vertical gap={16}>
                    <Paragraph className="content" ellipsis={{ rows: rows }}>
                        {news.content}
                    </Paragraph>
                    <Flex justify="flex-end">
                        <Flex align="center" className="more cursor-pointer" justify="center">
                            <img
                                src={
                                    mode === 'big'
                                        ? '/images/indexpage/icon_arrow_right_blue@2x.png'
                                        : '/images/indexpage/icon_arrow_right_light@2x.png'
                                }
                                style={{ width: 8, height: 16 }}
                            />
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    );
};

export default NewsItemContent;
