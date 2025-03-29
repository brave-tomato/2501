'use client';
import { Title1, Title2, Title4 } from '@/components/headline';
import HeroSection from '@/components/hero-setion';
import TitleSection from '@/components/title-section';
import { ICustomComponentProps } from '@/types';
import { Flex } from 'antd';
import classNames from 'classnames';
import { FC } from 'react';

const data: any = [
    {
        id: 1,
        title: '动力类应用',
        subtitle: 'Power type applications',
        breakWord: 2,
        icon: '/images/applications-and-solutions/icon_circle_more@2x.png',
        content1: 'Power type ',
        content2: 'applications',
        bigicon: '/images/applications-and-solutions/bigicon1@2x.png',
    },
    {
        id: 2,
        title: '低空经济类应用',
        subtitle: 'Low-altitude economic applications',
        breakWord: 1,
        icon: '/images/applications-and-solutions/icon_circle_more@2x.png',
        content1: 'Low-altitude ',
        content2: 'economic applications',
        bigicon: '/images/applications-and-solutions/bigicon1@2x.png',
    },
    {
        id: 3,
        title: '储能应用',
        subtitle: 'Energy storage applications',
        breakWord: 1,
        icon: '/images/applications-and-solutions/icon_circle_more@2x.png',
        content1: 'Energy',
        content2: 'storage applications',
        bigicon: '/images/applications-and-solutions/bigicon1@2x.png',
    },
];
// 定义拆分单词并插入换行符的函数
const breakWordsAtPosition = (text: any, breakPosition: any) => {
    const words = text.split(' ');
    return words.slice(0, breakPosition).join(' ') + '<br/>' + words.slice(breakPosition).join(' ');
};
/**
 * 应用与解决方案
 */
const ApplicationsAndSolutionsPage: FC<ICustomComponentProps> = ({ className }) => {
    return (
        <div className={classNames('', className)}>
            <HeroSection src="/images/hero-section/applications-and-solutions@2x.png">
                <TitleSection title="应用与解决方案" />
            </HeroSection>
            <Flex gap={70} vertical>
                {data.map((payload: any, index: number) => (
                    <Flex
                        className="bg-linear-green2"
                        key={payload.id}
                        vertical
                        style={{
                            position: 'relative',
                            width: 1060,
                            height: 610,
                            borderRadius: 18,
                            margin: '0 auto',
                            paddingLeft: 40,
                        }}
                    >
                        <Title4 title={payload.title} subtitle={payload.subtitle} />
                        <img src={payload.icon} width={184} style={{ marginTop: 70, marginBottom: 50 }} />
                        <div
                            style={{ fontSize: 76, color: '#fff' }}
                            dangerouslySetInnerHTML={{
                                __html: breakWordsAtPosition(payload.subtitle, payload.breakWord),
                            }}
                        ></div>
                        {/* 右边的图片 TODO:这些图片尺寸要统一 */}
                        <img src={payload.bigicon} style={{ position: 'absolute', top: 47, right: 78 }} width={503} />
                    </Flex>
                ))}
            </Flex>
        </div>
    );
};

export default ApplicationsAndSolutionsPage;
