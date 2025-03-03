import { useEffect, useState } from 'react';

const useScrollDetection = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // 组件卸载时移除事件监听器
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return isScrolled;
};

export default useScrollDetection;
