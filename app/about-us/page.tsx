'use client';
import { ICustomComponentProps } from '@/types';
import classNames from 'classnames';
import { FC } from 'react';

/**
 * 页面：关于我们
 */
const AboutUsPage: FC<ICustomComponentProps> = ({ className }) => {
    return <div className={classNames('', className)}>AboutUsPage</div>;
};

export default AboutUsPage;
