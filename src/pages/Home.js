import React from 'react';
import { Link } from 'react-router-dom';
import TestimonialSlider from '../components/testimonials/TestimonialSlider';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Celebrate Life's Special Moments</h1>
            <p>HappyStash helps you capture, share, and celebrate your precious memories with the people who matter most.</p>
            <div className="cta-buttons">
              <a href="https://apps.apple.com/app/id6747241457" className="btn btn-primary">Download Now</a>
              <Link to="/features" className="btn btn-secondary">Learn More</Link>
            </div>
          </div>
          <div className="hero-image">
            {/* App screenshot */}
            <img src={require('../assets/images/happy_home.png')} alt="HappyStash App" className="placeholder-image" />
          </div>
        </div>
      </section>

      <section className="features-overview">
        <div className="container">
          <h2>Why Choose HappyStash?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🔒</div>
              <h3>Secure Sharing</h3>
              <p>Share memories only with the people you choose, with end-to-end encryption.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎉</div>
              <h3>Celebrate Together</h3>
              <p>Create and share special moments with friends and family, no matter where they are.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📱</div>
              <h3>Easy to Use</h3>
              <p>Intuitive design makes capturing and sharing memories simple and fun.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔄</div>
              <h3>Recovery Options</h3>
              <p>Never lose your precious memories with our secure recovery system.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials">
        <div className="container">
          <h2>What Our Users Say</h2>
          <TestimonialSlider />
        </div>
      </section>

      <section className="download-cta">
        <div className="container">
          <div className="cta-flex">
            <h2>Ready to start creating memories?</h2>
            <a href="https://apps.apple.com/app/id6747241457" className="btn btn-primary">Download Now</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
