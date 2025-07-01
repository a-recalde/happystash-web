import React from 'react';
import './Download.css';

const Download = () => {
  return (
    <div className="download-page">
      <div className="container">
        <div className="download-options">
          <div className="download-card">
            <div className="download-icon">
              <i className="app-store-icon"></i>
            </div>
            <h2>iOS Download</h2>
            <p>Download HappyStash for your iPhone or iPad</p>
            <a href="https://apps.apple.com/app/happystash" className="download-button">
              Download on the App Store
            </a>
          </div>
        </div>
        
        <section className="coming-soon-section">
          <h2>Coming to More Platforms</h2>
          <p>We're working hard to bring HappyStash to more platforms in the future. Stay tuned for updates!</p>
        </section>
      </div>
    </div>
  );
};

export default Download;
