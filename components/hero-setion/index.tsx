'use client';
import classNames from 'classnames';
import React, { FC } from 'react';

import { ICustomComponentProps } from '@/types';

import { getConf } from '@/utils';
import { Flex, Grid } from 'antd';
import AspectRatio from '../aspect-ratio';
import './index.scss';

/**
 * 导航下面的大图
 */
const HeroSection: FC<ICustomComponentProps> = ({ src }) => {
    /**
     * Hooks
     */
    const conf = getConf(Grid.useBreakpoint());

    return (
        <div style={{ maxWidth: '1920px', margin: '0 auto' }}>
            <AspectRatio ratio={conf.banner}>
                <img
                    src={src}
                    // src="/images/hero-section/research-and-innovation@2x.png"
                    style={{ objectFit: 'cover', height: '100%', width: 'auto' }}
                />
            </AspectRatio>
        </div>
    );
};

export default HeroSection;
