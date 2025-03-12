'use client';
import useScrollDetection from '@/hooks/useScrollDetection';
import { ICustomComponentProps } from '@/types';
import classNames from 'classnames';
import { FC, useEffect, useState } from 'react';

// 切换语言 简体中文 English Français Deutsch Magyar Bahasa Indonesia Italiano 日本語 한국어 Español
export const langList = [
    { id: 1, text: '简体中文' },
    { id: 2, text: 'English' },
    { id: 3, text: 'Français' },
    { id: 4, text: 'Deutsch' },
    { id: 5, text: 'Magyar' },
    { id: 6, text: 'Bahasa Indonesia' },
    { id: 7, text: 'Italiano' },
    { id: 8, text: '日本語' },
    { id: 9, text: '한국어' },
    { id: 10, text: 'Español' },
];
export const langObj = {
    title: '选择区域/语言',
    list: langList,
};

/**
 * 切换语言面板
 */
const LanguagesSwitcPanel: FC<ICustomComponentProps> = ({ className, isHovered }) => {
    const isScrolled = useScrollDetection();
    const [isOpen, setIsOpen] = useState(false);
    const [isRotated, setIsRotated] = useState(false); // 新增状态用于控制图片旋转

    const toggleMenu = () => {
        setIsOpen(!isOpen);
        setIsRotated(!isRotated); // 点击时切换旋转状态
    };
    const [selectedLang, setSelectedLang] = useState(langObj.list[0]);

    useEffect(() => {
        // 从 localStorage 中获取当前选中的语言
        const storedLang = localStorage.getItem('selectedLang');
        if (storedLang) {
            setSelectedLang(JSON.parse(storedLang));
        }
    }, []);

    const handleLangClick = (lang: any) => {
        setSelectedLang(lang);
        localStorage.setItem('selectedLang', JSON.stringify(lang));
    };

    // 鼠标离开后，收起下拉框
    const handleMouseLeavePanel = () => {
        setIsOpen(false);
    };

    // 当 isHovered 变为 false 时，将图片旋转状态恢复
    // 当鼠标移出<header>时，关闭面板
    useEffect(() => {
        if (!isHovered) {
            setIsOpen(false);
            setIsRotated(false);
        }
    }, [isHovered]);

    return (
        <div className={classNames('cursor-pointer ', className)}>
            <img
                src={
                    isScrolled || isHovered
                        ? '/images/indexpage/icon_arrow_down@2x.png'
                        : '/images/indexpage/icon_arrow_down_white@2x.png'
                }
                style={{
                    maxWidth: '22px',
                    transition: 'transform 300ms ease',
                    transform: isRotated ? 'rotate(180deg)' : 'rotate(0deg)',
                }}
                onClick={toggleMenu}
            />
        </div>
    );
};

export default LanguagesSwitcPanel;
