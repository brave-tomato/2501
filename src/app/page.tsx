'use client';

import { redirect } from 'next/navigation';
import { useEffect } from 'react';

export default () => {
    /**
     * Effects
     */
    useEffect(() => {
        const lang = navigator.language || navigator.languages?.[0] || 'zh-CN';

        redirect(lang.startsWith('en') ? '/en' : '/zh');
    }, []);

    return null;
};
