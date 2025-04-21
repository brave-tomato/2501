import { I18nProviderClient } from '@/locales/client';

/**
 * Components
 */
import Header from '@/components/header';

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

    return (
        <I18nProviderClient locale={locale}>
            {/* Header */}
            <Header locale={locale} />

            {/* Page */}
            {children}
        </I18nProviderClient>
    );
};
