// Header.js
import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <h1>Nexus EV</h1>
        <p className="tagline">The Future of Electric Mobility</p>
      </div>
      <nav className="nav">
        <ul>
          <li><a href="#vision">Vision</a></li>
          <li><a href="#development">Development</a></li>
          <li><a href="#technology">Technology</a></li>
          <li><a href="#gallery">Gallery</a></li>
          <li><a href="#contact">Invest</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;