import { Link } from 'react-router-dom';    
import { useRef, useState } from 'react';

function Epic() {

    return (
        <>
            <div className="epic">
                <div className="new-content">
                    <h1>Start Something Epic</h1>
                    <p>Connect with jesters who share your sense of humor. Join JestoBook today and discover your perfect comedic match.</p>
                    <Link to="/auth" className="button button-primary">Create Account</Link>
                </div>

                <h1>Watch How Our Website Is</h1>

                <div className="video">
                    <video 
                        loop
                        playsInline
                        controls
                        className="video-iframe"
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
