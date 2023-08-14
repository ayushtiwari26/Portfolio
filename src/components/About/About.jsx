import React from 'react'
import "./About.css"
import aboutme from "../../assests/aboutme.png"
const about = () => {
  return (
    <div className="AboutBack" id="about">
      <div className="aboutHead">
        {/* <div className="about">About</div> */}
        <div className="abtpersonal">Personal Info</div>
        <div className="abtknow">Get to know more about me</div>
      </div>
      <div className="abutdata">
        <div className="abutLink"><img  src={aboutme}/></div>
        <div className="aboutpara">
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

export default about