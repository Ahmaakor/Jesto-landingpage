import React from 'react';
import './Review.css';

const Review = () => {
    return (
        <section className="review-section">
            <h1>Testimonials</h1>
            <section className="cards-grid">
                <div className="review-card">
                    <p>JestoBook helped me find someone who shares my quirky sense of humor. It's been an amazing journey since our first laugh together!</p>
                    <span>- Adam W.</span>
                </div>
                <div className="review-card">
                    <p>Who knew love could start with a pun? JestoBook connected me with someone who truly gets my jokes and my heart.</p>
                    <span>- Lucy T.</span>
                </div>
                <div className="review-card">
                    <p>I was hesitant to join, but JestoBook turned out to be the best decision I ever made. We've been laughing together every day since!</p>
                    <span>- Emma K.</span>
                </div>
                <div className="review-card">
                    <p>JestoBook isn't just a dating site; it's a community of people who value humor and connection. I met my soulmate here!</p>
                    <span>- Noah R.</span>
                </div>
                <div className="review-card">
                    <p>From hilarious chat prompts to creative icebreakers, JestoBook made it easy to connect with someone who understands my humor.</p>
                    <span>- Sophia L.</span>
                </div>
                <div className="review-card">
                    <p>Thanks to JestoBook, I found someone who matches my energy and my sense of fun. We're planning our first comedy night date!</p>
                    <span>- Liam M.</span>
                </div>
            </section>
        </section>
    );
};

export default Review;
