'use client';
import classNames from 'classnames';
import React, { FC } from 'react';

import { ICustomComponentProps } from '@/types';

import { Flex } from 'antd';
import './index.scss';

/**
 * 新闻展示模块 小块
 */
const NewsItemSmall: FC<ICustomComponentProps> = ({ className }) => {
    return <Flex className={classNames('', className)}>NewsItemSmall</Flex>;
};

export default NewsItemSmall;
