import React from 'react';
import "./Nav.css";
import logo from "../../assests/logo.jpg"

const nav = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className='NavbarBg'>
      <div className='Navhead'>
        <img src={logo} alt='logo' className='NavImg' />
        <div className='Navleftdiv'>
          <ul className='Navlist'>
            <li onClick={() => scrollToSection('home')}>Home</li>
            <li onClick={() => scrollToSection('about')}>About</li>
            <li onClick={() => scrollToSection('education')}>Education</li>
            <li onClick={() => scrollToSection('portfolio')}>Portfolio</li>
            <li onClick={() => scrollToSection('contact')}>Contact</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default nav;