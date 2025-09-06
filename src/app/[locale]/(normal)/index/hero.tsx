'use client';

import { useSessionStorageState, useSetState } from 'ahooks';
import { Modal, Popover } from 'antd';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useEffect } from 'react';

/**
 * Components
 */
import AspectRatio from '@/components/aspect-ratio';

/**
 * Styles
 */
import styles from './styles.module.scss';

interface HeroProps {
    onVideoReady?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onVideoReady }) => {
    /**
     * Params
     */
    const params = useParams();

    /**
     * States
     */
    const [display, setDisplay] = useSessionStorageState<'block' | 'none'>('video-display', {
        defaultValue: 'block',
    });

    const [state, setState] = useSetState({
        poster: '',
        url: '',
        open: false,
    });

    /**
     * Effects
     */
    useEffect(() => {
        const checkTime = () => {
            const hour = new Date().getHours();

            setState({
                poster: hour >= 20 || hour < 6 ? '/static/index/night_poster.png' : '/static/index/day_poster.png',
                url:
                    hour >= 20 || hour < 6
                        ? 'https://files.welion.asia/index/night.mp4'
                        : 'https://files.welion.asia/index/day.mp4',
            });
        };

        checkTime();

        const timer = setInterval(checkTime, 60_000);

        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        document.body.style.overflow = display === 'block' ? 'hidden' : '';

        return () => {
            document.body.style.overflow = '';
        };
    }, [display]);

    // 视频判定完成后通知父组件
    useEffect(() => {
        // 如果视频已经被设置为隐藏（之前播放过），立即通知
        if (display === 'none') {
            onVideoReady?.();
        }
        // 如果视频是显示状态，等待视频播放结束后通知
        // 这个通知会在 onEnded 事件中处理
    }, [display, onVideoReady]);

    return (
        <>
            <video
                autoPlay
                muted
                playsInline
                poster="/static/index/poster.png"
                style={{
                    display,
                    position: 'fixed',
                    inset: 0,
                    zIndex: 1002,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                }}
                onEnded={() => {
                    setDisplay('none');
                    onVideoReady?.();
                }}
            >
                <source src="https://files.welion.asia/index/logo.mp4" type="video/mp4" />
            </video>

            <AspectRatio ratio={1920 / 1080}>
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    poster={state.poster}
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                    }}
                >
                    {state.url ? <source src={state.url} type="video/mp4" /> : null}
                </video>

                {/* 点位 1 */}
                <Popover
                    arrow={false}
                    classNames={{ body: styles.pointPopover }}
                    content={<Link href={`/${params.locale}/about-us/`}>企业简介</Link>}
                >
                    <div className={`${styles.point} ${styles.point1}`} />
                </Popover>

                {/* 点位 2 */}
                <Popover
                    arrow={false}
                    classNames={{ body: styles.pointPopover }}
                    content={<Link href={`/${params.locale}/solution/a1/`}>纯电乘用车解决方案</Link>}
                    placement="right"
                >
                    <div className={`${styles.point} ${styles.point2}`} />
                </Popover>

                {/* 点位 3 */}
                <Popover
                    arrow={false}
                    classNames={{ body: styles.pointPopover }}
                    content={<Link href={`/${params.locale}/solution/a1/#anchor-4`}>电动摩托⻋解决⽅案</Link>}
                >
                    <div className={`${styles.point} ${styles.point3}`} />
                </Popover>

                {/* 点位 4 */}
                <Popover
                    arrow={false}
                    classNames={{ body: styles.pointPopover }}
                    content={<Link href={`/${params.locale}/solution/a1/#anchor-5`}>电动助⼒⻋解决⽅案</Link>}
                >
                    <div className={`${styles.point} ${styles.point4}`} />
                </Popover>

                {/* 点位 5 */}
                {/* <Popover
                    arrow={false}
                    classNames={{ body: styles.pointPopover }}
                    content={<Link href="/">点位 5</Link>}
                >
                    <div className={`${styles.point} ${styles.point5}`} />
                </Popover> */}

                {/* 点位 6 */}
                <Popover
                    arrow={false}
                    classNames={{ body: styles.pointPopover }}
                    content={<Link href={`/${params.locale}/solution/a2/#anchor-1`}>EVTOL 解决方案</Link>}
                >
                    <div className={`${styles.point} ${styles.point6}`} />
                </Popover>

                {/* 点位 7 */}
                <Popover
                    arrow={false}
                    classNames={{ body: styles.pointPopover }}
                    content={<Link href={`/${params.locale}/solution/a1/#anchor-3`}>⼯程机械类解决⽅案</Link>}
                >
                    <div className={`${styles.point} ${styles.point7}`} />
                </Popover>

                {/* 点位 8 */}
                <Popover
                    arrow={false}
                    classNames={{ body: styles.pointPopover }}
                    content={<Link href={`/${params.locale}/solution/a2/#anchor-0`}>工业&植保无人机解决方案</Link>}
                >
                    <div className={`${styles.point} ${styles.point8}`} />
                </Popover>

                {/* 点位 9 */}
                <Popover
                    arrow={false}
                    classNames={{ body: styles.pointPopover }}
                    content={<Link href={`/${params.locale}/research/`}>固态电池研发</Link>}
                >
                    <div className={`${styles.point} ${styles.point9}`} />
                </Popover>

                {/* 点位 10 */}
                <Popover
                    arrow={false}
                    classNames={{ body: styles.pointPopover }}
                    content={<Link href={`/${params.locale}/solution/a1/#anchor-2`}>电动游艇&轮船解决⽅案</Link>}
                >
                    <div className={`${styles.point} ${styles.point10}`} />
                </Popover>

                {/* 点位 11 */}
                <Popover
                    arrow={false}
                    classNames={{ body: styles.pointPopover }}
                    content={<Link href={`/${params.locale}/solution/c3/`}>储能应用</Link>}
                >
                    <div className={`${styles.point} ${styles.point11}`} />
                </Popover>

                {/* 点位 12 */}
                {/* <Popover
                    arrow={false}
                    classNames={{ body: styles.pointPopover }}
                    content={<Link href="/">点位 12</Link>}
                >
                    <div className={`${styles.point} ${styles.point12}`} />
                </Popover> */}

                {/* 点位 13 */}
                <Popover
                    arrow={false}
                    classNames={{ body: styles.pointPopover }}
                    content={<Link href={`/${params.locale}/solution/a1/#anchor-1`}>电动快艇解决⽅案</Link>}
                >
                    <div className={`${styles.point} ${styles.point13}`} />
                </Popover>

                {/* 展会 */}
                <img
                    alt=""
                    className={styles.exhibition}
                    src={`/static/index/exhibition_${params.locale || 'zh'}.png`}
                    onClick={() => setState({ open: true })}
                />
            </AspectRatio>

            {/* 展会 */}

            <Modal
                styles={{
                    content: {
                        background: 'transparent',
                        boxShadow: 'none',
                        padding: 0,
                    },
                }}
                centered
                closeIcon={null}
                footer={null}
                open={state.open}
                width="80%"
                style={{ maxWidth: 979 }}
                onCancel={() => setState({ open: false })}
            >
                <AspectRatio ratio={979 / 610}>
                    <img
                        alt=""
                        src="/static/index/exhibition_bg.png"
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                        }}
                    />
                </AspectRatio>
            </Modal>
        </>
    );
};

export default Hero;
