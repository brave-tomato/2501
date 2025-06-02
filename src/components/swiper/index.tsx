import classNames from 'classnames';
import { Children, useRef } from 'react';
import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react';

/**
 * Styles
 */
import styles from './styles.module.scss';

/**
 * Types
 */
export type Props = {
    /** 子元素 */
    children?: React.ReactNode;
    /** 自定义类名 */
    className?: string;
    /** 根元素的自定义类名 */
    rootClassName?: string;
    /** 根元素的自定义样式 */
    rootStyle?: React.CSSProperties;
    /** 自定义样式 */
    style?: React.CSSProperties;
};

const ComponentSwiper: React.FC<Props> = (props) => {
    /**
     * Refs
     */
    const swiperRef = useRef<any>(null);

    /**
     * ChildrenProps
     */
    const swiperProps: SwiperProps = {
        className: props.className,
        loop: true,
        slidesPerView: 4,
        spaceBetween: 44,
        style: props.style,
    };

    return (
        <div className={classNames(styles.swiper, props.rootClassName)} style={props.rootStyle}>
            <Swiper ref={swiperRef} {...swiperProps}>
                {Children.map(props.children, (child, index) => (
                    <SwiperSlide key={index}>{child}</SwiperSlide>
                ))}
            </Swiper>

            <div className={styles.prev} onClick={() => swiperRef.current?.swiper.slidePrev()}>
                <img alt="" src="/static/vendors/swiper_prev.svg" />
            </div>

            <div className={styles.next} onClick={() => swiperRef.current?.swiper.slideNext()}>
                <img alt="" src="/static/vendors/swiper_next.svg" />
            </div>
        </div>
    );
};

export default ComponentSwiper;
