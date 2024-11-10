import { Link } from 'react-router-dom';    
import { useRef, useState } from 'react';

function Epic() {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlayPause = () => {
        if (isPlaying) {
            videoRef.current.pause();
        } else {
            videoRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <>
            <div className="epic">
                <div className="new-content">
                    <h1>Start Something Epic</h1>
                    <p>Connect with jesters who share your sense of humor. Join JestoBook today and discover your perfect comedic match.</p>
                    <Link to="/auth" className="button button-primary">Create Account</Link>
                </div>
                
                <div className="video">
                    <video 
                        ref={videoRef}
                        muted
                        loop
                        playsInline
                        controls
                        className="video-iframe"
                        onClick={handlePlayPause}
                    >
                        <source src="/videos/video.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    
                </div>
            </div>
        </>
    );
}

export default Epic;
