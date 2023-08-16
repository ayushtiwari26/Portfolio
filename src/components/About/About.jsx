import React, { useEffect, useState } from 'react'
import "./About.css"
import aboutme from "../../assests/aboutme.png"
const About = () => {
  const [isSectionVisible, setIsSectionVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.querySelector('.AboutBack');
      if (section) {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight * 0.75) {
          setIsSectionVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <div className={`AboutBack ${isSectionVisible ? 'fadeIn' : ''}`} id="about">
      <div className="aboutHead">
        {/* <div className="about">About</div> */}
        <div className="abtpersonal">Personal Info</div>
        <div className="abtknow">Get to know more about me</div>
      </div>
      <div className="abutdata">
        <div className={`abutLink ${isSectionVisible ? 'slideInLeft' : ''}`}><img  src={aboutme}/></div>
        <div className={`aboutpara ${isSectionVisible ? 'slideInRight' : ''}`}>
          My name is Ayush Tiwari.
         I'm a passionate Frontend Web Developer using web technologies to 
         build amazing websites and focused on becoming a full stack web3 
         developer.
         <br/>
         I will love to hear from you. Whether it's a project, 
         job opportunity or just a chat. Feel free to contact me.
         </div>
      </div>
    </div>
  )
}

export default About