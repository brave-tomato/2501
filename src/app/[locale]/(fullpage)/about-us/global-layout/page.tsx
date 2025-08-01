'use client';

import { useI18n } from '@/locales/client';
import ReactFullpage from '@fullpage/react-fullpage';
import { Col, Flex, Popover, Row, Timeline } from 'antd';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

/**
 * Components
 */
import Footer from '@/components/footer';
import Header from '@/components/header';

/**
 * Styles
 */
import styles from '../styles.module.scss';

export default () => {
    /**
     * Params
     */
    const params = useParams();

    /**
     * Hooks
     */
    const t = useI18n();

    /**
     * States
     */
    const [active, setActive] = useState(false);

    /**
     * Effects
     */
    useEffect(() => {
        return () => {
            // @ts-ignore
            if (window.fullpage_api) {
                // @ts-ignore
                window.fullpage_api.moveTo(1);
            }
        };
    }, []);

    return (
        <>
            <Header active={active} locale={params.locale as string} />

            <Timeline
                items={[
                    {
                        children: '总部&分公司',
                    },
                    {
                        children: '制造生产基地',
                    },
                    {
                        children: '业务范围',
                    },
                    {
                        children: '服务网点',
                    },
                ]}
                style={{ position: 'fixed', top: '30%', left: 70, color: '#fff', zIndex: 1000 }}
            />

            <ReactFullpage
                beforeLeave={(_, destination) => {
                    setActive([1].includes(destination.index));
                }}
                credits={{
                    enabled: false,
                }}
                render={() => (
                    <ReactFullpage.Wrapper>
                        <div className={`section ${styles.global}`}>
                            <Flex align="center" gap={64} justify="center">
                                <div style={{ position: 'relative' }}>
                                    <img alt="" height={574} src="/static/about-us/global-layout/1.png" width={1116} />

                                    <Popover
                                        arrow={false}
                                        classNames={{ body: styles['global-popover-white'] }}
                                        content={
                                            <div>
                                                <span>德国</span>斯图加特
                                            </div>
                                        }
                                        placement="left"
                                    >
                                        <div className={styles['global-layout-point1']}></div>
                                    </Popover>

                                    <Popover
                                        arrow={false}
                                        classNames={{ body: styles['global-popover'] }}
                                        content={
                                            <div>
                                                <span>匈牙利</span>布达佩斯
                                            </div>
                                        }
                                        placement="right"
                                    >
                                        <div className={styles['global-layout-point2']}></div>
                                    </Popover>

                                    <Popover
                                        arrow={false}
                                        classNames={{ body: styles['global-popover-white'] }}
                                        content={
                                            <div>
                                                <span>北京</span>房山
                                            </div>
                                        }
                                        placement="top"
                                    >
                                        <div className={styles['global-layout-point3']}></div>
                                    </Popover>

                                    <Popover
                                        arrow={false}
                                        classNames={{ body: styles['global-popover'] }}
                                        content={
                                            <div>
                                                <span>日本</span>大阪
                                            </div>
                                        }
                                        placement="right"
                                    >
                                        <div className={styles['global-layout-point4']}></div>
                                    </Popover>

                                    <Popover
                                        arrow={false}
                                        classNames={{ body: styles['global-popover-white'] }}
                                        content={
                                            <div>
                                                <span>深圳</span>坪山
                                            </div>
                                        }
                                        placement="right"
                                    >
                                        <div className={styles['global-layout-point5']}></div>
                                    </Popover>

                                    <Popover
                                        arrow={false}
                                        classNames={{ body: styles['global-popover'] }}
                                        content={
                                            <div>
                                                <span>泰国</span>曼谷
                                            </div>
                                        }
                                        placement="bottom"
                                    >
                                        <div className={styles['global-layout-point6']}></div>
                                    </Popover>

                                    <Popover
                                        arrow={false}
                                        classNames={{ body: styles['global-popover'] }}
                                        content={
                                            <div>
                                                <span>澳大利亚</span>堪培拉
                                            </div>
                                        }
                                        placement="right"
                                    >
                                        <div className={styles['global-layout-point7']}></div>
                                    </Popover>
                                </div>

                                <Flex align="center" gap={20} vertical>
                                    <div className={styles.tit01}>● 总部&分公司</div>

                                    <Flex vertical>
                                        <div className={styles.tit02}>总部</div>

                                        <div className={styles.con01}>中国研发总部 北京-房山</div>

                                        <div className={styles.con01}>欧洲总部 德国-斯图加特</div>

                                        <div className={styles.con01}>硫化物研发总部 深圳-坪山</div>
                                    </Flex>

                                    <Flex vertical>
                                        <div className={styles.tit02}>分公司</div>

                                        <div className={styles.con01}>匈牙利-布达佩斯，日本-大阪</div>

                                        <div className={styles.con01}>泰国-曼谷，澳大利亚-堪培拉</div>
                                    </Flex>
                                </Flex>
                            </Flex>
                        </div>

                        <div className={`section ${styles.global}`}>
                            <Flex align="center" gap={64} justify="center">
                                <div style={{ position: 'relative' }}>
                                    <img alt="" height={574} src="/static/about-us/global-layout/2.png" width={1116} />

                                    <Popover
                                        align={{ offset: [100, 0] }}
                                        arrow={false}
                                        classNames={{ body: styles['global-popover2'] }}
                                        content={
                                            <div>
                                                <Flex gap={8} vertical>
                                                    <div>
                                                        <span>北京</span>房山
                                                    </div>

                                                    <div>
                                                        <span>山东</span>淄博
                                                    </div>

                                                    <div>
                                                        <span>江苏</span>溧阳
                                                    </div>

                                                    <div>
                                                        <span>浙江</span>湖州
                                                    </div>

                                                    <div>
                                                        <span>广东</span>珠海
                                                    </div>

                                                    <div>
                                                        <span>绍兴</span>蓝姚
                                                    </div>
                                                </Flex>
                                            </div>
                                        }
                                        placement="right"
                                    >
                                        <div className={styles['global-layout-point8']}></div>
                                    </Popover>
                                </div>

                                <Flex align="center" gap={20} vertical>
                                    <div className={styles.tit01}>● 制造生产基地</div>

                                    <Flex vertical>
                                        <div className={styles.con01}>北京-房山，山东-淄博，江苏-溧阳</div>

                                        <div className={styles.con01}>浙江-湖州，广东-珠海，绍兴-蓝姚</div>
                                    </Flex>
                                </Flex>
                            </Flex>
                        </div>

                        <div className={`section ${styles.global}`}>
                            <Flex align="center" gap={64} justify="center">
                                <div style={{ position: 'relative' }}>
                                    <img alt="" height={574} src="/static/about-us/global-layout/3.png" width={1116} />
                                </div>

                                <Flex align="center" gap={20} vertical>
                                    <div className={styles.tit01}>业务范围</div>

                                    <div className={styles.con01}>
                                        中国、法国、美国、加拿大、英国、荷兰、德国
                                        波兰、奥地利、巴西、匈牙利、希腊、印度、韩国
                                        日本、台湾、泰国、马来西亚、澳大利亚
                                    </div>
                                </Flex>
                            </Flex>
                        </div>

                        <div className={`section ${styles.global}`}>
                            <Flex align="center" gap={64} justify="center">
                                <div style={{ position: 'relative' }}>
                                    <img alt="" height={574} src="/static/about-us/global-layout/4.png" width={1116} />

                                    <Popover
                                        arrow={false}
                                        classNames={{ body: styles['global-popover'] }}
                                        content={
                                            <div>
                                                <span>西班牙</span>巴萨罗那
                                            </div>
                                        }
                                        placement="bottom"
                                    >
                                        <div className={styles['global-layout-point10']}></div>
                                    </Popover>

                                    <Popover
                                        arrow={false}
                                        classNames={{ body: styles['global-popover'] }}
                                        content={
                                            <div>
                                                <span>法国</span>里昂
                                            </div>
                                        }
                                        placement="left"
                                    >
                                        <div className={styles['global-layout-point11']}></div>
                                    </Popover>

                                    <Popover
                                        arrow={false}
                                        classNames={{ body: styles['global-popover'] }}
                                        content={
                                            <div>
                                                <span>荷兰</span>阿姆斯特丹
                                            </div>
                                        }
                                        placement="left"
                                    >
                                        <div className={styles['global-layout-point12']}></div>
                                    </Popover>

                                    <Popover
                                        arrow={false}
                                        classNames={{ body: styles['global-popover'] }}
                                        content={
                                            <div>
                                                <span>德国</span>杜塞尔多夫
                                            </div>
                                        }
                                        placement="right"
                                    >
                                        <div className={styles['global-layout-point13']}></div>
                                    </Popover>

                                    <Popover
                                        arrow={false}
                                        classNames={{ body: styles['global-popover'] }}
                                        content={
                                            <div>
                                                <span>波兰</span>华沙
                                            </div>
                                        }
                                        placement="top"
                                    >
                                        <div className={styles['global-layout-point14']}></div>
                                    </Popover>

                                    <Popover
                                        arrow={false}
                                        classNames={{ body: styles['global-popover'] }}
                                        content={
                                            <div>
                                                <span>土耳其</span>伊斯坦布尔
                                            </div>
                                        }
                                        placement="right"
                                    >
                                        <div className={styles['global-layout-point15']}></div>
                                    </Popover>

                                    <Popover
                                        arrow={false}
                                        classNames={{ body: styles['global-popover'] }}
                                        content={
                                            <div>
                                                <span>韩国</span>大邱
                                            </div>
                                        }
                                        placement="top"
                                    >
                                        <div className={styles['global-layout-point16']}></div>
                                    </Popover>

                                    <Popover
                                        arrow={false}
                                        classNames={{ body: styles['global-popover'] }}
                                        content={
                                            <div>
                                                <span>日本</span>东京
                                            </div>
                                        }
                                        placement="right"
                                    >
                                        <div className={styles['global-layout-point17']}></div>
                                    </Popover>

                                    <Popover
                                        arrow={false}
                                        classNames={{ body: styles['global-popover'] }}
                                        content={
                                            <div>
                                                <span>越南</span>胡志明
                                            </div>
                                        }
                                        placement="right"
                                    >
                                        <div className={styles['global-layout-point18']}></div>
                                    </Popover>

                                    <Popover
                                        arrow={false}
                                        classNames={{ body: styles['global-popover'] }}
                                        content={
                                            <div>
                                                <span>马来西亚</span>吉隆坡
                                            </div>
                                        }
                                        placement="left"
                                    >
                                        <div className={styles['global-layout-point19']}></div>
                                    </Popover>

                                    <Popover
                                        arrow={false}
                                        classNames={{ body: styles['global-popover'] }}
                                        content={
                                            <div>
                                                <span>新加坡</span>
                                            </div>
                                        }
                                        placement="bottom"
                                    >
                                        <div className={styles['global-layout-point20']}></div>
                                    </Popover>
                                </div>

                                <Flex align="center" gap={20} vertical>
                                    <div className={styles.tit01}>● 服务网点</div>

                                    <div className={styles.con01}>
                                        德国-杜塞尔多夫，法国-里昂，波兰-华沙 荷兰-阿姆斯特丹，西班牙-巴萨罗那
                                        土耳其-伊斯坦布尔，日本-东京，新加坡 马来西亚-吉隆坡，越南-胡志明，韩国-大邱
                                    </div>
                                </Flex>
                            </Flex>
                        </div>

                        <div className="section fp-auto-height">
                            <Footer />
                        </div>
                    </ReactFullpage.Wrapper>
                )}
            />
        </>
    );
};
