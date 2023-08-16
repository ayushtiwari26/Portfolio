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
                    <a href='https://www.facebook.com/profile.php?id=100054922603737'><img src={FaceBook} width={40} height={40}/></a>
                    <a href='https://www.instagram.com/crowned_king01/'><img src={Insta} width={40} height={40}/></a>
                    <a href='https://www.linkedin.com/in/ayush-tiwari-b74736237/'><img src={linkedIn} width={40} height={40}/></a>
                    <a href='https://github.com/ayushtiwari26'> <img src={GitHub} width={40} height={40}/> </a>
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