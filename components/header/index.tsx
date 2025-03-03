'use client';
import useHoverDetection from '@/hooks/useHoverDetection';
import useIsMobile from '@/hooks/useIsMobile';
import useScrollDetection from '@/hooks/useScrollDetection';
import { ICustomComponentProps } from '@/types';
import { Col, Flex, Image, Row } from 'antd';
import classNames from 'classnames';
import { usePathname } from 'next/navigation';
import React, { FC, useState } from 'react';
import AspectRatioImage from '../aspect-ratio-image';
import styles from './index.module.css';

/**
 * 头部导航
 */
const Header: FC<ICustomComponentProps> = ({ className }) => {
    const { isHovered, handleMouseEnter, handleMouseLeave } = useHoverDetection();
    const isScrolled = useScrollDetection();
    const isMobile = useIsMobile();
    const pathname = usePathname();

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    return (
        <Flex className={classNames(styles['header-wrapper'], className)}>
            <Row>
                <Col span={8}>
                    <AspectRatioImage
                        ratio={216 / 28}
                        src={
                            isHovered || isScrolled || isMobile
                                ? '/images/indexpage/nav_logo@2x.png'
                                : '/images/indexpage/nav_logo_white@2x.png'
                        }
                        alt="北京卫蓝新能源科技股份有限公司"
                        className="h-full w-full object-cover "
                    />
                </Col>
                <Col span={8}>col-8</Col>
                <Col span={8}>col-8</Col>
            </Row>
        </Flex>
    );
};

export default Header;
