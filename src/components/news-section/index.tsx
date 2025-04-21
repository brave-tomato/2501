'use client';
import classNames from 'classnames';
import React, { FC } from 'react';

import { ICustomComponentProps } from '@/types';

import { Col, Flex, Row } from 'antd';
import './index.scss';
import NewsItemBig from './news-item-big';
import NewsItemSmall from './news-item-small';

/**
 * 首页-新闻模块
 */
const NewsSection: FC<ICustomComponentProps> = ({ newsData }) => {
    return (
        <div style={{ backgroundColor: 'var(--custom-gray-light)' }}>
            <Flex className={'news-section-wrapper'} gap={40} vertical style={{ maxWidth: 1200, margin: '0 auto' }}>
                <Flex className="header" justify="space-between">
                    <Flex gap={6} vertical>
                        <div className="title">新闻动态</div>
                        <div className="sub-title">NEWS</div>
                    </Flex>
                    <Flex align="center" className="btn-more" justify="center" gap={8}>
                        <div>查看更多</div>
                        <img src="/images/indexpage/icon_arrow_right_white@2x.png" width={6} height={12} />
                    </Flex>
                </Flex>

                {/* 内容 */}
                <Flex gap={16}>
                    {newsData.length > 0 && (
                        <>
                            <Flex flex={2}>
                                <NewsItemBig news={newsData[0]} />
                            </Flex>
                            <Flex flex={1}>
                                <NewsItemSmall news={newsData[1]} />
                            </Flex>
                            <Flex flex={1}>
                                <NewsItemSmall news={newsData[2]} />
                            </Flex>
                        </>
                    )}
                </Flex>
            </Flex>
        </div>
    );
};

export default NewsSection;
