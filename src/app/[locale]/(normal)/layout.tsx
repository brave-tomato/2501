/**
 * Components
 */
import Footer from '@/components/footer';

/**
 * Types
 */
type Props = {
    children: React.ReactNode;
};

export default async ({ children }: Props) => {
    return (
        <>
            {/* Page */}
            {children}

            {/* Footer */}
            <Footer />
        </>
    );
};
