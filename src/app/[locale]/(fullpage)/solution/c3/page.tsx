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
        image: '/static/solution/solution2_01.jpg',
        title: 'XXX 解决方案',
        desc1_title: 'XXXXX',
        desc1_desc: 'XXXXXXXXXXXXXXXXXXXX',
        desc2_title: 'XXXXX',
        desc2_desc: 'XXXXXXXXXXXXXXXXXXXX',
    },
    {
        image: '/static/solution/solution2_02.jpg',
        title: 'XXX 解决方案',
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
