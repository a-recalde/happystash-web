import React from 'react';
import './Features.css';

const Features = () => {
  return (
    <div className="features-page">
      
      <div className="container">
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon security-icon"></div>
            <h2>Secure Memory Sharing</h2>
            <p>Share your special moments only with the people you choose. HappyStash uses end-to-end encryption to ensure your memories stay private and secure.</p>
            <ul className="feature-list">
              <li>End-to-end encryption for all content</li>
              <li>Control exactly who sees your memories</li>
              <li>No public feeds or unexpected sharing</li>
            </ul>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon celebration-icon"></div>
            <h2>Celebration Animations</h2>
            <p>Make every moment special with our unique celebration animations. Add confetti, effects, and reactions to express joy and excitement.</p>
            <ul className="feature-list">
              <li>Interactive celebration effects</li>
              <li>Custom reactions to shared memories</li>
              <li>Animated stickers and emojis</li>
            </ul>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon location-icon"></div>
            <h2>Location-Based Memories</h2>
            <p>Capture not just the moment but also the place. HappyStash remembers where your special memories happened, making it easy to revisit and reminisce.</p>
            <ul className="feature-list">
              <li>Optional location tagging</li>
              <li>Map view of your memory collection</li>
              <li>Privacy controls for location sharing</li>
            </ul>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon friends-icon"></div>
            <h2>Friend Connections</h2>
            <p>Connect with friends and family to share your special moments. Build your private network of the people who matter most to you.</p>
            <ul className="feature-list">
              <li>Simple friend invitation system</li>
              <li>Customizable sharing permissions</li>
              <li>Group sharing for family events</li>
            </ul>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon editing-icon"></div>
            <h2>Memory Editing Tools</h2>
            <p>Make your memories look their best with our built-in editing tools for photos and videos.</p>
            <ul className="feature-list">
              <li>Photo filters and adjustments</li>
              <li>Text and sticker overlays</li>
              <li>Memory collages and collections</li>
            </ul>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon recovery-icon"></div>
            <h2>Secure Recovery</h2>
            <p>Never lose access to your precious memories with our secure recovery system.</p>
            <ul className="feature-list">
              <li>BIP39 recovery phrases</li>
              <li>Secure backup options</li>
              <li>Device migration support</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
