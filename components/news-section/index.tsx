'use client';
import classNames from 'classnames';
import React, { FC } from 'react';

import { ICustomComponentProps } from '@/types';

import { Button, Flex } from 'antd';
import './index.scss';

/**
 * 首页-新闻模块
 */
const NewsSection: FC<ICustomComponentProps> = ({ className }) => {
    return (
        <Flex className={classNames('news-section-wrapper', className)}>
            <Flex className="header" justify="space-between">
                <Flex gap={10} vertical>
                    <div className="title">新闻动态</div>
                    <div className="sub-title">NEWS</div>
                </Flex>
                <Flex align="center" className="btn-more" justify="center" gap={8}>
                    <div>查看更多</div>
                    <img src="/images/indexpage/icon_arrow_right_white@2x.png" width={8} height={16} />
                </Flex>
            </Flex>
            {/* 内容 */}
        </Flex>
    );
};

export default NewsSection;
