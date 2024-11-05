import Epic from './Epic';
import Review from './Review';
import Features from './Features';
import WhyChoose from './WhyChoose';

function MainContent() {
    return (
        <main className="main-content">
            <Epic />
            <Review />
            <Features />
            <WhyChoose />
        </main>
    );
}

export default MainContent;
