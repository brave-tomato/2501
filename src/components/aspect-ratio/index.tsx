'use client';

/**
 * Types
 */
type Props = React.PropsWithChildren<{
    ratio: number;
    style?: React.CSSProperties;
}>;

const AspectRatio: React.FC<Props> = ({ children, ratio, style }) => {
    const paddingTop = (1 / ratio) * 100;

    return (
        <div style={{ position: 'relative', width: '100%', paddingTop: `${paddingTop}%`, ...style }}>
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>{children}</div>
        </div>
    );
};

export default AspectRatio;
