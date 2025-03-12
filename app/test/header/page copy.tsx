'use client';

import React from 'react';

import HeaderComponent from '@/components/header';
import { Image } from 'antd';

const Test = () => {
    return (
        <div style={{ background: 'lightblue', height: '200vh' }}>
            <HeaderComponent />
            <div style={{ width: 200 }}>
                (height/width) * 100%
                <br />
                宽16:9
                <div style={{ position: 'relative', paddingTop: `${(650 / 1920) * 100}%`, background: 'red' }}>
                    <div style={{ position: 'absolute', top: 0, right: 0, bottom: 0, left: 0 }}>
                        {/* {children} */}
                        <img src={'/images/indexpage/nav_logo_white@2x.png'} alt="北京卫蓝新能源科技股份有限公司" />
                    </div>
                </div>
                ;
            </div>
        </div>
    );
};

export default Test;
