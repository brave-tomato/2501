'use client';
import classNames from 'classnames';
import React, { FC } from 'react';

import { ICustomComponentProps } from '@/types';

import { Divider, Flex, Typography } from 'antd';
import './index.scss';

/**
 *
 */
const TitleSection: FC<ICustomComponentProps> = ({ title, subtitle }) => {
    return (
        <Flex gap={40} vertical>
            <Flex gap={8} vertical>
                {/* 主标题 */}
                <div className="title-top-big">{title}</div>
                {/* 副标题 */}
                <div className="subtitle-top-big">{subtitle}</div>
            </Flex>
            {/* 线 */}
            <Divider
                style={{ borderColor: `var(--custom-green)`, width: 110, minWidth: 110, borderWidth: 4, margin: 0 }}
            ></Divider>
        </Flex>
    );
};

export default TitleSection;
