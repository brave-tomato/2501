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

export type Title2Props = Title1Props;

/**
 * Title1
 */
export const Title1: React.FC<Title1Props> = (props) => {
    return (
        <div style={{ margin: '105px auto 80px', textAlign: 'center' }}>
            {/* 标题 */}
            <div style={{ color: '#103675', fontSize: '65px', lineHeight: '86px' }}>
                <StaggeredText text={props.title} />
            </div>

            {/* 副标题 */}
            {props.subtitle && (
                <div style={{ color: '#2DAFB7', fontSize: '40px', lineHeight: '47px' }}>{props.subtitle}</div>
            )}
        </div>
    );
};

/**
 * Title2
 */
export const Title2: React.FC<Title2Props> = (props) => {
    return (
        <div style={{ textAlign: 'center' }}>
            {/* 标题 */}
            <div style={{ color: '#2DAFB7', fontSize: '40px', lineHeight: '53px' }}>
                <StaggeredText text={props.title} />
            </div>

            {/* 副标题 */}
            {props.subtitle && (
                <div style={{ marginTop: 20, color: '#969696', fontSize: '28px', lineHeight: '37px' }}>
                    {props.subtitle}
                </div>
            )}
        </div>
    );
};
