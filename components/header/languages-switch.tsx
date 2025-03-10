'use client';
import useScrollDetection from '@/hooks/useScrollDetection';
import { ICustomComponentProps } from '@/types';
import { Flex } from 'antd';
import classNames from 'classnames';
import { FC } from 'react';
import LanguagesSwitcPanel from './languages-switc-panel';

import './index.scss';

// import styles from './index.module.css';
/**
 * 切换语言
 */
const LanuagesSwitch: FC<ICustomComponentProps> = ({ className, isHovered, showIcon = false }) => {
    const isScrolled = useScrollDetection();

    return (
        <Flex align="center" justify="space-between" gap={12} className={classNames('cursor-pointer ', className)}>
            {isHovered || isScrolled || showIcon ? (
                <img src="/images/indexpage/icon_qiu@2x.png" className="w-[25px]" style={{ maxWidth: 25 }} />
            ) : (
                <img src="/images/indexpage/icon_qiu_white@2x.png" className="w-[25px]" style={{ maxWidth: 25 }} />
            )}
            <span className={'languagesText'}>选择区域/语言</span>
            <LanguagesSwitcPanel isHovered={isHovered} showIcon={showIcon} />
        </Flex>
    );
};

export default LanuagesSwitch;
