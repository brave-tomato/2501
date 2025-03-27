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
const NewsSection: FC<ICustomComponentProps> = ({ className, newsData }) => {
    return (
        <Flex className={classNames('news-section-wrapper', className)} gap={40} vertical>
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
            <Row gutter={16}>
                {newsData.length > 0 && (
                    <>
                        {/* PC 端布局 */}
                        <Col xs={0} md={12}>
                            <NewsItemBig news={newsData[0]} />
                        </Col>
                        <Col xs={0} md={6}>
                            <NewsItemSmall news={newsData[1]} />
                        </Col>
                        <Col xs={0} md={6}>
                            <NewsItemSmall news={newsData[2]} />
                        </Col>
                        {/* 移动端布局 */}
                        <Col md={0} xs={24}>
                            {newsData.map((news: any, index: number) => (
                                <NewsItemBig key={index} news={news} />
                            ))}
                        </Col>
                    </>
                )}
            </Row>
        </Flex>
    );
};

export default NewsSection;
