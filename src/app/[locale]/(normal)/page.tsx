'use client';

import { useI18n } from '@/locales/client';

export default () => {
    /**
     * Hooks
     */
    const t = useI18n();

    return (
        <div style={{ height: '200vh', background: '#c7c7c7' }}>
            <p>{t('welcome', { name: 'Welion' })}</p>
        </div>
    );
};
