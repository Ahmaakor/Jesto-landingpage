import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faBusinessTime, faChartLine, faVideo } from '@fortawesome/free-solid-svg-icons';

function Features() {
    return (
        <section className="features">
            <div className="container">
                <h2>Welcome to <span className="highlight">JestoBooks</span></h2>
                <div className="feature-container">
                    <div className="feature">
                        <FontAwesomeIcon icon={faUsers} size="2x" color="#ff5a5f" />
                        <h4>1000+ Men and Women</h4>
                        <p>All of our members are one hundred percent verified. All members must qualify.</p>
                    </div>
                    <div className="feature">
                        <FontAwesomeIcon icon={faBusinessTime} size="2x" color="#ff5a5f" />
                        <h4>11+ Years of Business</h4>
                        <p>All of our members are one hundred percent verified. All members must qualify.</p>
                    </div>
                    <div className="feature">
                        <FontAwesomeIcon icon={faChartLine} size="2x" color="#ff5a5f" />
                        <h4>1000+ Success Story</h4>
                        <p>All of our members are one hundred percent verified. All members must qualify.</p>
                    </div>
                    <div className="feature">
                        <FontAwesomeIcon icon={faVideo} size="2x" color="#ff5a5f" />
                        <h4>Live Video Chat</h4>
                        <p>All of our members are one hundred percent verified. All members must qualify.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Features;
