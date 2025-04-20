import { I18nProviderClient } from '@/locales/client';

/**
 * Types
 */
type Props = {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
};

export default async ({ children, params }: Props) => {
    /**
     * Params
     */
    const { locale } = await params;

    return <I18nProviderClient locale={locale}>{children}</I18nProviderClient>;
};
