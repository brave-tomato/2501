/**
 * Components
 */
import { StaggeredText } from '@/components/motion';

/**
 * Types
 */
export type Title1Props = {
    /** 标题 */
    title: string;
    /** 副标题 */
    subtitle?: string;
};

/**
 * Title1
 */
export const Title1: React.FC<Title1Props> = (props) => {
    return (
        <div style={{ margin: '70px auto 60px', textAlign: 'center' }}>
            {/* 标题 */}
            <div style={{ color: '#103675', fontSize: '36px', lineHeight: '47px' }}>
                <StaggeredText text={props.title} />
            </div>

            {/* 副标题 */}
            {props.subtitle && (
                <div style={{ color: '#2DAFB7', fontSize: '20px', lineHeight: '23px' }}>{props.subtitle}</div>
            )}
        </div>
    );
};
