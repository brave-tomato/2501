'use client';
import React, { FC } from 'react';

import { ICustomComponentProps } from '@/types';

import { Divider, Flex } from 'antd';

/**
 *
 */
const TitleSection: FC<ICustomComponentProps> = ({ title, subtitle = '' }) => {
    return (
        <Flex gap={40} vertical>
            <Flex gap={8} vertical>
                {/* 主标题 */}
                <div className="title-top-big">{title}</div>
                {/* 副标题 */}
                {subtitle.length > 0 ? <div className="subtitle-top-big">{subtitle}</div> : null}
            </Flex>
            {/* 线 */}
            <Divider
                style={{ borderColor: `var(--custom-green)`, width: 110, minWidth: 110, borderWidth: 4, margin: 0 }}
            ></Divider>
        </Flex>
    );
};

export default TitleSection;
