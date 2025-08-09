'use client';

import { useI18n } from '@/locales/client';
import dynamic from 'next/dynamic';
import { useState } from 'react';

/**
 * Components
 */
const Hero = dynamic(() => import('./hero'), { ssr: false });
const NewsSection = dynamic(() => import('./news-section'), { ssr: false });

/**
 * Styles
 */
import styles from './styles.module.scss';

const Index: React.FC = () => {
    /**
     * Hooks
     */
    const t = useI18n();

    /**
     * States
     */
    const [showNews, setShowNews] = useState(false);

    return (
        <div className="mw-1920">
            {/* Hero */}
            <Hero onVideoReady={() => setShowNews(true)} />

            {/* News */}
            {showNews && <NewsSection />}
        </div>
    );
};

export default Index;
