/**
 * Components
 */
import Footer from '@/components/footer';
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
        <>
            {/* Header */}
            <Header locale={locale} />

            {/* Page */}
            {children}

            {/* Footer */}
            <Footer />
        </>
    );
};
