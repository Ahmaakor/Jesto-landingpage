import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTiktok, faYoutube, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="footer-content">
                    <div className="footer-section">
                        <h4>Legal</h4>
                        <ul>
                            <li><a href="#">Privacy</a></li>
                            <li><a href="#">Terms</a></li>
                            <li><a href="#">Cookie Policy</a></li>
                            <li><a href="#">Intellectual Property</a></li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h4>Careers</h4>
                        <ul>
                            <li><a href="#">Careers Portal</a></li>
                            <li><a href="#">Tech Blog</a></li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h4>Social</h4>
                        <div className="social-links">
                            <a href="#" aria-label="Instagram">
                                <FontAwesomeIcon icon={faInstagram} size="lg" />
                            </a>
                            <a href="#" aria-label="TikTok">
                                <FontAwesomeIcon icon={faTiktok} size="lg" />
                            </a>
                            <a href="#" aria-label="YouTube">
                                <FontAwesomeIcon icon={faYoutube} size="lg" />
                            </a>
                            <a href="#" aria-label="Twitter">
                                <FontAwesomeIcon icon={faTwitter} size="lg" />
                            </a>
                            <a href="#" aria-label="Facebook">
                                <FontAwesomeIcon icon={faFacebook} size="lg" />
                            </a>
                        </div>
                    </div>
                    <div className="footer-section">
                        <h4>FAQ</h4>
                        <ul>
                            <li><a href="#">Destinations</a></li>
                            <li><a href="#">Press Room</a></li>
                            <li><a href="#">Contact</a></li>
                            <li><a href="#">Promo Code</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
