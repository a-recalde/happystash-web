import React from 'react';
import './Download.css';

const Download = () => {
  return (
    <div className="download-page">
      <div className="hero">
        <div className="container">
          <h1>Download HappyStash</h1>
          <p>Get started with HappyStash today and begin capturing your special moments</p>
        </div>
      </div>
      
      <div className="container">
        <div className="download-options">
          <div className="download-card">
            <div className="download-icon">
              <i className="app-store-icon">App Store</i>
            </div>
            <h2>iOS Download</h2>
            <p>Download HappyStash for your iPhone or iPad</p>
            <a href="https://apps.apple.com/app/happystash" className="download-button">
              Download on the App Store
            </a>
          </div>
          
          <div className="download-card">
            <div className="download-icon">
              <i className="play-store-icon">Play Store</i>
            </div>
            <h2>Android Download</h2>
            <p>Download HappyStash for your Android device</p>
            <a href="https://play.google.com/store/apps/details?id=app.happystash" className="download-button">
              Get it on Google Play
            </a>
          </div>
        </div>
        
        <section className="qr-section">
          <h2>Scan to Download</h2>
          <p>Scan this QR code with your mobile device to download HappyStash</p>
          <div className="qr-placeholder">QR Code</div>
        </section>
        
        <section className="requirements-section">
          <h2>System Requirements</h2>
          <div className="requirements-grid">
            <div className="requirement-card">
              <h3>iOS Requirements</h3>
              <ul>
                <li>iOS 14.0 or later</li>
                <li>Compatible with iPhone, iPad, and iPod touch</li>
                <li>Approximately 100MB of free space</li>
              </ul>
            </div>
            
            <div className="requirement-card">
              <h3>Android Requirements</h3>
              <ul>
                <li>Android 8.0 or later</li>
                <li>Approximately 80MB of free space</li>
                <li>Camera and location permissions (optional)</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Download;
