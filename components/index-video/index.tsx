'use client';
import { ICustomComponentProps } from '@/types';
import classNames from 'classnames';
import { FC, useEffect, useRef } from 'react';
import MessageModal from './modal';

import { getConf } from '@/utils';
import { Grid } from 'antd';

import AspectRatio from '../aspect-ratio';
import './index.scss';

/**
 * 首页的视频切换
 */
const IndexVideo: FC<ICustomComponentProps> = ({ className }) => {
    const videoRef = useRef(null);

    /**
     * Hooks
     */
    const conf = getConf(Grid.useBreakpoint());

    // 获取当前时间并判断应该播放哪个视频
    const getVideoSource = () => {
        const now = new Date();
        const hour = now.getHours();
        return hour >= 20 || hour < 6 ? '/night.mp4' : '/day.mp4';
    };

    useEffect(() => {
        const video: any = videoRef.current;
        if (video) {
            // 设置视频源
            video.src = getVideoSource();
            // 尝试自动播放视频
            video.play().catch((error: any) => {
                console.error('自动播放失败:', error);
            });
        }
    }, []);

    return (
        <div className={classNames('video-wrapper', className)} style={{ maxWidth: '1920px', margin: '0 auto' }}>
            <AspectRatio ratio={conf.video}>
                <video
                    ref={videoRef}
                    autoPlay
                    muted
                    loop
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                    }}
                >
                    <source src={getVideoSource()} type="video/mp4" />
                    你的浏览器不支持视频播放。
                </video>
            </AspectRatio>

            {/* 展会信息 */}
            <MessageModal className="message-modal-box absolute bottom-0 right-6 translate-y-1/2 " />
        </div>
    );
};

export default IndexVideo;
