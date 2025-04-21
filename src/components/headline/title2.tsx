'use client';
import React, { FC } from 'react';

import { ICustomComponentProps } from '@/types';

/**
 * 只有一个绿色的标题
 */
const Title2: FC<ICustomComponentProps> = ({ title }) => {
    return (
        <div style={{ margin: '70px auto 60px', textAlign: 'center' }}>
            {/* 标题 */}
            <div style={{ color: '#2DAFB7', fontSize: '30px', lineHeight: '45px' }}>{title}</div>
        </div>
    );
};

export default Title2;
