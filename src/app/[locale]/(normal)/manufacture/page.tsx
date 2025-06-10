import { Popover } from 'antd';
import Link from 'next/link';

/**
 * Components
 */
import AspectRatio from '@/components/aspect-ratio';

/**
 * Styles
 */
import styles from './styles.module.scss';

export default () => {
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
                    <source src="https://files.welion.asia/research/liucheng.mp4" type="video/mp4" />
                </video>

                {/* 点位 1 */}
                <Popover
                    arrow={false}
                    classNames={{ body: styles.pointPopover }}
                    content={<Link href="/">内容介绍</Link>}
                >
                    <div className={`${styles.point} ${styles.point1}`} />
                </Popover>

                {/* 点位 2 */}
                <Popover
                    arrow={false}
                    classNames={{ body: styles.pointPopover }}
                    content={<Link href="/">第二个介绍</Link>}
                    placement="right"
                >
                    <div className={`${styles.point} ${styles.point2}`} />
                </Popover>
            </AspectRatio>
        </div>
    );
};
