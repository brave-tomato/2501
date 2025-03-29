'use client';
import HeroSection from '@/components/hero-setion';
import TitleSection from '@/components/title-section';

/**
 * 页面：人才招聘
 */
const JobPage = () => {
    return (
        <div>
            <HeroSection src="/images/hero-section/job@2x.png">
                <TitleSection title="人才招聘" />
            </HeroSection>
        </div>
    );
};

export default JobPage;
