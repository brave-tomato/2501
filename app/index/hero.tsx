'use client';

import { useSetState } from 'ahooks';
import { useEffect } from 'react';

/**
 * Components
 */
import AspectRatio from '@/components/aspect-ratio';

const Hero: React.FC = () => {
    /**
     * States
     */
    const [state, setState] = useSetState({
        poster: '',
        url: '',
    });

    /**
     * Effects
     */
    useEffect(() => {
        const checkTime = () => {
            const hour = new Date().getHours();

            setState({
                poster: hour >= 20 || hour < 6 ? '/static/index/night_poster.png' : '/static/index/day_poster.png',
                url: hour >= 20 || hour < 6 ? '/static/index/night.mp4' : '/static/index/day.mp4',
            });
        };

        checkTime();

        const timer = setInterval(checkTime, 60_000);

        return () => clearInterval(timer);
    }, []);

    return (
        <AspectRatio ratio={1920 / 1080}>
            <video
                autoPlay
                key={state.url}
                loop
                muted
                playsInline
                poster={state.poster}
                style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                }}
            >
                {state.url ? <source src={state.url} type="video/mp4" /> : null}
            </video>
        </AspectRatio>
    );
};

export default Hero;
