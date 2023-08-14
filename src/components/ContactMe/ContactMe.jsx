import React from "react";
import "./ContactMe.css"

const ContactMe = () => {
  return (
    <>
      <div className="contactBack" id="contact">
        <div className="centreDiv">
            <div id='contact'>Contact Me</div>
            <div className="inputs">
                <div><input type="text" placeholder="Full Name"/></div>
                <div><input type="text" placeholder="Mobile Number"/></div>
                <div><input type="text" placeholder="Email Address"/></div>

            </div>
            <div className="Subject">
                <input type="text" placeholder="Subject"/>
            </div>
            <div className="message">
                <input type="text" placeholder="Write Message"/>
            </div>
            <div className="butt"><button>Send Message</button></div>
                
        </div>
      </div>
    </>
  );
};

export default ContactMe;
