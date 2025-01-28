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
                        <h4>Serious Relationships Leading to Marriage</h4>
                        <p>All of our members are one hundred percent verified. All members must qualify.</p>
                    </div>
                    <div className="feature">
                        <FontAwesomeIcon icon={faBusinessTime} size="2x" color="#ff5a5f" />
                        <h4>Freinds and Dating Relationships</h4>
                        <p>All of our members are one hundred percent verified. All members must qualify.</p>
                    </div>
                    <div className="feature">
                        <FontAwesomeIcon icon={faChartLine} size="2x" color="#ff5a5f" />
                        <h4>Contract Marriages</h4>
                        <p>All of our members are one hundred percent verified. All members must qualify.</p>
                    </div>
                    <div className="feature">
                        <FontAwesomeIcon icon={faVideo} size="2x" color="#ff5a5f" />
                        <h4>A Day Hookups for Fun</h4>
                        <p>All of our members are one hundred percent verified. All members must qualify.</p>
                    </div>
                    <div className="feature">
                        <FontAwesomeIcon icon={faVideo} size="2x" color="#ff5a5f" />
                        <h4>Surrogacy Agreements</h4>
                        <p>All of our members are one hundred percent verified. All members must qualify.</p>
                    </div>
                    <div className="feature">
                        <FontAwesomeIcon icon={faVideo} size="2x" color="#ff5a5f" />
                        <h4>Transfer Window for Bidding on ladies</h4>
                        <p>All of our members are one hundred percent verified. All members must qualify.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Features;
