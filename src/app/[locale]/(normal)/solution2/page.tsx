'use client';
import AspectRatio from '@/components/aspect-ratio';
import { Title1, Title2, Title4 } from '@/components/headline';
import HeroSection from '@/components/hero-section';
import TitleSection from '@/components/title-section';
import { Flex } from 'antd';
import classNames from 'classnames';
import Link from 'next/link';
import { FC } from 'react';

const data: any = [
    {
        id: 1,
        title: '动力类应用',
        subtitle: 'Power type applications',
        breakWord: 2,
        icon: '/images/applications-and-solutions/icon_circle_more@2x.png',
        bigicon: '/images/applications-and-solutions/bigicon1@2x.png',
    },
    {
        id: 2,
        title: '低空经济类应用',
        subtitle: 'Low-altitude economic applications',
        breakWord: 1,
        icon: '/images/applications-and-solutions/icon_circle_more@2x.png',
        bigicon: '/images/applications-and-solutions/bigicon2@2x.png',
    },
    {
        id: 3,
        title: '储能应用',
        subtitle: 'Energy storage applications',
        breakWord: 1,
        icon: '/images/applications-and-solutions/icon_circle_more@2x.png',
        bigicon: '/images/applications-and-solutions/bigicon3@2x.png',
    },
];

// 定义拆分单词并插入换行符的函数
const breakWordsAtPosition = (text: any, breakPosition: any) => {
    const words = text.toUpperCase().split(' ');
    return `<div style="margin-bottom:20px">${words.slice(0, breakPosition).join(' ')}</div><div>${words.slice(breakPosition).join(' ')}</div>`;
};
/**
 * 应用与解决方案
 */
const ApplicationsAndSolutionsPage = () => {
    return (
        <div>
            <HeroSection src="/images/hero-section/applications-and-solutions@2x.png">
                <TitleSection title="应用与解决方案" />
            </HeroSection>
            {/* 3个卡片样式 */}
            <Flex gap={70} vertical style={{ margin: `70px 0` }}>
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
                        <Link href={'/applications-and-solutions-details'}>
                            <img src={payload.icon} width={184} style={{ marginTop: 70, marginBottom: 50 }} />
                        </Link>
                        <div
                            style={{ fontSize: 76, color: '#fff', fontWeight: 'bold' }}
                            dangerouslySetInnerHTML={{
                                __html: breakWordsAtPosition(payload.subtitle, payload.breakWord),
                            }}
                        ></div>
                        {index === 0 && (
                            <div style={{ position: 'absolute', top: 47, right: 78, width: 503 }}>
                                <AspectRatio ratio={503 / 371}>
                                    <img src={payload.bigicon} width={'100%'} height={'100%'} />
                                </AspectRatio>
                            </div>
                        )}
                        {index === 1 && (
                            <div style={{ position: 'absolute', top: 101, right: 62, width: 494 }}>
                                <AspectRatio ratio={494 / 372}>
                                    <img src={payload.bigicon} width={'100%'} height={'100%'} />
                                </AspectRatio>
                            </div>
                        )}
                        {index === 2 && (
                            <div style={{ position: 'absolute', top: 0, right: 79, width: 435 }}>
                                <AspectRatio ratio={435 / 484}>
                                    <img src={payload.bigicon} width={'100%'} height={'100%'} />
                                </AspectRatio>
                            </div>
                        )}
                    </Flex>
                ))}
            </Flex>
        </div>
    );
};

export default ApplicationsAndSolutionsPage;
