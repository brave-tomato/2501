import { motion } from 'framer-motion';

/**
 * Types
 */
export type StaggeredTextProps = {
    /** 动画 */
    animate?: Record<string, any>;
    /** 初始状态 */
    initial?: Record<string, any>;
    /** 样式 */
    style?: React.CSSProperties;
    /** 文案 */
    text: string;
    /** 过渡 */
    transition?: Record<string, any>;
};

export const StaggeredText: React.FC<StaggeredTextProps> = ({ animate, initial, style, text, transition }) => {
    const letters = Array.from(text);

    return (
        <>
            {letters.map((letter, index) => (
                <motion.span
                    animate={{
                        opacity: 1,
                        y: 0,
                        ...animate,
                    }}
                    initial={{
                        opacity: 0,
                        y: -20,
                        ...initial,
                    }}
                    key={index}
                    style={{
                        display: 'inline-block',
                        ...style,
                    }}
                    transition={{
                        // damping: 12,
                        delay: index * 0.1, // 每个字母延迟 0.1 秒
                        // stiffness: 300,
                        type: 'spring',
                        ...transition,
                    }}
                >
                    {letter}
                </motion.span>
            ))}
        </>
    );
};
