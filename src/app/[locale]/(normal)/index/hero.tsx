'use client';

import { useSetState } from 'ahooks';
import { Modal, Popover } from 'antd';
import Link from 'next/link';
import { useEffect, useRef } from 'react';

/**
 * Components
 */
import AspectRatio from '@/components/aspect-ratio';

/**
 * Styles
 */
import styles from './styles.module.scss';

const Hero: React.FC = () => {
    /**
     * States
     */
    const [state, setState] = useSetState({
        display: 'block',
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

    return (
        <>
            <video
                autoPlay
                muted
                playsInline
                style={{
                    display: state.display,
                    position: 'absolute',
                    inset: 0,
                    zIndex: 102,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                }}
                onEnded={() => {
                    setState({ display: 'none' });
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
                    content={<Link href="/">企业简介</Link>}
                >
                    <div className={`${styles.point} ${styles.point1}`} />
                </Popover>

                {/* 点位 2 */}
                <Popover
                    arrow={false}
                    classNames={{ body: styles.pointPopover }}
                    content={<Link href="/">纯电乘用车解决方案</Link>}
                    placement="right"
                >
                    <div className={`${styles.point} ${styles.point2}`} />
                </Popover>

                {/* 点位 3 */}
                <Popover
                    arrow={false}
                    classNames={{ body: styles.pointPopover }}
                    content={<Link href="/">暂未开放</Link>}
                >
                    <div className={`${styles.point} ${styles.point3}`} />
                </Popover>

                {/* 点位 4 */}
                <Popover
                    arrow={false}
                    classNames={{ body: styles.pointPopover }}
                    content={<Link href="/">暂未开放</Link>}
                >
                    <div className={`${styles.point} ${styles.point4}`} />
                </Popover>

                {/* 点位 5 */}
                <Popover
                    arrow={false}
                    classNames={{ body: styles.pointPopover }}
                    content={<Link href="/">暂未开放</Link>}
                >
                    <div className={`${styles.point} ${styles.point5}`} />
                </Popover>

                {/* 点位 6 */}
                <Popover
                    arrow={false}
                    classNames={{ body: styles.pointPopover }}
                    content={<Link href="/">暂未开放</Link>}
                >
                    <div className={`${styles.point} ${styles.point6}`} />
                </Popover>

                {/* 点位 7 */}
                <Popover
                    arrow={false}
                    classNames={{ body: styles.pointPopover }}
                    content={<Link href="/">暂未开放</Link>}
                >
                    <div className={`${styles.point} ${styles.point7}`} />
                </Popover>

                {/* 点位 8 */}
                <Popover
                    arrow={false}
                    classNames={{ body: styles.pointPopover }}
                    content={<Link href="/">暂未开放</Link>}
                >
                    <div className={`${styles.point} ${styles.point8}`} />
                </Popover>

                {/* 点位 9 */}
                <Popover
                    arrow={false}
                    classNames={{ body: styles.pointPopover }}
                    content={<Link href="/">暂未开放</Link>}
                >
                    <div className={`${styles.point} ${styles.point9}`} />
                </Popover>

                {/* 点位 10 */}
                <Popover
                    arrow={false}
                    classNames={{ body: styles.pointPopover }}
                    content={<Link href="/">暂未开放</Link>}
                >
                    <div className={`${styles.point} ${styles.point10}`} />
                </Popover>

                {/* 点位 11 */}
                <Popover
                    arrow={false}
                    classNames={{ body: styles.pointPopover }}
                    content={<Link href="/">暂未开放</Link>}
                >
                    <div className={`${styles.point} ${styles.point11}`} />
                </Popover>

                {/* 点位 12 */}
                <Popover
                    arrow={false}
                    classNames={{ body: styles.pointPopover }}
                    content={<Link href="/">暂未开放</Link>}
                >
                    <div className={`${styles.point} ${styles.point12}`} />
                </Popover>

                {/* 点位 13 */}
                <Popover
                    arrow={false}
                    classNames={{ body: styles.pointPopover }}
                    content={<Link href="/">暂未开放</Link>}
                >
                    <div className={`${styles.point} ${styles.point13}`} />
                </Popover>

                {/* 展会 */}
                <img
                    alt=""
                    className={styles.exhibition}
                    src="/static/index/exhibition.png"
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
