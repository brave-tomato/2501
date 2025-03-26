/**
 * 通过屏幕尺寸获取配置
 */
export const getConf: any = (screens: any) => {
    // >= 1600px
    if (screens.xxl) {
        return {
            ...screens,
            name: 'xxl',

            banner: 1920 / 650,
            globe: 1920 / 650,
        };
    }

    // >= 1200px
    if (screens.xl) {
        return {
            ...screens,
            name: 'xl',

            banner: 1920 / 650,
            globe: 1920 / 650,
        };
    }

    // >= 992px
    if (screens.lg) {
        return {
            ...screens,
            name: 'lg',

            banner: 1200 / 460,
            globe: 1200 / 460,
        };
    }

    // >= 768px
    if (screens.md) {
        return {
            ...screens,
            name: 'md',

            banner: 992 / 404,
            globe: 992 / 404,
        };
    }

    // >= 576px
    if (screens.sm) {
        return {
            ...screens,
            name: 'sm',

            // TODO: 适配
            banner: 992 / 404,
            globe: 992 / 404,
        };
    }

    // < 576px
    if (screens.xs) {
        return {
            ...screens,
            name: 'xs',

            // TODO: 适配
            banner: 992 / 404,
            globe: 992 / 404,
        };
    }

    return {
        ...screens,
        name: 'xxl',

        banner: 1920 / 650,
        globe: 1920 / 650,
    };
};
