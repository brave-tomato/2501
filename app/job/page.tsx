'use client';
import HeroSection from '@/components/hero-setion';
import { ICustomComponentProps } from '@/types';
import classNames from 'classnames';
import { FC } from 'react';

/**
 * 页面：人才招聘
 */
const JobPage = () => {
    return (
        <div>
            <HeroSection src="/images/hero-section/job@2x.png" />
        </div>
    );
};

export default JobPage;
