'use client';

import { useI18n } from '@/locales/client';

export default () => {
    /**
     * Hooks
     */
    const t = useI18n();

    return (
        <div>
            <p>{t('welcome', { name: 'Welion' })}</p>
        </div>
    );
};
