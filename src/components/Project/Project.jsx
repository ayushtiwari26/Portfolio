import React, { useState, useRef, useEffect } from 'react';
import "./Project.css";
import image1 from "../../assests/infomaticsss.png";
import image4 from "../../assests/Quonovate.png";
import image3 from "../../assests/netflixclone.png";
import image5 from "../../assests/dining.png";
import image2 from "../../assests/evess.png"; // Import your images

const Project = () => {
    const scrollContainerRef = useRef(null);
    const [scrollPosition, setScrollPosition] = useState(0);
    const scrollStep = 1; // Adjust the scrolling speed
  
    useEffect(() => {
      const container = scrollContainerRef.current;
      const containerWidth = container.offsetWidth;
      const maxPosition = container.scrollWidth - containerWidth;
  
      if (scrollPosition >= maxPosition) {
        container.scrollTo({ left: 0, behavior: 'auto' });
        setScrollPosition(0);
      }
  
      const interval = setInterval(() => {
        const newPosition = scrollPosition + scrollStep;
        container.scrollLeft = newPosition;
        setScrollPosition(newPosition);
      }, 10); // Adjust the interval for smoother scrolling
  
      return () => {
        clearInterval(interval);
      };
    }, [scrollPosition]);
  
  
  return (
    <>
      <div className="projectBack" id="portfolio">
        <div className="phead">My Website and Development Projects</div>
        <div className="paraDiv">
        🌟 Passionate about Frontend Development, I'm eager to turn my creative coding skills into impactful user experiences. 🖥️ If you're on the lookout for a dedicated intern or a talented team member, let's connect! Together, we can bring designs to life and craft intuitive interfaces. Reach out for exciting opportunities in the world of frontend innovation. 
        🚀 #FrontendEnthusiast #OpentoOpportunities
        </div>
        <div className="scroll-container">
          <div ref={scrollContainerRef} className="horizontal-scroll-container">
            <img src={image1} alt="Image 1" />
            <img src={image2} alt="Image 2" />
            <img src={image3} alt="Image 3" />
            <img src={image4} alt="Image 4" />
            <img src={image5} alt="Image 5" />
            {/* Add more image elements as needed */}
          </div>
          <div className="scroll-buttons">
            <button >&#8249;</button>
            <button >&#8250;</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Project;