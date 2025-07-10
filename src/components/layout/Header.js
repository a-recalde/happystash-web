import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logoImage from '../../assets/images/website-logo.png';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <Link to="/">
            <img src={logoImage} alt="HappyStash Logo" className="logo-image" />
          </Link>
        </div>
        <nav className="nav">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/features">Features</Link></li>
            <li><Link to="/privacy">Privacy</Link></li>
            <li><Link to="/terms">Terms</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
