'use client';

import classNames from 'classnames';
import { useEffect, useRef } from 'react';

/**
 * Components
 */
import Footer from '@/components/footer';
import { Title5 } from '@/components/headline';

/**
 * Styles
 */
import { Flex } from 'antd';
import styles from './styles.module.scss';

export default () => {
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
                afterLoad: (_: any, destination: any) => {
                    if ([1, 2].includes(destination.index)) {
                        destination.item.querySelectorAll(':scope > * > *').forEach((element: HTMLElement) => {
                            element.classList.add(styles.slideTopN50P);
                        });
                    }
                },
            });

            return () => {
                instance.destroy('all');
            };
        }
    }, [fullpageRef]);

    return (
        <div ref={fullpageRef}>
            <div className={classNames('section', styles.bg1)}>
                <Title5
                    className={styles.slideTop}
                    style={{
                        position: 'absolute',
                        top: '25%',
                        left: '9.5833%',
                    }}
                    subtitle="人才与创新是卫蓝聚焦未来技术的基础"
                    title="固态电池产业化"
                />
            </div>

            <div className={classNames('section', styles.bg2)}>
                <Flex align="center" className={styles.t} gap={16} vertical>
                    <img alt="" height={82} src="/static/research/technology_bg2_icon.svg" width={82} />

                    <div className={styles.t1}>人才生态</div>

                    <div className={styles.t2}>
                        总人数，RD人数，PHD人数
                        <br />
                        international 人数
                    </div>
                </Flex>
            </div>

            <div className={classNames('section', styles.bg3)}>
                <Flex align="center" className={styles.t} gap={16} vertical>
                    <img alt="" height={82} src="/static/research/technology_bg3_icon.svg" width={82} />

                    <div className={styles.t1}>专利生态</div>

                    <div className={styles.t2}>
                        发明专利占比，授权专利占比，
                        <br />
                        海外专利占比，文章paper发表，
                        <br />
                        标准制定
                    </div>
                </Flex>
            </div>

            <div className="section fp-auto-height">
                <Footer />
            </div>
        </div>
    );
};
