'use client';
import HeroSection from '@/components/hero-setion';
import TitleSection from '@/components/title-section';
import { ICustomComponentProps } from '@/types';
import classNames from 'classnames';
import { FC } from 'react';

/**
 * 页面：联系我们
 */
const ContactUsPage: FC<ICustomComponentProps> = ({ className }) => {
    return (
        <div className={classNames('', className)}>
            <HeroSection src="/images/hero-section/contact-us@2x.png">
                <TitleSection title="联系我们" />
            </HeroSection>
        </div>
    );
};

export default ContactUsPage;
