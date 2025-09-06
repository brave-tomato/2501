'use client';

import { Popover } from 'antd';
import Link from 'next/link';
import { useParams } from 'next/navigation';

/**
 * Components
 */
import AspectRatio from '@/components/aspect-ratio';

/**
 * Styles
 */
import styles from './styles.module.scss';

export default () => {
    /**
     * Params
     */
    const params = useParams();

    return (
        <div className="mw-1920">
            <AspectRatio ratio={16 / 9}>
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                    }}
                >
                    <source
                        src={`https://files.welion.asia/research/liucheng_${params.locale || 'zh'}.mp4`}
                        type="video/mp4"
                    />
                </video>

                {/* 点位 1 */}
                <Popover
                    arrow={false}
                    classNames={{ body: styles.pointPopover }}
                    content={<div>内容介绍</div>}
                    placement="bottom"
                >
                    <div className={`${styles.point} ${styles.point1}`} />
                </Popover>

                {/* 点位 2 */}
                <Popover
                    arrow={false}
                    classNames={{ body: styles.pointPopover }}
                    content={<div>第二个介绍</div>}
                    placement="bottom"
                >
                    <div className={`${styles.point} ${styles.point2}`} />
                </Popover>

                {/* 点位 3 */}
                <Popover
                    arrow={false}
                    classNames={{ body: styles.pointPopover }}
                    content={<div>介绍</div>}
                    placement="bottom"
                >
                    <div className={`${styles.point} ${styles.point3}`} />
                </Popover>

                {/* 点位 4 */}
                <Popover
                    arrow={false}
                    classNames={{ body: styles.pointPopover }}
                    content={<div>介绍</div>}
                    placement="right"
                >
                    <div className={`${styles.point} ${styles.point4}`} />
                </Popover>

                {/* 点位 5 */}
                <Popover
                    arrow={false}
                    classNames={{ body: styles.pointPopover }}
                    content={<div>介绍</div>}
                    placement="right"
                >
                    <div className={`${styles.point} ${styles.point5}`} />
                </Popover>

                {/* 点位 6 */}
                <Popover
                    arrow={false}
                    classNames={{ body: styles.pointPopover }}
                    content={<div>介绍</div>}
                    placement="bottom"
                >
                    <div className={`${styles.point} ${styles.point6}`} />
                </Popover>

                {/* 点位 7 */}
                <Popover
                    arrow={false}
                    classNames={{ body: styles.pointPopover }}
                    content={<div>介绍</div>}
                    placement="bottom"
                >
                    <div className={`${styles.point} ${styles.point7}`} />
                </Popover>

                {/* 点位 8 */}
                <Popover
                    arrow={false}
                    classNames={{ body: styles.pointPopover }}
                    content={<div>介绍</div>}
                    placement="bottom"
                >
                    <div className={`${styles.point} ${styles.point8}`} />
                </Popover>

                {/* 点位 9 */}
                <Popover
                    arrow={false}
                    classNames={{ body: styles.pointPopover }}
                    content={<div>介绍</div>}
                    placement="bottom"
                >
                    <div className={`${styles.point} ${styles.point9}`} />
                </Popover>

                {/* 点位 10 */}
                <Popover
                    arrow={false}
                    classNames={{ body: styles.pointPopover }}
                    content={<div>介绍</div>}
                    placement="bottom"
                >
                    <div className={`${styles.point} ${styles.point10}`} />
                </Popover>

                {/* 点位 11 */}
                <Popover
                    arrow={false}
                    classNames={{ body: styles.pointPopover }}
                    content={<div>介绍</div>}
                    placement="bottom"
                >
                    <div className={`${styles.point} ${styles.point11}`} />
                </Popover>

                {/* 点位 12 */}
                <Popover
                    arrow={false}
                    classNames={{ body: styles.pointPopover }}
                    content={<div>介绍</div>}
                    placement="bottom"
                >
                    <div className={`${styles.point} ${styles.point12}`} />
                </Popover>

                {/* 点位 13 */}
                <Popover
                    arrow={false}
                    classNames={{ body: styles.pointPopover }}
                    content={<div>介绍</div>}
                    placement="bottom"
                >
                    <div className={`${styles.point} ${styles.point13}`} />
                </Popover>
            </AspectRatio>
        </div>
    );
};
