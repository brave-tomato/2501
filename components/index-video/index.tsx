'use client';
import { ICustomComponentProps } from '@/types';
import classNames from 'classnames';
import { FC, useEffect, useRef } from 'react';
import MessageModal from './modal';

/**
 * 首页的视频切换
 */
const IndexVideo: FC<ICustomComponentProps> = ({ className }) => {
    const videoRef = useRef(null);

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
        <div className={classNames('relative', className)}>
            <video ref={videoRef} autoPlay muted loop>
                <source src={getVideoSource()} type="video/mp4" />
                你的浏览器不支持视频播放。
            </video>
            {/* 展会信息 */}
            <MessageModal className="absolute bottom-0 right-6 translate-y-1/2 " />
        </div>
    );
};

export default IndexVideo;
