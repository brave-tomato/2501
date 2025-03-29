'use client';
import HeroSection from '@/components/hero-setion';
import { ICustomComponentProps } from '@/types';
import classNames from 'classnames';
import { FC } from 'react';

/**
 * 页面：联系我们
 */
const ContactUsPage: FC<ICustomComponentProps> = ({ className }) => {
    return (
        <div className={classNames('', className)}>
            <HeroSection src="/images/hero-section/contact-us@2x.png" />
        </div>
    );
};

export default ContactUsPage;
