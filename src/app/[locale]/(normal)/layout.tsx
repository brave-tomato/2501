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

export default ({ children }: Props) => {
    return (
        <>
            {/* Page */}
            {children}

            {/* Footer */}
            <Footer />
        </>
    );
};
