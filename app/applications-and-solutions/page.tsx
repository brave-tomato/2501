'use client';
import { ICustomComponentProps } from '@/types';
import classNames from 'classnames';
import { FC } from 'react';

/**
 * 应用与解决方案
 */
const ApplicationsAndSolutionsPage: FC<ICustomComponentProps> = ({ className }) => {
    return <div className={classNames('', className)}>applicationsAndSolutionsPage</div>;
};

export default ApplicationsAndSolutionsPage;
