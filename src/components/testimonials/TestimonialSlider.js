import React, { useState, useEffect } from 'react';
import './TestimonialSlider.css';
import { testimonials } from './TestimonialData';

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000); // Change testimonial every 5 seconds
    
    return () => clearInterval(interval);
  }, []);
  
  // Manual navigation
  const goToTestimonial = (index) => {
    setCurrentIndex(index);
  };
  
  return (
    <div className="testimonial-slider-container">      
      <div className="testimonial-slider">
        {testimonials.map((testimonial, index) => (
          <div 
            key={testimonial.id}
            className={`testimonial ${index === currentIndex ? 'active' : ''}`}
            style={{ transform: `translateX(${100 * (index - currentIndex)}%)` }}
          >
            <p>"{testimonial.text}"</p>
            <div className="testimonial-author">- {testimonial.author}</div>
            
            <div className="slider-dots">
              {testimonials.map((_, dotIndex) => (
                <span 
                  key={dotIndex} 
                  className={`dot ${dotIndex === currentIndex ? 'active' : ''}`}
                  onClick={() => goToTestimonial(dotIndex)}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialSlider;
