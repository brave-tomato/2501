'use client';
import { ICustomComponentProps } from '@/types';
import classNames from 'classnames';
import { FC } from 'react';

/**
 * 页面：联系我们
 */
const ContactUsPage: FC<ICustomComponentProps> = ({ className }) => {
    return <div className={classNames('', className)}>ContactUsPage</div>;
};

export default ContactUsPage;
