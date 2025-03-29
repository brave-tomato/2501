'use client';
import HeroSection from '@/components/hero-setion';
import { ICustomComponentProps } from '@/types';
import classNames from 'classnames';
import { FC } from 'react';

/**
 * 应用与解决方案
 */
const ApplicationsAndSolutionsPage: FC<ICustomComponentProps> = ({ className }) => {
    return (
        <div className={classNames('', className)}>
            <HeroSection src="/images/hero-section/applications-and-solutions@2x.png" />
        </div>
    );
};

export default ApplicationsAndSolutionsPage;
