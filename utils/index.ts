/**
 * 通过屏幕尺寸获取配置
 */
export const getConf: any = (screens: any) => {
    // >= 1600px
    if (screens.xxl) {
        return {
            ...screens,
            name: 'xxl',

            logo: 146 / 19,
            banner: 1920 / 650,
            video: 1920 / 682,

            // 全球布局
            globe: 1920 / 650,
            // 可持续发展
            sustainable: 1920 / 848,
        };
    }

    // >= 1200px
    if (screens.xl) {
        return {
            ...screens,
            name: 'xl',

            logo: 146 / 19,
            banner: 1920 / 650,
            video: 1920 / 682,

            // 全球布局
            globe: 1920 / 650,
        };
    }

    // >= 992px
    if (screens.lg) {
        return {
            ...screens,
            name: 'lg',

            logo: 146 / 19,
            banner: 1200 / 460,
            video: 1200 / 682,

            // 全球布局
            globe: 1200 / 460,
        };
    }

    // >= 768px
    if (screens.md) {
        return {
            ...screens,
            name: 'md',

            logo: 146 / 19,
            banner: 992 / 404,
            video: 992 / 434,

            // 全球布局
            globe: 992 / 404,
        };
    }

    // >= 576px
    if (screens.sm) {
        return {
            ...screens,
            name: 'sm',

            // TODO: 适配
            logo: 146 / 19,
            banner: 992 / 404,
            video: 992 / 434,

            // 全球布局
            globe: 992 / 404,
        };
    }

    // < 576px
    if (screens.xs) {
        return {
            ...screens,
            name: 'xs',

            // TODO: 适配
            logo: 146 / 19,
            banner: 992 / 404,
            video: 992 / 434,

            // 全球布局
            globe: 992 / 404,
        };
    }

    return {
        ...screens,
        name: 'xxl',

        logo: 146 / 19,
        banner: 1920 / 650,
        video: 1920 / 682,

        // 全球布局
        globe: 1920 / 650,
    };
};
