// function Review() {
//     return (
//         <section className="reviews">
//             <div className="review-card">
//                 <img src="https://i.pinimg.com/236x/82/19/e9/8219e955fd50a0eb26959d17f4b173c7.jpg" alt="Sarah L."/>
//                 <h3>Sarah L.</h3>
//                 <p>"JestoBook helped me find my comedic soulmate. We're now performing stand-up together!"</p>
//             </div>
//             <div className="review-card">
//                 <img src="https://i.pinimg.com/236x/82/19/e9/8219e955fd50a0eb26959d17f4b173c7.jpg" alt="Mike R."/>
//                 <h3>Mike R.</h3>
//                 <p>"I've never laughed so much in my life. JestoBook is a game-changer for aspiring comedians!"</p>
//             </div>
//             <div className="review-card">
//                 <img src="https://i.pinimg.com/236x/82/19/e9/8219e955fd50a0eb26959d17f4b173c7.jpg" alt="Emma T."/>
//                 <h3>Emma T.</h3>
//                 <p>"Thanks to JestoBook, I found a group of friends who appreciate my dad jokes. Life-changing!"</p>
//             </div>
//         </section>
//     );
// }

// export default Review;




// import React, { useState, useEffect } from 'react';
// import './Review.css'; // Import the CSS for styling

// const Review = () => {
//     const [currentIndex, setCurrentIndex] = useState(0);
//     const [testimonials, setTestimonials] = useState([
//         {
//             name: "John Doe",
//             text: "Our stay at the hotel was absolutely wonderful. The staff were incredibly accommodating and the amenities were top-notch. We will definitely be back!",
//             img: "https://via.placeholder.com/40"
//         },
//         {
//             name: "Jane Smith",
//             text: "I was blown away by the stunning views and the luxurious rooms. This hotel truly offers an unparalleled experience.",
//             img: "https://via.placeholder.com/40"
//         },
//         {
//             name: "Emily Johnson",
//             text: "The exceptional service and attention to detail made our visit unforgettable. Highly recommend to anyone looking for a first-class stay.",
//             img: "https://via.placeholder.com/40"
//         },
//         {
//             name: "Michael Brown",
//             text: "Amazing experience! The ambiance is perfect and the food is exquisite. Couldn't have asked for a better stay.",
//             img: "https://via.placeholder.com/40"
//         },
//         {
//             name: "Sarah Davis",
//             text: "From the moment we arrived, we felt like royalty. The staff went above and beyond to ensure our comfort.",
//             img: "https://via.placeholder.com/40"
//         },
//         {
//             name: "David Wilson",
//             text: "Beautiful location, excellent service, and luxurious accommodations. This hotel is a gem!",
//             img: "https://via.placeholder.com/40"
//         },
//         {
//             name: "Lisa Martinez",
//             text: "Exceptional attention to detail, from the room decor to the personalized service. Highly recommend!",
//             img: "https://via.placeholder.com/40"
//         },
//         {
//             name: "Robert Garcia",
//             text: "The spa treatments were divine, and the overall atmosphere is so relaxing. Will definitely return.",
//             img: "https://via.placeholder.com/40"
//         },
//         {
//             name: "Karen Rodriguez",
//             text: "Perfect place for a family vacation. Kids loved the activities, and we enjoyed the serene environment.",
//             img: "https://via.placeholder.com/40"
//         },
//     ]);
    
//     const [showTestimonialForm, setShowTestimonialForm] = useState(false);
//     const [newTestimonial, setNewTestimonial] = useState({ name: '', text: '' });
    
//     useEffect(() => {
//         const autoSlide = setInterval(() => {
//             setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
//         }, 5000);

//         return () => clearInterval(autoSlide);
//     }, [testimonials.length]);

//     const moveSlide = (direction) => {
//         setCurrentIndex((prevIndex) => {
//             const newIndex = prevIndex + direction;
//             return newIndex < 0 ? testimonials.length - 1 : newIndex % testimonials.length;
//         });
//     };

//     const handleTestimonialChange = (e) => {
//         const { name, value } = e.target;
//         setNewTestimonial((prev) => ({ ...prev, [name]: value }));
//     };

//     const handleSubmitTestimonial = (e) => {
//         e.preventDefault();
//         if (newTestimonial.name && newTestimonial.text) {
//             setTestimonials((prev) => [...prev, { ...newTestimonial, img: "https://via.placeholder.com/40" }]);
//             setNewTestimonial({ name: '', text: '' });
//             setShowTestimonialForm(false);
//         }
//     };

//     return (
//         <section className="carousel" aria-label="Reviews Carousel">
//             <button className="nav-button prev" onClick={() => moveSlide(-1)} aria-label="Previous Review">&#10094;</button>
//             <button className="nav-button next" onClick={() => moveSlide(1)} aria-label="Next Review">&#10095;</button>
//             <button className="testimonial-button" onClick={() => setShowTestimonialForm((prev) => !prev)} aria-label="Add Testimonial">+</button>

