'use client';
import React, { FC } from 'react';

import { ICustomComponentProps } from '@/types';

import { getConf } from '@/utils';
import { Grid } from 'antd';
import AspectRatio from '../aspect-ratio';
import './index.scss';

/**
 * 导航下面的大图
 */
const HeroSection: FC<ICustomComponentProps> = () => {
    /**
     * Hooks
     */
    const conf = getConf(Grid.useBreakpoint());

    return (
        <div style={{ maxWidth: '1920px', margin: '0 auto' }}>
            <AspectRatio ratio={conf.banner}>
                <div
                    style={{
                        backgroundColor: 'rgba(var(--custom-blue-rgb), 0.8)',
                        height: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <img
                        src="/images/hero-section/research-and-innovation@2x.png"
                        style={{
                            objectFit: 'cover',
                            height: '100%',
                            width: 'auto',
                        }}
                    />
                </div>
            </AspectRatio>
        </div>
    );
};

export default HeroSection;
