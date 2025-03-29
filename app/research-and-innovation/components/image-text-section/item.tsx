'use client';
import React, { FC } from 'react';

import { ICustomComponentProps } from '@/types';

import AspectRatio from '@/components/aspect-ratio';
import { getConf } from '@/utils';
import { Flex, Grid } from 'antd';

/**
 *
 */
const ImageTextSectionItem: FC<ICustomComponentProps> = ({ payload }) => {
    /**
     * Hooks
     */
    const conf = getConf(Grid.useBreakpoint());

    return (
        <Flex className="image-text-section-item-wrapper" vertical style={{ maxWidth: 428 }}>
            <AspectRatio ratio={conf.solidStateEcology}>
                <img src={payload.url} style={{ width: '100%', height: 'auto' }} />
            </AspectRatio>
            <Flex align="center" className="content-box" gap={52} justify="center" vertical style={{ width: 428 }}>
                <img src={payload.icon} style={{ maxWidth: 52, height: 'auto' }} />
                <Flex align="center" gap={12} justify="center" vertical>
                    <div className="title">{payload.title}</div>
                    <div className="content">{payload.content}</div>
                </Flex>
            </Flex>
        </Flex>
    );
};

export default ImageTextSectionItem;
