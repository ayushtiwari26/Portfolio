import React from 'react'
import "./Section.css"
import ayu from "../../assests/ayupic.JPG"

const Section = () => {
  
  const downloadCV = () => {
    // Replace this URL with the actual path to your PDF file
    const pdfUrl = process.env.PUBLIC_URL + '/AyushLatestPhotoResume.pdf';
    
    // Create an anchor element
    const anchor = document.createElement('a');
    anchor.href = pdfUrl;
    anchor.target = '_blank';
    anchor.download = 'Ayush Resume.pdf';
    
    // Programmatically click the anchor element
    anchor.click();
  };
  return (
    
    <div className="Section">
          <div className="Sectionleft" id="home">
              <div className='Paraleft'>
              <div className='Line1'><p> <span1 style={{color: "#FD4955"}}>Ayush Tiwari</span1></p></div>
              <div className='Line2'><p>I'm a<span style={{color: "#FD4955"}}> </span></p></div>
              <div className='Line3'><p>"I love designing websites and am looking for more opportunities to work in coding on a freelance basis."</p></div>
             <div className='aButt'><button class="button-77" role="button" onClick={downloadCV} >Download CV</button></div>



              </div>
            </div>
          <div className="Sectionright">
              <div className="Pararight">
                <img src={ayu} alt='logo' className='MyImg'/>
              </div>
          </div>
        </div>
  )
}

export default Section
