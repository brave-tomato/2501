'use client';
import classNames from 'classnames';
import React, { FC } from 'react';

import { Flex } from 'antd';
import './index.scss';

/**
 * 新闻小导航：综合要闻，等
 */
const NewsItemNav: FC<ICustomComponentProps> = ({ nav }) => {
    return (
        <Flex align="center" className="nav" justify="center">
            {nav}
        </Flex>
    );
};

export default NewsItemNav;
