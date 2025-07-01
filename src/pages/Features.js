import React from 'react';
import './Features.css';

const Features = () => {
  return (
    <div className="features-page">
      <div className="hero">
        <div className="container">
          <h1>HappyStash Features</h1>
          <p>Discover all the ways HappyStash helps you capture and share life's special moments</p>
        </div>
      </div>
      
      <div className="container">
        <section className="feature-section">
          <div className="feature-content">
            <h2>Secure Memory Sharing</h2>
            <p>Share your special moments only with the people you choose. HappyStash uses end-to-end encryption to ensure your memories stay private and secure.</p>
            <ul className="feature-list">
              <li>End-to-end encryption for all shared content</li>
              <li>Control exactly who sees your memories</li>
              <li>No public feeds or unexpected sharing</li>
              <li>Secure recovery system to protect your data</li>
            </ul>
          </div>
          <div className="feature-image">
            <div className="placeholder-image">Security Feature Image</div>
          </div>
        </section>
        
        <section className="feature-section reverse">
          <div className="feature-content">
            <h2>Celebration Animations</h2>
            <p>Make every moment special with our unique celebration animations. Add confetti, effects, and reactions to your shared memories to express joy and excitement.</p>
            <ul className="feature-list">
              <li>Interactive celebration effects</li>
              <li>Custom reactions to shared memories</li>
              <li>Animated stickers and emojis</li>
              <li>Special occasion templates</li>
            </ul>
          </div>
          <div className="feature-image">
            <div className="placeholder-image">Celebrations Feature Image</div>
          </div>
        </section>
        
        <section className="feature-section">
          <div className="feature-content">
            <h2>Location-Based Memories</h2>
            <p>Capture not just the moment but also the place. HappyStash can remember where your special memories happened, making it easy to revisit and reminisce.</p>
            <ul className="feature-list">
              <li>Optional location tagging for memories</li>
              <li>Map view of your memory collection</li>
              <li>Location-based memory suggestions</li>
              <li>Privacy controls for location sharing</li>
            </ul>
          </div>
          <div className="feature-image">
            <div className="placeholder-image">Location Feature Image</div>
          </div>
        </section>
        
        <section className="feature-section reverse">
          <div className="feature-content">
            <h2>Friend Connections</h2>
            <p>Connect with friends and family to share your special moments. Build your private network of the people who matter most to you.</p>
            <ul className="feature-list">
              <li>Simple friend invitation system</li>
              <li>Customizable sharing permissions</li>
              <li>Group sharing for family events</li>
              <li>Birthday and special occasion reminders</li>
            </ul>
          </div>
          <div className="feature-image">
            <div className="placeholder-image">Friends Feature Image</div>
          </div>
        </section>
        
        <section className="feature-section">
          <div className="feature-content">
            <h2>Memory Editing Tools</h2>
            <p>Make your memories look their best with our built-in editing tools for photos and videos.</p>
            <ul className="feature-list">
              <li>Photo filters and adjustments</li>
              <li>Video trimming and editing</li>
              <li>Text and sticker overlays</li>
              <li>Memory collages and collections</li>
            </ul>
          </div>
          <div className="feature-image">
            <div className="placeholder-image">Editing Feature Image</div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Features;
