import React from 'react'
import FaceBook from "../../assests/facebook.png"
import Insta from "../../assests/instagram.png"
import linkedIn from "../../assests/linkedin.png"
import GitHub from '../../assests/social.png';
import "./Footer.css"

const Footer = () => {
  return (
    <>
        <div className="footerback">
            <div className="fot"> 
                <div className="name">
                    Made with ❤ by 
                    <p>Ayush Tiwari</p>
                </div>
                <div className="connect">
                    <img src={FaceBook} width={40} height={40}/>
                    <img src={Insta} width={40} height={40}/>
                    <img src={linkedIn} width={40} height={40}/>
                    <img src={GitHub} width={40} height={40}/>
                </div>
            </div>
            <div className="down">
                Copyright @2023 All right reseverd.
            </div>
        </div>
    </>
  )
}

export default Footer