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

    const [currentSection, setCurrentSection] = useState(0);

    const [showPopovers, setShowPopovers] = useState(true);

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
                        { key: 0, label: t('about.globalLayout.selectAll') },
                        { key: 1, label: t('about.globalLayout.headquarters') },
                        { key: 2, label: t('about.globalLayout.manufacturing') },
                        { key: 3, label: t('about.globalLayout.businessScope') },
                        { key: 4, label: t('about.globalLayout.servicePoints') },
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
                beforeLeave={(origin, destination) => {
                    if (origin.index === 0 && destination.index !== 0) {
                        setShowPopovers(false);
                    }
                }}
                afterLoad={(origin, destination) => {
                    setCurrentSection(destination.index);
                    if (destination.index === 0) {
                        setShowPopovers(true);
                    }
                }}
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
                                                width={1117}
                                            />

                                            <Popover
                                                arrow={false}
                                                classNames={{ body: styles.gp1 }}
                                                content={
                                                    <div>
                                                        <span>{t('about.globalLayout.spain')}</span>
                                                        {t('about.globalLayout.barcelona')}
                                                    </div>
                                                }
                                                open={showPopovers}
                                                placement="left"
                                            >
                                                <div className={styles.glp01}></div>
                                            </Popover>

                                            <Popover
                                                arrow={false}
                                                classNames={{ body: styles.gp1 }}
                                                content={
                                                    <div>
                                                        <span>{t('about.globalLayout.france')}</span>
                                                        {t('about.globalLayout.lyon')}
                                                    </div>
                                                }
                                                open={showPopovers}
                                                placement="left"
                                            >
                                                <div className={styles.glp02}></div>
                                            </Popover>

                                            <Popover
                                                arrow={false}
                                                classNames={{ body: styles.gp1 }}
                                                content={
                                                    <div>
                                                        <span>{t('about.globalLayout.netherlands')}</span>
                                                        {t('about.globalLayout.amsterdam')}
                                                    </div>
                                                }
                                                open={showPopovers}
                                                placement="topRight"
                                            >
                                                <div className={styles.glp03}></div>
                                            </Popover>

                                            <Popover
                                                arrow={false}
                                                classNames={{ body: styles.gp2 }}
                                                content={
                                                    <div>
                                                        <span>{t('about.globalLayout.germany')}</span>
                                                        {t('about.globalLayout.stuttgart')}
                                                    </div>
                                                }
                                                open={showPopovers}
                                                placement="left"
                                            >
                                                <div className={styles.glp04}></div>
                                            </Popover>

                                            <Popover
                                                arrow={false}
                                                classNames={{ body: styles.gp1 }}
                                                content={
                                                    <div>
                                                        <span>{t('about.globalLayout.poland')}</span>
                                                        {t('about.globalLayout.warsaw')}
                                                    </div>
                                                }
                                                open={showPopovers}
                                                placement="top"
                                            >
                                                <div className={styles.glp05}></div>
                                            </Popover>

                                            <Popover
                                                arrow={false}
                                                classNames={{ body: styles.gp3 }}
                                                content={
                                                    <div>
                                                        <span>{t('about.globalLayout.hungary')}</span>
                                                        {t('about.globalLayout.budapest')}
                                                    </div>
                                                }
                                                open={showPopovers}
                                                placement="bottom"
                                            >
                                                <div className={styles.glp06}></div>
                                            </Popover>

                                            <Popover
                                                arrow={false}
                                                classNames={{ body: styles.gp1 }}
                                                content={
                                                    <div>
                                                        <span>{t('about.globalLayout.turkey')}</span>
                                                        {t('about.globalLayout.istanbul')}
                                                    </div>
                                                }
                                                open={showPopovers}
                                                placement="right"
                                            >
                                                <div className={styles.glp07}></div>
                                            </Popover>

                                            <Popover
                                                arrow={false}
                                                classNames={{ body: styles.gp2 }}
                                                content={
                                                    <div>
                                                        <span>{t('about.globalLayout.beijing')}</span>
                                                        {t('about.globalLayout.fangshan')}
                                                    </div>
                                                }
                                                open={showPopovers}
                                                placement="left"
                                            >
                                                <div className={styles.glp08}></div>
                                            </Popover>

                                            <Popover
                                                arrow={false}
                                                classNames={{ body: styles.gp1 }}
                                                content={
                                                    <div>
                                                        <span>{t('about.globalLayout.southKorea')}</span>
                                                        {t('about.globalLayout.daegu')}
                                                    </div>
                                                }
                                                open={showPopovers}
                                                placement="topLeft"
                                            >
                                                <div className={styles.glp09}></div>
                                            </Popover>

                                            <Popover
                                                arrow={false}
                                                classNames={{ body: styles.gp3 }}
                                                content={
                                                    <div>
                                                        <span>{t('about.globalLayout.japan')}</span>
                                                        {t('about.globalLayout.osaka')}
                                                    </div>
                                                }
                                                open={showPopovers}
                                                placement="right"
                                            >
                                                <div className={styles.glp10}></div>
                                            </Popover>

                                            <Popover
                                                arrow={false}
                                                classNames={{ body: styles.gp2 }}
                                                content={
                                                    <div>
                                                        <span>{t('about.globalLayout.shenzhen')}</span>
                                                        {t('about.globalLayout.pingshan')}
                                                    </div>
                                                }
                                                open={showPopovers}
                                                placement="top"
                                            >
                                                <div className={styles.glp11}></div>
                                            </Popover>

                                            <Popover
                                                arrow={false}
                                                classNames={{ body: styles.gp3 }}
                                                content={
                                                    <div>
                                                        <span>{t('about.globalLayout.thailand')}</span>
                                                        {t('about.globalLayout.bangkok')}
                                                    </div>
                                                }
                                                open={showPopovers}
                                                placement="topRight"
                                            >
                                                <div className={styles.glp12}></div>
                                            </Popover>

                                            <Popover
                                                arrow={false}
                                                classNames={{ body: styles.gp1 }}
                                                content={
                                                    <div>
                                                        <span>{t('about.globalLayout.vietnam')}</span>
                                                        {t('about.globalLayout.hoChiMinh')}
                                                    </div>
                                                }
                                                open={showPopovers}
                                                placement="right"
                                            >
                                                <div className={styles.glp13}></div>
                                            </Popover>

                                            <Popover
                                                arrow={false}
                                                classNames={{ body: styles.gp1 }}
                                                content={
                                                    <div>
                                                        <span>{t('about.globalLayout.malaysia')}</span>
                                                        {t('about.globalLayout.kualaLumpur')}
                                                    </div>
                                                }
                                                open={showPopovers}
                                                placement="left"
                                            >
                                                <div className={styles.glp14}></div>
                                            </Popover>

                                            <Popover
                                                arrow={false}
                                                classNames={{ body: styles.gp1 }}
                                                content={
                                                    <div>
                                                        <span>{t('about.globalLayout.singapore')}</span>
                                                    </div>
                                                }
                                                open={showPopovers}
                                                placement="bottom"
                                            >
                                                <div className={styles.glp15}></div>
                                            </Popover>

                                            <Popover
                                                arrow={false}
                                                classNames={{ body: styles.gp3 }}
                                                content={
                                                    <div>
                                                        <span>{t('about.globalLayout.australia')}</span>
                                                        {t('about.globalLayout.canberra')}
                                                    </div>
                                                }
                                                open={showPopovers}
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
                                                width={1117}
                                            />

                                            <Popover
                                                arrow={false}
                                                classNames={{ body: styles['global-popover-white'] }}
                                                content={
                                                    <div>
                                                        <span>{t('about.globalLayout.germany')}</span>
                                                        {t('about.globalLayout.stuttgart')}
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
                                                        <span>{t('about.globalLayout.hungary')}</span>
                                                        {t('about.globalLayout.budapest')}
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
                                                        <span>{t('about.globalLayout.beijing')}</span>
                                                        {t('about.globalLayout.fangshan')}
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
                                                        <span>{t('about.globalLayout.japan')}</span>
                                                        {t('about.globalLayout.osaka')}
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
                                                        <span>{t('about.globalLayout.shenzhen')}</span>
                                                        {t('about.globalLayout.pingshan')}
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
                                                        <span>{t('about.globalLayout.thailand')}</span>
                                                        {t('about.globalLayout.bangkok')}
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
                                                        <span>{t('about.globalLayout.australia')}</span>
                                                        {t('about.globalLayout.canberra')}
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
                                                width={1117}
                                            />

                                            <Popover
                                                align={{ offset: [100, 0] }}
                                                arrow={false}
                                                classNames={{ body: styles['global-popover2'] }}
                                                content={
                                                    <div>
                                                        <Flex gap={8} vertical>
                                                            <div>
                                                                <span>{t('about.globalLayout.beijing')}</span>
                                                                {t('about.globalLayout.fangshan')}
                                                            </div>

                                                            <div>
                                                                <span>{t('about.globalLayout.shandong')}</span>
                                                                {t('about.globalLayout.zibo')}
                                                            </div>

                                                            <div>
                                                                <span>{t('about.globalLayout.jiangsu')}</span>
                                                                {t('about.globalLayout.liyang')}
                                                            </div>

                                                            <div>
                                                                <span>{t('about.globalLayout.zhejiang')}</span>
                                                                {t('about.globalLayout.huzhou')}
                                                            </div>

                                                            <div>
                                                                <span>{t('about.globalLayout.guangdong')}</span>
                                                                {t('about.globalLayout.zhuhai')}
                                                            </div>

                                                            <div>
                                                                <span>{t('about.globalLayout.shaoxing')}</span>
                                                                {t('about.globalLayout.lanyao')}
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
                                                width={1117}
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
                                                width={1117}
                                            />

                                            <Popover
                                                arrow={false}
                                                classNames={{ body: styles['global-popover'] }}
                                                content={
                                                    <div>
                                                        <span>{t('about.globalLayout.spain')}</span>
                                                        {t('about.globalLayout.barcelona')}
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
                                                        <span>{t('about.globalLayout.france')}</span>
                                                        {t('about.globalLayout.lyon')}
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
                                                        <span>{t('about.globalLayout.netherlands')}</span>
                                                        {t('about.globalLayout.amsterdam')}
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
                                                        <span>{t('about.globalLayout.germany')}</span>
                                                        {t('about.globalLayout.dusseldorf')}
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
                                                        <span>{t('about.globalLayout.poland')}</span>
                                                        {t('about.globalLayout.warsaw')}
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
                                                        <span>{t('about.globalLayout.turkey')}</span>
                                                        {t('about.globalLayout.istanbul')}
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
                                                        <span>{t('about.globalLayout.southKorea')}</span>
                                                        {t('about.globalLayout.daegu')}
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
                                                        <span>{t('about.globalLayout.japan')}</span>
                                                        {t('about.globalLayout.tokyo')}
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
                                                        <span>{t('about.globalLayout.vietnam')}</span>
                                                        {t('about.globalLayout.hoChiMinh')}
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
                                                        <span>{t('about.globalLayout.malaysia')}</span>
                                                        {t('about.globalLayout.kualaLumpur')}
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
                                                        <span>{t('about.globalLayout.singapore')}</span>
                                                    </div>
                                                }
                                                placement="bottom"
                                            >
                                                <div className={styles['global-layout-point20']}></div>
                                            </Popover>
                                        </>
                                    )}
                                </div>

                                <div style={{ width: '340px' }}>
                                    {/* 全选内容 */}
                                    {currentTab === 0 && (
                                        <Flex gap={10} vertical>
                                            <div className={styles.tit01}>
                                                <span style={{ color: '#FF3539' }}>●</span>
                                                {t('about.globalLayout.headquartersTitle')}
                                            </div>

                                            <div className={styles.tit01}>
                                                <span>●</span>
                                                {t('about.globalLayout.branchesTitle')}
                                            </div>

                                            <div className={styles.tit01}>
                                                <span>■</span>
                                                {t('about.globalLayout.businessScope')}
                                            </div>

                                            <div className={styles.tit01}>
                                                <span style={{ color: '#fff' }}>●</span>
                                                {t('about.globalLayout.servicePoints')}
                                            </div>
                                        </Flex>
                                    )}

                                    {/* 总部&分公司内容 */}
                                    {currentTab === 1 && (
                                        <Flex align="center" gap={20} vertical>
                                            <div className={styles.tit01}>●{t('about.globalLayout.headquarters')}</div>

                                            <Flex vertical>
                                                <div className={styles.tit02}>
                                                    {t('about.globalLayout.headquartersTitle')}
                                                </div>

                                                <div className={styles.con01}>
                                                    {t('about.globalLayout.headquartersDesc1')}
                                                </div>

                                                <div className={styles.con01}>
                                                    {t('about.globalLayout.headquartersDesc2')}
                                                </div>

                                                <div className={styles.con01}>
                                                    {t('about.globalLayout.headquartersDesc3')}
                                                </div>
                                            </Flex>

                                            <Flex vertical>
                                                <div className={styles.tit02}>
                                                    {t('about.globalLayout.branchesTitle')}
                                                </div>

                                                <div className={styles.con01}>
                                                    {t('about.globalLayout.branchesDesc1')}
                                                </div>

                                                <div className={styles.con01}>
                                                    {t('about.globalLayout.branchesDesc2')}
                                                </div>
                                            </Flex>
                                        </Flex>
                                    )}

                                    {/* 制造生产基地内容 */}
                                    {currentTab === 2 && (
                                        <Flex align="center" gap={20} vertical>
                                            <div className={styles.tit01}>●{t('about.globalLayout.manufacturing')}</div>

                                            <Flex vertical>
                                                <div className={styles.con01}>
                                                    {t('about.globalLayout.manufacturingDesc1')}
                                                </div>

                                                <div className={styles.con01}>
                                                    {t('about.globalLayout.manufacturingDesc2')}
                                                </div>
                                            </Flex>
                                        </Flex>
                                    )}

                                    {/* 业务范围内容 */}
                                    {currentTab === 3 && (
                                        <Flex align="center" gap={20} vertical>
                                            <div className={styles.tit01}>{t('about.globalLayout.businessScope')}</div>

                                            <div className={styles.con01}>
                                                {t('about.globalLayout.businessScopeDesc')}
                                            </div>
                                        </Flex>
                                    )}

                                    {/* 服务网点内容 */}
                                    {currentTab === 4 && (
                                        <Flex align="center" gap={20} vertical>
                                            <div className={styles.tit01}>●{t('about.globalLayout.servicePoints')}</div>

                                            <div className={styles.con01}>
                                                {t('about.globalLayout.servicePointsDesc')}
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
