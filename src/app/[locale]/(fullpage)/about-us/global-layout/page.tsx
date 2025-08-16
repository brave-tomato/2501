'use client';

import { useI18n } from '@/locales/client';
import ReactFullpage from '@fullpage/react-fullpage';
import { Col, Flex, Popover, Row } from 'antd';
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
    const [active, setActive] = useState(true);

    const [currentTab, setCurrentTab] = useState(0);

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

            <div style={{ position: 'fixed', top: '30%', left: 70, zIndex: 1000 }}>
                <div style={{ position: 'relative' }}>
                    {/* 垂直连接线 */}
                    <div
                        style={{
                            position: 'absolute',
                            left: '4.5px', // 9px 圆点的中心位置
                            top: '4.5px', // 从第一个圆点的中心开始
                            height: 'calc(100% - 9px)', // 延伸到最后一个圆点的中心
                            width: '1px',
                            background: '#FFFFFF',
                        }}
                    />
                    
                    {[
                        { key: 0, label: '全选' },
                        { key: 1, label: '总部&分公司' },
                        { key: 2, label: '制造生产基地' },
                        { key: 3, label: '业务范围' },
                        { key: 4, label: '服务网点' },
                    ].map((item, index) => (
                        <div
                            key={item.key}
                            onClick={() => setCurrentTab(item.key)}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                cursor: 'pointer',
                                marginBottom: index === 4 ? 0 : '40px',
                                position: 'relative',
                                zIndex: 1,
                            }}
                        >
                            {/* 圆点 */}
                            <div style={{ position: 'relative', marginRight: '16px' }}>
                                {/* 外层模糊圆 */}
                                <div
                                    style={{
                                        position: 'absolute',
                                        width: '13px',
                                        height: '13px',
                                        borderRadius: '50%',
                                        backgroundColor: currentTab === item.key ? '#1890ff' : '#FFFFFF',
                                        filter: 'blur(2px)',
                                        top: '-2px',
                                        left: '-2px',
                                        transition: 'all 0.3s ease',
                                    }}
                                />
                                
                                {/* 内层实心圆 */}
                                <div
                                    style={{
                                        position: 'relative',
                                        width: '9px',
                                        height: '9px',
                                        borderRadius: '50%',
                                        backgroundColor: currentTab === item.key ? '#1890ff' : '#FFFFFF',
                                        border: '0.5px solid #103675',
                                        boxSizing: 'border-box',
                                        transition: 'all 0.3s ease',
                                        zIndex: 1,
                                    }}
                                />
                            </div>
                            
                            {/* 文字标签 */}
                            <div
                                style={{
                                    fontWeight: currentTab === item.key ? 600 : 600,
                                    fontSize: '12px',
                                    lineHeight: '20px',
                                    color: currentTab === item.key ? '#1890ff' : '#FFFFFF',
                                    transition: 'all 0.3s ease',
                                }}
                            >
                                {item.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className={styles.globalBackground}>
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    poster="/static/about-us/bg_global.png"
                    style={{
                        position: 'absolute',
                        inset: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                    }}
                >
                    <source src="https://files.welion.asia/about-us/bg_global.mp4" type="video/mp4" />
                </video>
            </div>

            <ReactFullpage
                credits={{
                    enabled: false,
                }}
                render={() => (
                    <ReactFullpage.Wrapper>
                        <div className={`section ${styles.global}`}>
                            <Flex align="center" gap={64} justify="center">
                                <div style={{ position: 'relative' }}>
                                    {/* 全选 - 显示所有地图点 */}
                                    {currentTab === 0 && (
                                        <>
                                            <img
                                                alt=""
                                                height={574}
                                                src="/static/about-us/global-layout/3.png"
                                                width={1116}
                                            />

                                            <Popover
                                                arrow={false}
                                                classNames={{ body: styles.gp1 }}
                                                content={
                                                    <div>
                                                        <span>西班牙</span>巴萨罗那
                                                    </div>
                                                }
                                                open={true}
                                                placement="left"
                                            >
                                                <div className={styles.glp01}></div>
                                            </Popover>

                                            <Popover
                                                arrow={false}
                                                classNames={{ body: styles.gp1 }}
                                                content={
                                                    <div>
                                                        <span>法国</span>里昂
                                                    </div>
                                                }
                                                open={true}
                                                placement="left"
                                            >
                                                <div className={styles.glp02}></div>
                                            </Popover>

                                            <Popover
                                                arrow={false}
                                                classNames={{ body: styles.gp1 }}
                                                content={
                                                    <div>
                                                        <span>荷兰</span>阿姆斯特丹
                                                    </div>
                                                }
                                                open={true}
                                                placement="topRight"
                                            >
                                                <div className={styles.glp03}></div>
                                            </Popover>

                                            <Popover
                                                arrow={false}
                                                classNames={{ body: styles.gp2 }}
                                                content={
                                                    <div>
                                                        <span>德国</span>斯图加特
                                                    </div>
                                                }
                                                open={true}
                                                placement="left"
                                            >
                                                <div className={styles.glp04}></div>
                                            </Popover>

                                            <Popover
                                                arrow={false}
                                                classNames={{ body: styles.gp1 }}
                                                content={
                                                    <div>
                                                        <span>波兰</span>华沙
                                                    </div>
                                                }
                                                open={true}
                                                placement="top"
                                            >
                                                <div className={styles.glp05}></div>
                                            </Popover>

                                            <Popover
                                                arrow={false}
                                                classNames={{ body: styles.gp3 }}
                                                content={
                                                    <div>
                                                        <span>匈牙利</span>布达佩斯
                                                    </div>
                                                }
                                                open={true}
                                                placement="bottom"
                                            >
                                                <div className={styles.glp06}></div>
                                            </Popover>

                                            <Popover
                                                arrow={false}
                                                classNames={{ body: styles.gp1 }}
                                                content={
                                                    <div>
                                                        <span>土耳其</span>伊斯坦布尔
                                                    </div>
                                                }
                                                open={true}
                                                placement="right"
                                            >
                                                <div className={styles.glp07}></div>
                                            </Popover>

                                            <Popover
                                                arrow={false}
                                                classNames={{ body: styles.gp2 }}
                                                content={
                                                    <div>
                                                        <span>北京</span>房山
                                                    </div>
                                                }
                                                open={true}
                                                placement="left"
                                            >
                                                <div className={styles.glp08}></div>
                                            </Popover>

                                            <Popover
                                                arrow={false}
                                                classNames={{ body: styles.gp1 }}
                                                content={
                                                    <div>
                                                        <span>韩国</span>大邱
                                                    </div>
                                                }
                                                open={true}
                                                placement="topLeft"
                                            >
                                                <div className={styles.glp09}></div>
                                            </Popover>

                                            <Popover
                                                arrow={false}
                                                classNames={{ body: styles.gp3 }}
                                                content={
                                                    <div>
                                                        <span>日本</span>大阪
                                                    </div>
                                                }
                                                open={true}
                                                placement="right"
                                            >
                                                <div className={styles.glp10}></div>
                                            </Popover>

                                            <Popover
                                                arrow={false}
                                                classNames={{ body: styles.gp2 }}
                                                content={
                                                    <div>
                                                        <span>深圳</span>坪山
                                                    </div>
                                                }
                                                open={true}
                                                placement="top"
                                            >
                                                <div className={styles.glp11}></div>
                                            </Popover>

                                            <Popover
                                                arrow={false}
                                                classNames={{ body: styles.gp3 }}
                                                content={
                                                    <div>
                                                        <span>泰国</span>曼谷
                                                    </div>
                                                }
                                                open={true}
                                                placement="topRight"
                                            >
                                                <div className={styles.glp12}></div>
                                            </Popover>

                                            <Popover
                                                arrow={false}
                                                classNames={{ body: styles.gp1 }}
                                                content={
                                                    <div>
                                                        <span>越南</span>胡志明
                                                    </div>
                                                }
                                                open={true}
                                                placement="right"
                                            >
                                                <div className={styles.glp13}></div>
                                            </Popover>

                                            <Popover
                                                arrow={false}
                                                classNames={{ body: styles.gp1 }}
                                                content={
                                                    <div>
                                                        <span>马来西亚</span>吉隆坡
                                                    </div>
                                                }
                                                open={true}
                                                placement="left"
                                            >
                                                <div className={styles.glp14}></div>
                                            </Popover>

                                            <Popover
                                                arrow={false}
                                                classNames={{ body: styles.gp1 }}
                                                content={
                                                    <div>
                                                        <span>新加坡</span>
                                                    </div>
                                                }
                                                open={true}
                                                placement="bottom"
                                            >
                                                <div className={styles.glp15}></div>
                                            </Popover>

                                            <Popover
                                                arrow={false}
                                                classNames={{ body: styles.gp3 }}
                                                content={
                                                    <div>
                                                        <span>澳大利亚</span>堪培拉
                                                    </div>
                                                }
                                                open={true}
                                                placement="right"
                                            >
                                                <div className={styles.glp16}></div>
                                            </Popover>
                                        </>
                                    )}

                                    {/* 总部&分公司 */}
                                    {currentTab === 1 && (
                                        <>
                                            <img
                                                alt=""
                                                height={574}
                                                src="/static/about-us/global-layout/1.png"
                                                width={1116}
                                            />

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
                                        </>
                                    )}

                                    {/* 制造生产基地 */}
                                    {currentTab === 2 && (
                                        <>
                                            <img
                                                alt=""
                                                height={574}
                                                src="/static/about-us/global-layout/2.png"
                                                width={1116}
                                            />

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
                                        </>
                                    )}

                                    {/* 业务范围 */}
                                    {currentTab === 3 && (
                                        <>
                                            <img
                                                alt=""
                                                height={574}
                                                src="/static/about-us/global-layout/3.png"
                                                width={1116}
                                            />
                                        </>
                                    )}

                                    {/* 服务网点 */}
                                    {currentTab === 4 && (
                                        <>
                                            <img
                                                alt=""
                                                height={574}
                                                src="/static/about-us/global-layout/4.png"
                                                width={1116}
                                            />

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
                                        </>
                                    )}
                                </div>

                                <div style={{ width: '320px' }}>
                                    {/* 全选内容 */}
                                    {currentTab === 0 && (
                                        <Flex gap={20} vertical>
                                            <div className={styles.tit01}>
                                                <span style={{ color: '#FF3539' }}>●</span> 总部
                                            </div>

                                            <div className={styles.tit01}>
                                                <span>●</span> 分公司
                                            </div>

                                            <div className={styles.tit01}>
                                                <span>■</span> 业务范围
                                            </div>

                                            <div className={styles.tit01}>
                                                <span style={{ color: '#fff' }}>●</span> 服务网点
                                            </div>
                                        </Flex>
                                    )}

                                    {/* 总部&分公司内容 */}
                                    {currentTab === 1 && (
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
                                    )}

                                    {/* 制造生产基地内容 */}
                                    {currentTab === 2 && (
                                        <Flex align="center" gap={20} vertical>
                                            <div className={styles.tit01}>● 制造生产基地</div>

                                            <Flex vertical>
                                                <div className={styles.con01}>北京-房山，山东-淄博，江苏-溧阳</div>

                                                <div className={styles.con01}>浙江-湖州，广东-珠海，绍兴-蓝姚</div>
                                            </Flex>
                                        </Flex>
                                    )}

                                    {/* 业务范围内容 */}
                                    {currentTab === 3 && (
                                        <Flex align="center" gap={20} vertical>
                                            <div className={styles.tit01}>业务范围</div>

                                            <div className={styles.con01}>
                                                中国、法国、美国、加拿大、英国、荷兰、德国
                                                波兰、奥地利、巴西、匈牙利、希腊、印度、韩国
                                                日本、台湾、泰国、马来西亚、澳大利亚
                                            </div>
                                        </Flex>
                                    )}

                                    {/* 服务网点内容 */}
                                    {currentTab === 4 && (
                                        <Flex align="center" gap={20} vertical>
                                            <div className={styles.tit01}>● 服务网点</div>

                                            <div className={styles.con01}>
                                                德国-杜塞尔多夫，法国-里昂，波兰-华沙 荷兰-阿姆斯特丹，西班牙-巴萨罗那
                                                土耳其-伊斯坦布尔，日本-东京，新加坡
                                                马来西亚-吉隆坡，越南-胡志明，韩国-大邱
                                            </div>
                                        </Flex>
                                    )}
                                </div>
                            </Flex>
                        </div>

                        <div className="section fp-auto-height" style={{ background: '#fff' }}>
                            <Footer />
                        </div>
                    </ReactFullpage.Wrapper>
                )}
            />
        </>
    );
};
