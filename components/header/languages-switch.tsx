'use client';
import useScrollDetection from '@/hooks/useScrollDetection';
import { ICustomComponentProps } from '@/types';
import { Flex, Popover } from 'antd';
import classNames from 'classnames';
import { FC, useEffect, useState } from 'react';

import './index.scss';

// import styles from './index.module.css';

// 切换语言 简体中文 English Français Deutsch Magyar Bahasa Indonesia Italiano 日本語 한국어 Español
export const langList = [
    { id: 1, text: '简体中文' },
    { id: 2, text: 'English' },
];

/**
 * 切换语言
 */
const LanguagesSwitch: FC<ICustomComponentProps> = ({ className, isHovered }) => {
    const isScrolled = useScrollDetection();
    const [isOpen, setIsOpen] = useState(false);
    const [selectedLang, setSelectedLang]: any = useState(langList[0]);
    const [isRotated, setIsRotated] = useState(false); // 新增状态用于控制图片旋转

    const toggleMenu = () => {
        setIsOpen(!isOpen);
        setIsRotated(!isRotated); // 点击时切换旋转状态
    };

    // 当 isHovered 变为 false 时，将图片旋转状态恢复
    // 当鼠标移出<header>时，关闭面板
    useEffect(() => {
        if (!isHovered) {
            setIsOpen(false);
            setIsRotated(false);
        }
    }, [isHovered]);

    const handleLangClick = (lang: any) => {
        setSelectedLang(lang);
        localStorage.setItem('selectedLang', JSON.stringify(lang));
        setIsOpen(false);
    };
    const content = (
        <div className="change-languages-panel">
            <Flex className="content" gap={8} vertical wrap>
                {langList.map((payload: any, index: number) => (
                    <div
                        className={classNames('content-item', {
                            selected: payload.id === selectedLang.id,
                        })}
                        onClick={() => handleLangClick(payload)}
                    >
                        {payload.text}
                    </div>
                ))}
            </Flex>
        </div>
    );
    return (
        <Popover content={content} title="" placement="topRight" open={isOpen}>
            <Flex
                align="center"
                justify="space-between"
                gap={8}
                className={classNames('cursor-pointer', className)}
                onClick={toggleMenu}
            >
                {isHovered || isScrolled ? (
                    <img src="/images/indexpage/icon_qiu@2x.png" style={{ maxWidth: 15 }} />
                ) : (
                    <img src="/images/indexpage/icon_qiu_white@2x.png" style={{ maxWidth: 15 }} />
                )}
                <span className={isScrolled || isHovered ? 'languages-text-night' : 'languages-text-light'}>
                    选择区域/语言
                </span>
                <div className={classNames('cursor-pointer ', className)}>
                    <img
                        src={
                            isScrolled || isHovered
                                ? '/images/indexpage/icon_arrow_down@2x.png'
                                : '/images/indexpage/icon_arrow_down_white@2x.png'
                        }
                        style={{
                            maxWidth: 12,
                            transition: 'transform 300ms ease',
                            transform: isRotated ? 'rotate(180deg)' : 'rotate(0deg)',
                        }}
                    />
                </div>
            </Flex>
        </Popover>
    );
};

export default LanguagesSwitch;
