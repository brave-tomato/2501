import { getStaticParams } from '@/locales/server';

/**
 * Types
 */
type Props = {
    children: React.ReactNode;
};

export function generateStaticParams() {
    return getStaticParams();
}

export default ({ children }: Props) => {
    return (
        <html lang="en">
            <head>
                <link href="/favicon.svg" rel="icon" sizes="any" />
            </head>

            <body>{children}</body>
        </html>
    );
};
