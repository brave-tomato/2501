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
        <Flex className={classNames(className, 'news-item-big-box-content')} justify="space-between" vertical>
            <div className="date">{news.date}</div>
            <Flex gap={4} vertical>
                <div className="title">{news.title}</div>
                <Paragraph className="content" ellipsis={{ rows: rows }}>
                    {news.content}
                </Paragraph>
            </Flex>
            <Flex justify="end">
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
            {/* <Flex justify="end" gap={4} vertical>
 <div className="title">{news.title}</div>
                <Flex gap={16} vertical>

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
            </Flex> */}
        </Flex>
    );
};

export default NewsItemContent;
