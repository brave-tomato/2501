'use client';
import { ICustomComponentProps } from '@/types';
import { Image } from 'antd';
import classNames from 'classnames';
import React, { FC } from 'react';

/**
 * 宽高比组件
 */
const AspectRatioImage: FC<ICustomComponentProps> = ({ wrapperClassName, ratio, src, alt, ...rest }) => {
    return (
        <div
            style={{ position: 'relative', width: '100%', paddingTop: `${(1 / ratio) * 100}%` }}
            className={classNames('', wrapperClassName)}
        >
            <Image
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                src={src}
                alt={alt}
                {...rest}
            />
        </div>
    );
};
export default AspectRatioImage;
