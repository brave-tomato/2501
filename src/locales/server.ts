import { createI18nServer, setStaticParamsLocale } from 'next-international/server';

export const { getCurrentLocale, getI18n, getScopedI18n, getStaticParams } = createI18nServer({
    en: () => import('./en'),
    zh: () => import('./zh'),
});

export { setStaticParamsLocale };
