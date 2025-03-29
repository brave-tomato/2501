'use client';
import { Title1 } from '@/components/headline';
import Title2 from '@/components/headline/title2';
import HeroSection from '@/components/hero-setion';
import TitleSection from '@/components/title-section';
import { ICustomComponentProps } from '@/types';
import classNames from 'classnames';
import { FC } from 'react';
import ImageTextSection from './components/image-text-section';

/**
 * 固态电池研发与创新
 */
const ResearchAndInnovation: FC<ICustomComponentProps> = ({ className }) => {
    return (
        <div className={classNames('', className)}>
            <HeroSection src="/images/hero-section/research-and-innovation@2x.png">
                <TitleSection title="固态电池研发与创新" subtitle="人才与创新是卫蓝聚焦未来技术的基础" />
            </HeroSection>
            {/* 固态电池研发 */}
            <Title1 title="固态电池研发" subtitle="Solid-State Battery R&D" />
            <Title2 title="固态生态" />
            <ImageTextSection />

            {/* 固态电池制造 */}
            <Title1 title="固态电池制造" subtitle="Solid-State Battery Process" />
            <Title2 title="固态技术" />
        </div>
    );
};

export default ResearchAndInnovation;
