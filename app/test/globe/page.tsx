'use client';

import dynamic from 'next/dynamic';

/**
 * Components
 */
import AspectRatio from '@/components/aspect-ratio';

const ComponentGlobe = dynamic(() => import('@/components/globe'), { ssr: false });

const PageGlobe = () => {
    return (
        <AspectRatio ratio={16 / 9}>
            <ComponentGlobe />
        </AspectRatio>
    );
};

export default PageGlobe;
