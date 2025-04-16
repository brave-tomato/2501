'use client';

import ReactFullpage from '@fullpage/react-fullpage';
import React from 'react';
import './styles.css';

// 视频播放的延迟时间
const videos = [
    {
        count: 0,
        index: 0,
        timer: [1200, 2000],
    },
];

const T = () => {
    // var isVideoPlaying = false;

    const beforeLeave = (origin, destination, direction, trigger) => {
        console.log('222 :>> ', 222, origin);

        // Preventing video animations when using the bullet navigation
        var shouldTriggerAnimation = trigger !== 'verticalNav';

        const videoData = videos.find((video) => video.index === origin.index);

        if (videoData && shouldTriggerAnimation && videoData.count < videoData.timer.length) {
            var video = origin.item.querySelector('video');

            // Play the video
            video.play();
            // isVideoPlaying = true;

            // Set a timeout to stop the video after 2 seconds
            setTimeout(function () {
                video.pause(); // Pause the video
                // isVideoPlaying = false;
            }, videoData.timer[videoData.count]);
            videoData.count++;

            // Preventing scroll to destination
            return false;
        }
    };

    const afterLoad = (origin, destination, direction, trigger) => {
        console.log('111 :>> ', 111, origin);
        // Resetting the video on the previous section
        if (origin) {
            var prevVideo = origin.item.querySelector('video');
            if (prevVideo) {
                prevVideo.currentTime = 0;
            }
        }

        // 查找是否有对应视频
        const videoData = videos.find((video) => video.index === origin.index);

        if (videoData) {
            const video = origin.item.querySelector('video');

            video.play();
            videoData.count = 1;

            setTimeout(() => {
                video.pause();
            }, videoData.timer[0]);
        }

        // Resetting counter &
        // isVideoPlaying = false;
    };

    return (
        <div className="App">
            <ReactFullpage
                debug
                beforeLeave={beforeLeave}
                afterLoad={afterLoad}
                navigation={true}
                // licenseKey="xxxxxxxxxxxxxxxxxxxxxxxxx"
                render={() => (
                    <ReactFullpage.Wrapper>
                        <div className="section">
                            <video className="overlay-video" loop="" muted="true" playsInline="">
                                <source src="https://2501-r2.liuuu.net/t/334_1744769876.mp4" type="video/mp4"></source>
                            </video>
                        </div>

                        <div className="section">
                            <video className="overlay-video" loop="" muted="true" playsInline="" data-autoplay="">
                                <source
                                    src="https://cdn.jsdelivr.net/gh/alvarotrigo/fullpage-assets/videos/sheep.mp4"
                                    type="video/mp4"
                                ></source>
                                <source
                                    src="https://cdn.jsdelivr.net/gh/alvarotrigo/fullpage-assets/videos/sheep.webm"
                                    type="video/webm"
                                ></source>
                            </video>
                        </div>
                    </ReactFullpage.Wrapper>
                )}
            />
        </div>
    );
};

export default T;
