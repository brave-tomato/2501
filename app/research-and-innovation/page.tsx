'use client';
import HeroSection from '@/components/hero-setion';
import TitleSection from '@/components/title-section';
import { ICustomComponentProps } from '@/types';
import classNames from 'classnames';
import { FC } from 'react';

/**
 * 固态电池研发与创新
 */
const ResearchAndInnovation: FC<ICustomComponentProps> = ({ className }) => {
    return (
        <div className={classNames('', className)}>
            <HeroSection src="/images/hero-section/research-and-innovation@2x.png">
                <TitleSection title="固态电池研发与创新" subtitle="人才与创新是卫蓝聚焦未来技术的基础" />
            </HeroSection>
        </div>
    );
};

export default ResearchAndInnovation;
