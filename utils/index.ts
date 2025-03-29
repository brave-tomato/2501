/**
 * 通过屏幕尺寸获取配置
 */
export const getConf: any = (screens: any) => {
    // >= 1920px（自定义 xxxl 屏幕尺寸）
    const defaultScreen = {
        ...screens,
        xxxl: true,
        name: 'xxxl',

        banner: 1920 / 650,
        logo: 146 / 19,
        video: 1920 / 682,

        // 全球布局
        globe: 1920 / 848,
        // 可持续发展
        sustainable: 1920 / 848,
    };

    if (window.innerWidth >= 1920) {
        return defaultScreen;
    }

    // >= 1600px
    if (screens.xxl) {
        return {
            ...screens,
            name: 'xxl',

            banner: 1600 / 576,
            logo: 146 / 19,
            video: 1920 / 682, // TODO: 适配

            // 全球布局
            globe: 1600 / 707,
            // 可持续发展
            sustainable: 1600 / 707,
        };
    }

    // >= 1200px
    if (screens.xl) {
        return {
            ...screens,
            name: 'xl',

            banner: 1200 / 460,
            logo: 146 / 19,
            video: 1920 / 682, // TODO: 适配

            // 全球布局
            globe: 1200 / 530,
            // 可持续发展
            sustainable: 1200 / 530,
        };
    }

    // >= 992px
    if (screens.lg) {
        return {
            ...screens,
            name: 'lg',

            banner: 992 / 404,
            logo: 146 / 19,
            video: 1200 / 682, // TODO: 适配

            // 全球布局
            globe: 992 / 438,
            // 可持续发展
            sustainable: 992 / 438,
        };
    }

    // >= 768px
    if (screens.md) {
        return {
            ...screens,
            name: 'md',

            banner: 768 / 500,
            logo: 146 / 19,
            video: 992 / 434, // TODO: 适配

            // 全球布局
            globe: 768 / 768,
            // 可持续发展
            sustainable: 768 / 340,
        };
    }

    // >= 576px
    if (screens.sm) {
        return {
            ...screens,
            name: 'sm',

            banner: 576 / 375,
            logo: 146 / 19,
            video: 992 / 434, // TODO: 适配

            // 全球布局
            globe: 576 / 576,
            // 可持续发展
            sustainable: 576 / 254,
        };
    }

    // < 576px
    if (screens.xs) {
        return {
            ...screens,
            name: 'xs',

            banner: 576 / 375,
            logo: 146 / 19,
            video: 992 / 434, // TODO: 适配

            // 全球布局
            globe: 576 / 576,
            // 可持续发展
            sustainable: 576 / 254,
        };
    }

    return defaultScreen;
};
