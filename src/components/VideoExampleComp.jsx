import React, { useEffect, useRef } from 'react'
import Video from '../assets/videoPromo1.mp4'


const VideoExampleComp = () => {
    const videoRef = useRef(null);
    useEffect(()=>{
        const video = videoRef.current;
        if(video){
            video.autoplay = true;
            video.muted = true;
            video.loop = true

        }
    },[]);

    return (
        <div name="inicio" className="w-full h-screen flex items-center justify-center pt-20">
            <video ref={videoRef} className="w-full h-full object-cover" >
                <source src={Video}type="video/mp4" />
                Tu navegador no admite la reproducción de videos.
            </video>
        </div>)
}

export default VideoExampleComp