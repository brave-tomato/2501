'use client';
import HeroSection from '@/components/hero-setion';
import TitleSection from '@/components/title-section';
import { ICustomComponentProps } from '@/types';
import classNames from 'classnames';
import { FC } from 'react';

/**
 * 应用与解决方案
 */
const ApplicationsAndSolutionsPage: FC<ICustomComponentProps> = ({ className }) => {
    return (
        <div className={classNames('', className)}>
            <HeroSection src="/images/hero-section/applications-and-solutions@2x.png">
                <TitleSection title="应用与解决方案" />
            </HeroSection>
        </div>
    );
};

export default ApplicationsAndSolutionsPage;
