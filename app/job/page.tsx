'use client';
import { ICustomComponentProps } from '@/types';
import classNames from 'classnames';
import { FC } from 'react';

/**
 * 页面：人才招聘
 */
const JobPage: FC<ICustomComponentProps> = ({ className }) => {
    return <div className={classNames('', className)}>JobPage</div>;
};

export default JobPage;
