'use client';
import classNames from 'classnames';
import React, { FC } from 'react';

import { ICustomComponentProps } from '@/types';

import { Flex } from 'antd';
import ImageTextSectionItem from './item';

import './index.scss';

const imageTextArr = [
    {
        id: 1,
        url: '/images/research-and-innovation/dianchi@2x.png',
        title: '人才生态',
        content: `总人数，RD人数，PHD人数，international 人数`,
        icon: '/images/research-and-innovation/icon_rencaishengtai@2x.png',
    },
    {
        id: 2,
        url: '/images/research-and-innovation/dianchi@2x.png',
        title: '专利生态',
        content: `发明专利占比，授权专利占比，海外专利占比，文章paper发表，标准制定`,
        icon: '/images/research-and-innovation/icon_zhuanlishengtai@2x.png',
    },
];

/**
 *
 */
const ImageTextSection: FC<ICustomComponentProps> = () => {
    return (
        <Flex justify="space-around">
            {imageTextArr.map((item) => (
                <ImageTextSectionItem key={item.id} payload={item} />
            ))}
        </Flex>
    );
};

export default ImageTextSection;
