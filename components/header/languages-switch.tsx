'use client';
import useScrollDetection from '@/hooks/useScrollDetection';
import { ICustomComponentProps } from '@/types';
import classNames from 'classnames';
import { FC } from 'react';
import LanguagesSwitcPanel from './languages-switc-panel';

/**
 * 切换语言
 */
const LanuagesSwitch: FC<ICustomComponentProps> = ({ className, isHovered, showIcon = false }) => {
    const isScrolled = useScrollDetection();

    return (
        <div className={classNames('flex items-center justify-end gap-2 cursor-pointer ', className)}>
            {isHovered || isScrolled || showIcon ? (
                <img src="/images/indexpage/icon_qiu@2x.png" className="w-[25px]" style={{ maxWidth: 25 }} />
            ) : (
                <img src="/images/indexpage/icon_qiu_white@2x.png" className="w-[25px]" style={{ maxWidth: 25 }} />
            )}

            <span>选择区域/语言</span>
            <LanguagesSwitcPanel isHovered={isHovered} showIcon={showIcon} />
        </div>
    );
};

export default LanuagesSwitch;
