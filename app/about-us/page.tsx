'use client';

import { getConf } from '@/utils';
import { Grid } from 'antd';
import dynamic from 'next/dynamic';

/**
 * Components
 */
import AspectRatio from '@/components/aspect-ratio';
import { Title1 } from '@/components/headline';

const ComponentGlobe = dynamic(() => import('@/components/globe'), { ssr: false });

const Page = () => {
    /**
     * Hooks
     */
    const conf = getConf(Grid.useBreakpoint());

    return (
        <div style={{ maxWidth: '1920px', margin: '0 auto' }}>
            {/* Banner */}
            <AspectRatio ratio={conf.banner}>
                {/* 视频 */}
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    poster="/images/about-us/banner.jpg"
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                    }}
                >
                    {conf.lg ? <source src="/images/about-us/banner.mp4" type="video/mp4" /> : null}
                </video>

                {/* 文案 */}
                <div
                    style={{
                        position: 'absolute',
                        top: '50%',
                        width: '100%',
                        transform: 'translateY(-50%)',
                        color: 'white',
                        fontSize: '50px',
                        letterSpacing: '0.5em',
                        textAlign: 'center',
                    }}
                >
                    让人类享受更安全的绿色能源
                </div>
            </AspectRatio>

            {/* 企业文化 */}
            <Title1 title="企业文化" subtitle="Culture" />

            {/* 公司简介 */}
            <Title1 title="公司简介" subtitle="Profile" />

            {/* 全球布局 */}
            <Title1 title="全球布局" subtitle="Global Layout" />

            <AspectRatio ratio={conf.globe}>
                <ComponentGlobe />
            </AspectRatio>

            {/* 可持续发展 */}
            <Title1 title="可持续发展" subtitle="Sustainable" />
        </div>
    );
};

export default Page;
