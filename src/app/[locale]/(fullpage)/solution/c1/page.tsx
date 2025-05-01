'use client';

import { useParams } from 'next/navigation';
import { useEffect, useRef } from 'react';

/**
 * Components
 */
import Footer from '@/components/footer';
import Header from '@/components/header';

/**
 * Styles
 */
import { Flex, Space } from 'antd';
import styles from '../styles.module.scss';

/**
 * Constants
 */
const items = [
    {
        image: '/static/solution/solution1_01.jpg',
        title: '纯电乘用车解决方案',
        desc1_title: '360Wh/kg',
        desc1_desc: '360Wh/kg：超高镍正极材料搭配最新硅碳负极技术，目前为行业内量产单电芯最高能量密度。',
        desc2_title: '1000KM+',
        desc2_desc: '1000KM+：搭配高能量密度电池的电池包，帮助下游客户实现行业首台续航超过1000KM的量产车型。',
    },
    {
        image: '/static/solution/solution1_02.jpg',
        title: '电动快艇解决方案',
        desc1_title: '7-10C',
        desc1_desc: '7-10C：中镍正极材料搭配搭配第三代硅碳负极技术，电芯可以达到7-10C的放电倍率。',
        desc2_title: '197Wh/Kg',
        desc2_desc: '197Wh/Kg：利用我们的CTP技术，整包电池系统能量密度达到行业最高。',
    },
    {
        image: '/static/solution/solution1_03.jpg',
        title: '电动游艇&轮船解决方案',
        desc1_title: 'XXXXX',
        desc1_desc: 'XXXXXXXXXXXXXXXXXXXX',
        desc2_title: 'XXXXX',
        desc2_desc: 'XXXXXXXXXXXXXXXXXXXX',
    },
    {
        image: '/static/solution/solution1_04.jpg',
        title: '工程机械类解决方案',
        desc1_title: 'XXXXX',
        desc1_desc: 'XXXXXXXXXXXXXXXXXXXX',
        desc2_title: 'XXXXX',
        desc2_desc: 'XXXXXXXXXXXXXXXXXXXX',
    },
    {
        image: '/static/solution/solution1_05.jpg',
        title: '电动摩托车解决方案',
        desc1_title: 'XXXXX',
        desc1_desc: 'XXXXXXXXXXXXXXXXXXXX',
        desc2_title: 'XXXXX',
        desc2_desc: 'XXXXXXXXXXXXXXXXXXXX',
    },
    {
        image: '/static/solution/solution1_06.jpg',
        title: '电动助力车解决方案',
        desc1_title: 'XXXXX',
        desc1_desc: 'XXXXXXXXXXXXXXXXXXXX',
        desc2_title: 'XXXXX',
        desc2_desc: 'XXXXXXXXXXXXXXXXXXXX',
    },
];

export default () => {
    /**
     * Params
     */
    const params = useParams();

    /**
     * Hooks
     */
    const fullpageRef = useRef<HTMLDivElement>(null);

    /**
     * Effects
     */
    useEffect(() => {
        if (fullpageRef.current) {
            // @ts-ignore
            const instance = new fullpage(fullpageRef.current, {
                credits: {
                    enabled: false,
                },
            });

            return () => {
                instance.destroy('all');
            };
        }
    }, [fullpageRef]);

    return (
        <>
            <Header active={true} locale={params.locale as string} />

            <div ref={fullpageRef}>
                {items.map((item, index) => (
                    <div key={index} className="section">
                        <Flex align="center" gap={81} justify="center" style={{ height: '100vh' }} vertical>
                            <Space size={88}>
                                <img alt="" height={308} src={item.image} width={447} />

                                <div className={styles.t4}>{item.title}</div>
                            </Space>

                            <Space size={88}>
                                <div className={styles.con}>
                                    <div className={styles.t5}>{item.desc1_title}</div>

                                    <div className={styles.t6}>{item.desc1_desc}</div>
                                </div>

                                <div className={styles.con}>
                                    <div className={styles.t5}>{item.desc2_title}</div>

                                    <div className={styles.t6}>{item.desc2_desc}</div>
                                </div>
                            </Space>
                        </Flex>
                    </div>
                ))}

                <div className="section fp-auto-height">
                    <Footer />
                </div>
            </div>
        </>
    );
};
