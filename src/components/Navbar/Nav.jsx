import React, { useState } from 'react';
import './Nav.css';
import logo from '../../assests/logo.png';


const Nav = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth',
      });
      closeMenu(); // Close the menu after clicking on a link
    }
  };

  return (
    <div className="NavbarBg">
      <div className="Navhead">
        <img src={logo} alt="logo" className="NavImg" />
        <div className="Navleftdiv">
          <ul className="Navlist">
            <li onClick={() => scrollToSection('home')}>Home</li>
            <li onClick={() => scrollToSection('about')}>About</li>
            <li onClick={() => scrollToSection('education')}>Education</li>
            <li onClick={() => scrollToSection('portfolio')}>Portfolio</li>
            <li onClick={() => scrollToSection('contact')}>Contact</li>
          </ul>
        </div>
        <div className={`NavMenuIcon ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
      <div className={`NavOverlay ${isMenuOpen ? 'active' : ''}`} onClick={closeMenu}>
        <ul className="Navlist OverlayNavList">
          <li onClick={() => scrollToSection('home')}>Home</li>
          <li onClick={() => scrollToSection('about')}>About</li>
          <li onClick={() => scrollToSection('education')}>Education</li>
          <li onClick={() => scrollToSection('portfolio')}>Portfolio</li>
          <li onClick={() => scrollToSection('contact')}>Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;