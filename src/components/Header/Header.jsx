import React from 'react';
// import './Header.css'; 

function Header() {
  return (
    <header>
      <div className="header-content">
        <img src="your-image-url.jpg" alt="Centered Image" className="centered-image" />
        <div className="right-buttons">
          <button>Dashboard</button>
          <button>Favorites</button>
          <button>NightMode</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
