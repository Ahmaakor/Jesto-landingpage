import React from 'react';
import './Review.css';

const Review = () => {
    return (
        <section className="review-section">
            <h1>Success Stories from our Users</h1>
            <section className="cards-grid">
                <div className="review-card">
                    <p>Our stay at the hotel was absolutely wonderful. The staff were incredibly accommodating and the amenities were top-notch. We will definitely be back!</p>
                    <span>- John Doe</span>
                </div>
                <div className="review-card">
                    <p>I was blown away by the stunning views and the luxurious rooms. This hotel truly offers an unparalleled experience.</p>
                    <span>- Jane Smith</span>
                </div>
                <div className="review-card">
                    <p>The exceptional service and attention to detail made our visit unforgettable. Highly recommend to anyone looking for a first-class stay.</p>
                    <span>- Emily Johnson</span>
                </div>
                <div className="review-card">
                    <p>Amazing experience! The ambiance is perfect and the food is exquisite. Couldn't have asked for a better stay.</p>
                    <span>- Michael Brown</span>
                </div>
                <div className="review-card">
                    <p>From the moment we arrived, we felt like royalty. The staff went above and beyond to ensure our comfort.</p>
                    <span>- Sarah Davis</span>
                </div>
                <div className="review-card">
                    <p>Beautiful location, excellent service, and luxurious accommodations. This hotel is a gem!</p>
                    <span>- David Wilson</span>
                </div>
            </section>
        </section>
    );
};

export default Review;
