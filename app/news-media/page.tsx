'use client';
import { ICustomComponentProps } from '@/types';
import classNames from 'classnames';
import { FC } from 'react';

/**
 * 页面：新闻媒体
 */
const NewsMediaPage: FC<ICustomComponentProps> = ({ className }) => {
    return <div className={classNames('', className)}>NewsMediaPage</div>;
};

export default NewsMediaPage;
