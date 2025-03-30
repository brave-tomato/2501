'use client';
import AspectRatio from '@/components/aspect-ratio';
import { Title1, Title2, Title4 } from '@/components/headline';
import HeroSection from '@/components/hero-section';
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

const solutions: any = [
    {
        title: '纯电乘用车解决方案',
        details: [
            { key: '360Wh/kg', value: '超高镍正极材料搭配最新硅碳负极技术，目前为行业内量产单电芯最高能量密度。' },
            { key: '1000KM+', value: '搭配高能量密度电池的电池包，帮助下游客户实现行业首台续航超过1000KM的量产车型。' },
        ],
    },
    {
        title: '电动快艇解决方案',
        details: [
            { key: '7-10C', value: '中镍正极材料搭配第三代硅碳负极技术，电芯可以达到7-10C的放电倍率。' },
            { key: '197Wh/Kg', value: '利用我们的CTP技术，整包电池系统能量密度达到行业最高。' },
        ],
    },
    {
        title: '电动游艇&轮船解决方案',
        details: [
            { key: 'XXX', value: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX' },
            { key: 'XXX', value: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX' },
        ],
    },
    {
        title: '工程机械类解决方案',
        details: [
            { key: 'XXX', value: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX' },
            { key: 'XXX', value: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX' },
        ],
    },
    {
        title: '电动摩托车解决方案',
        details: [
            { key: 'XXX', value: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX' },
            { key: 'XXX', value: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX' },
        ],
    },
    {
        title: '电动助力车解决方案',
        details: [
            { key: 'XXX', value: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX' },
            { key: 'XXX', value: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX' },
        ],
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
const ApplicationsAndSolutionsPage: FC<ICustomComponentProps> = ({ className }) => {
    return (
        <div className={classNames('', className)}>
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
                        <img src={payload.icon} width={184} style={{ marginTop: 70, marginBottom: 50 }} />
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
            {/* 解决方案 */}
            <Flex gap={70} vertical style={{ margin: `70px` }}>
                {solutions.map((payload: any, index: number) => (
                    <Flex gap={70} vertical>
                        {index !== 0 ? (
                            <div
                                style={{ borderBottom: `1px solid var(--custom-gray)`, height: 1, width: `100%` }}
                            ></div>
                        ) : null}
                        <Flex key={index} gap={24} justify="center">
                            {/* 左边 */}
                            <div style={{ backgroundColor: `var(--custom-gray-light)`, width: 300, height: 230 }}></div>
                            {/* 右边 */}
                            <Flex gap={32} vertical>
                                {/* 标题 */}
                                <div style={{ fontSize: 45, color: `var(--custom-black)` }}>{payload.title}</div>
                                {/* 内容 */}
                                <Flex gap={50}>
                                    {payload.details.map((detailsItem: any, dIndex: number) => (
                                        <Flex key={detailsItem.key + dIndex + index} vertical style={{ width: 340 }}>
                                            <div
                                                style={{
                                                    color: `var(--custom-blue)`,
                                                    fontSize: 24,
                                                    fontWeight: `bold`,
                                                }}
                                            >
                                                {detailsItem.key}
                                            </div>
                                            <div
                                                style={{
                                                    borderWidth: 1,
                                                    borderStyle: `solid`,
                                                    borderColor: `var(--custom-green)`,
                                                    margin: `9px 0 16px`,
                                                }}
                                            ></div>
                                            <div style={{ color: `var(--custom-gray)`, fontSize: 16 }}>
                                                {detailsItem.value}
                                            </div>
                                        </Flex>
                                    ))}
                                </Flex>
                            </Flex>
                        </Flex>
                    </Flex>
                ))}
            </Flex>
        </div>
    );
};

export default ApplicationsAndSolutionsPage;
