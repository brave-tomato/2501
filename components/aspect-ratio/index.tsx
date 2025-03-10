'use client';
import React, { FC } from 'react';

const AspectRatio: FC<any> = ({ ratio, children }) => {
    const paddingTop = (1 / ratio) * 100;
    return (
        <div style={{ position: 'relative', width: '100%', paddingTop: `${paddingTop}%` }}>
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>{children}</div>
        </div>
    );
};

export default AspectRatio;
