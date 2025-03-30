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
const HeroSection: FC<ICustomComponentProps & React.PropsWithChildren> = ({ src, children }) => {
    /**
     * Hooks
     */
    const conf = getConf(Grid.useBreakpoint());

    return (
        <div style={{ maxWidth: '1920px', margin: '0 auto', position: 'relative' }}>
            <AspectRatio ratio={conf.banner}>
                <img
                    src={src}
                    style={{
                        objectFit: 'cover',
                        height: '100%',
                        width: '100%',
                    }}
                />
            </AspectRatio>

            <div className="hero-section-title-box">{children}</div>
        </div>
    );
};

export default HeroSection;
