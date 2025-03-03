'use client';
import { ICustomComponentProps } from '@/types';
import classNames from 'classnames';
import { FC } from 'react';

/**
 * 研发与创新
 */
const ResearchAndInnovation: FC<ICustomComponentProps> = ({ className }) => {
    return <div className={classNames('', className)}>ResearchAndInnovation</div>;
};

export default ResearchAndInnovation;
