'use client';

/**
 * Components
 */
import HeroSection from '@/components/hero-section';
import TitleSection from '@/components/title-section';

const Page = () => {
    return (
        <div style={{ maxWidth: '1920px', margin: '0 auto' }}>
            <HeroSection src="/images/hero-section/contact-us@2x.png">
                <TitleSection title="联系我们" />
            </HeroSection>
        </div>
    );
};

export default Page;