//             <div className="carousel-inner" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
//                 {testimonials.map((testimonial, index) => (
//                     <div className="review" key={index}>
//                         <img src={testimonial.img} alt={testimonial.name} />
//                         <p>{testimonial.text}</p>
//                         <span>- {testimonial.name}</span>
//                     </div>
//                 ))}
//             </div>

//             {showTestimonialForm && (
//                 <div id="my-testimony">
//                     <form onSubmit={handleSubmitTestimonial}>
//                         <h3>Add Your Testimonial</h3>
//                         <input
//                             type="text"
//                             name="name"
//                             value={newTestimonial.name}
//                             onChange={handleTestimonialChange}
//                             placeholder="Your Name"
//                             required
//                         />
//                         <textarea
//                             name="text"
//                             value={newTestimonial.text}
//                             onChange={handleTestimonialChange}
//                             rows="4"
//                             placeholder="Your Testimonial"
//                             required
//                         />
//                         <button type="submit">Submit</button>
//                     </form>
//                 </div>
//             )}
//         </section>
//     );
// };

// export default Review;




import React, { useState, useEffect } from 'react';
import './Review.css'; 
// import backgroundImage from '../../Jesto Images/Shockwave2015.jpeg';

const Review = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [testimonials, setTestimonials] = useState([
        {
            name: "John Doe",
            text: "Our stay at the hotel was absolutely wonderful. The staff were incredibly accommodating and the amenities were top-notch. We will definitely be back!",
        },
        {
            name: "Jane Smith",
            text: "I was blown away by the stunning views and the luxurious rooms. This hotel truly offers an unparalleled experience.",
        },
        {
            name: "Emily Johnson",
            text: "The exceptional service and attention to detail made our visit unforgettable. Highly recommend to anyone looking for a first-class stay.",
        },
        {
            name: "Michael Brown",
            text: "Amazing experience! The ambiance is perfect and the food is exquisite. Couldn't have asked for a better stay.",
        },
        {
            name: "Sarah Davis",
            text: "From the moment we arrived, we felt like royalty. The staff went above and beyond to ensure our comfort.",
        },
        {
            name: "David Wilson",
            text: "Beautiful location, excellent service, and luxurious accommodations. This hotel is a gem!",
        },
        {
            name: "Lisa Martinez",
            text: "Exceptional attention to detail, from the room decor to the personalized service. Highly recommend!",
        },
        {
            name: "Robert Garcia",
            text: "The spa treatments were divine, and the overall atmosphere is so relaxing. Will definitely return.",
        },
        {
            name: "Karen Rodriguez",
            text: "Perfect place for a family vacation. Kids loved the activities, and we enjoyed the serene environment.",
        },
    ]);

    const [showTestimonialForm, setShowTestimonialForm] = useState(false);
    const [newTestimonial, setNewTestimonial] = useState({ name: '', text: '' });

    useEffect(() => {
        const autoSlide = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        }, 5000);

        return () => clearInterval(autoSlide);
    }, [testimonials.length]);

    const moveSlide = (direction) => {
        setCurrentIndex((prevIndex) => {
            const newIndex = prevIndex + direction;
            return newIndex < 0 ? testimonials.length - 1 : newIndex % testimonials.length;
        });
    };

    const handleTestimonialChange = (e) => {
        const { name, value } = e.target;
        setNewTestimonial((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmitTestimonial = (e) => {
        e.preventDefault();
        if (newTestimonial.name && newTestimonial.text) {
            setTestimonials((prev) => [...prev, { ...newTestimonial }]);
            setNewTestimonial({ name: '', text: '' });
            setShowTestimonialForm(false);
        }
    };

    return (
        <section className="review-section">
            <h1>
                Success Stories from our Users
            </h1>
            <section className="carousel" aria-label="Reviews Carousel">
                <button className="nav-button prev" onClick={() => moveSlide(-1)} aria-label="Previous Review">&#10094;</button>
                <button className="nav-button next" onClick={() => moveSlide(1)} aria-label="Next Review">&#10095;</button>
                <button className="testimonial-button" onClick={() => setShowTestimonialForm((prev) => !prev)} aria-label="Add Testimonial">
                    <span>+</span>
                </button>

                <div className="carousel-inner" style={{ transform: `translateX(-${currentIndex * 320}px)` }}>
                    {testimonials.map((testimonial, index) => (
                        <div className="review" key={index}>
                            <p>{testimonial.text}</p>
                            <span>- {testimonial.name}</span>
                        </div>
                    ))}
                </div>

                {showTestimonialForm && (
                    <div id="my-testimony">
                        <form onSubmit={handleSubmitTestimonial}>
                            <h3>Add Your Testimonial</h3>
                            <input
                                type="text"
                                name="name"
                                value={newTestimonial.name}
                                onChange={handleTestimonialChange}
                                placeholder="Your Name"
                                required
                            />
                            <textarea
                                name="text"
                                value={newTestimonial.text}
                                onChange={handleTestimonialChange}
                                rows="4"
                                placeholder="Your Testimonial"
                                required
                            />
                            <button type="submit">Submit</button>
                        </form>
                    </div>
                )}
            </section>
        </section>
    );
};

export default Review;
