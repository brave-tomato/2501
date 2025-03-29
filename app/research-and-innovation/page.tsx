'use client';
import HeroSection from '@/components/hero-setion';
import { ICustomComponentProps } from '@/types';
import classNames from 'classnames';
import { FC } from 'react';

/**
 * 固态电池研发与创新
 */
const ResearchAndInnovation: FC<ICustomComponentProps> = ({ className }) => {
    return (
        <div className={classNames('', className)}>
            <HeroSection src="/images/hero-section/research-and-innovation@2x.png" />
        </div>
    );
};

export default ResearchAndInnovation;
