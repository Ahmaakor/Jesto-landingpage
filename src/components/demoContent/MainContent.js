// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUsers, faBusinessTime, faChartLine, faVideo } from '@fortawesome/free-solid-svg-icons';

// function MainContent() {
//     return (
//         <main className="main-content">
//             <div className="epic">
//                 <div className="new-content">
//                     <h1>Start something epic</h1>
//                     <p>Connect with jesters who share your sense of humor. Join JestoBook today and discover your perfect comedic match.</p>
//                     <a href="#" className="button button-primary">Create Account</a>
//                 </div>

//                 <section className="reviews">
//                     <div className="review-card">
//                         <img src="https://i.pinimg.com/236x/82/19/e9/8219e955fd50a0eb26959d17f4b173c7.jpg" alt="Sarah L."/>
//                         <h3>Sarah L.</h3>
//                         <p>"JestoBook helped me find my comedic soulmate. We're now performing stand-up together!"</p>
//                     </div>
//                     <div className="review-card">
//                         <img src="https://i.pinimg.com/236x/82/19/e9/8219e955fd50a0eb26959d17f4b173c7.jpg" alt="Mike R."/>
//                         <h3>Mike R.</h3>
//                         <p>"I've never laughed so much in my life. JestoBook is a game-changer for aspiring comedians!"</p>
//                     </div>
//                     <div className="review-card">
//                         <img src="https://i.pinimg.com/236x/82/19/e9/8219e955fd50a0eb26959d17f4b173c7.jpg" alt="Emma T."/>
//                         <h3>Emma T.</h3>
//                         <p>"Thanks to JestoBook, I found a group of friends who appreciate my dad jokes. Life-changing!"</p>
//                     </div>
//                 </section>
//             </div>

//             <section className="features">
//                 <div className="container">
//                     <h2>Welcome to <span className="highlight">JestoBooks</span></h2>
//                     <div className="feature-container">
//                         <div className="feature">
//                             <FontAwesomeIcon icon={faUsers} size="2x" color="#ff5a5f" />
//                             <h4>1000+ Men and women</h4>
//                             <p>All of our members are one hundred percent verified. All members must qualify.</p>
//                         </div>
//                         <div className="feature">
//                             <FontAwesomeIcon icon={faBusinessTime} size="2x" color="#ff5a5f" />
//                             <h4>11+ Years of Business</h4>
//                             <p>All of our members are one hundred percent verified. All members must qualify.</p>
//                         </div>
//                         <div className="feature">
//                             <FontAwesomeIcon icon={faChartLine} size="2x" color="#ff5a5f" />
//                             <h4>1000+ Success Story</h4>
//                             <p>All of our members are one hundred percent verified. All members must qualify.</p>
//                         </div>
//                         <div className="feature">
//                             <FontAwesomeIcon icon={faVideo} size="2x" color="#ff5a5f" />
//                             <h4>Live Video Chat</h4>
//                             <p>All of our members are one hundred percent verified. All members must qualify.</p>
//                         </div>
//                     </div>
//                 </div>
//             </section>
        
//             <section className="why-choose">
//                 <div className="container">
//                     <div className="why-choose-content">
//                         <div className="why-choose-text">
//                             <h2>Why Choose JestoBooks?</h2>
//                             <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
//                             <h3>Trusted By Over 2.5 Million Singles</h3>
//                             <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </main>
//     );
// }

// export default MainContent;



import Epic from './Epic';
import Features from './Features';
import WhyChoose from './WhyChoose';

function MainContent() {
    return (
        <main className="main-content">
            <Epic />
            <Features />
            <WhyChoose />
        </main>
    );
}

export default MainContent;
