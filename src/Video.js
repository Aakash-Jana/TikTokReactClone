import React, {useRef , useState} from 'react';
import VideoFooter from './VideoFooter';
import VideoSideBar from './VideoSideBar';
import './Video.css';

function Video({url,channel,description,song,likes,messages,shares}){
    const [playing , setPlaying] = useState(false);
    const videoRef = useRef(null);

    const onVideoPress = () => {
        console.log(playing);
        if(playing){
            videoRef.current.pause();
            setPlaying(false);
        }
        else {
            videoRef.current.play();
            setPlaying(true);
        }
    };

    return ( 
        <div className="video">
            <video 
                className="video_player" 
                loop
                // controls
                ref={videoRef}
                onClick={onVideoPress}
                src={url}>
            </video>
            <VideoFooter channel={channel} description={channel} song={song} />
            <VideoSideBar likes={likes} shares={shares} comments={messages} />
            {/* Video Footer */}
            {/* Video Sidebar */}
        </div>
    );
}
 
export default Video;