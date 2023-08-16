import React, { useState, useRef, useEffect } from "react";
import "./Project.css";
import image1 from "../../assests/infomaticsss.png";
import image4 from "../../assests/Quonovate.png";
import image3 from "../../assests/netflixclone.png";
import image5 from "../../assests/dining.png";
import image2 from "../../assests/evess.png"; // Import your images

const Project = () => {
  const scrollContainerRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null); // Added state for hovered index
  const scrollStep = 1;

  useEffect(() => {
    const container = scrollContainerRef.current;
    const containerWidth = container.offsetWidth;
    const maxPosition = container.scrollWidth - containerWidth;

    if (scrollPosition >= maxPosition) {
      container.scrollTo({ left: 0, behavior: "auto" });
      setScrollPosition(0);
    }

    const interval = setInterval(() => {
      if (hoveredIndex === null) {
        // Check if an image is hovered
        const newPosition = scrollPosition + scrollStep;
        container.scrollLeft = newPosition;
        setScrollPosition(newPosition);
      }
    }, 10);

    return () => {
      clearInterval(interval);
    };
  }, [scrollPosition, hoveredIndex]);

  return (
    <>
      <div className="projectBack" id="portfolio">
        <div className="phead">My Website and Development Projects</div>
        <div className="paraDiv">
          🌟 Passionate about Frontend Development, I'm eager to turn my
          creative coding skills into impactful user experiences. 🖥️ If you're
          on the lookout for a dedicated intern or a talented team member, let's
          connect! Together, we can bring designs to life and craft intuitive
          interfaces. Reach out for exciting opportunities in the world of
          frontend innovation. 🚀 #FrontendEnthusiast #OpentoOpportunities
        </div>
        <div className="scroll-container">
          <div ref={scrollContainerRef} className="horizontal-scroll-container">
            <img src={image5} alt="Image 5" />

            <a
              href="https://infomatics-ten.vercel.app/"
              onMouseEnter={() => setHoveredIndex(0)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() =>
                (window.location.href = "https://infomatics-ten.vercel.app/")
              }
            >
              <div className="image-wrapper">
                <img src={image1} alt="Image 1" />
              </div>
            </a>
            <a
              href="https://evehealthcarecenter.com/"
              onMouseEnter={() => setHoveredIndex(1)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() =>
                (window.location.href = "https://evehealthcarecenter.com/")
              }
            >
              <div className="image-wrapper">
                <img src={image2} alt="Image 2" />
              </div>
            </a>
            <a
              href="https://netflix-mu-wheat.vercel.app/"
              onMouseEnter={() => setHoveredIndex(2)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() =>
                (window.location.href = "https://netflix-mu-wheat.vercel.app/")
              }
            >
              <div className="image-wrapper">
                <img src={image3} alt="Image 3" />
              </div>
            </a>
            <img src={image4} alt="Image 4" />
            {/* Add more image elements as needed */}
          </div>
          <div className="scroll-buttons">
            <button>&#8249;</button>
            <button>&#8250;</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
