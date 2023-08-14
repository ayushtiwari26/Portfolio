import React from 'react'
import "./Skills.css"
import {FaBirthdayCake, FaSchool, FaUserGraduate } from 'react-icons/fa';
import {MdLocationOn} from 'react-icons/md'

import {FaReact, FaHtml5} from 'react-icons/fa'
import {SiJavascript, SiCss3, SiMicrosoftazure, SiSolidity} from 'react-icons/si'
import {TbDatabase} from 'react-icons/tb'
import { IconContext } from "react-icons"
import EVE from "../../assests/EVE.png"
import Infomatics from '../../assests/Infomatics.png'
import Codepanda from "../../assests/Codepanda.png"
import CodeClause from "../../assests/codeclause.png"
const skills = () => {
  return (
    <>
      <div className='Educations'>
        <div className="mypersonal">
          <div className="mydob">
           <div className='IconStyle'> <FaBirthdayCake size={40} 
          //  onMouseOver={({target})=>target.style.color="Red"}
          //  onMouseOut={({target})=>target.style.color="black"}
          /></div> <p>26 March 2001</p>
          </div>
          <div className="myaddress">
          <div className='IconStyle'>  <MdLocationOn size={40}/></div><p>Bilaspur,Chhattisgarh</p>
          </div>

        </div>
        <div className="myeducation">
          <div className="myschool">
          <div className='IconStyle'>  <FaSchool size={40}/> </div><p>SEC Rly Eng Med School, Bilaspur</p>
          </div>
          <div className="mycollege">
          <div className='IconStyle'>  <FaUserGraduate size={40}/></div><p>United Institute Of Technology, Prayagraj</p>
          </div>


        </div>
      </div>
      <div className="pi-right" id="education">
        <div className="LeftSkill">
            <div className="skills center">Skills</div>
            <br /><br />
            <div className="buttons">
              <div className="LeftDiv">
                <div className="icon">
                  <IconContext.Provider value={{className:'scale1'}}>
                    <SiJavascript size={60} style={{color:'#F7CE01', background:'black'}}  />
                  </IconContext.Provider>
                  <div>Javascript</div>
                </div>

                <div className="icon">
                  <IconContext.Provider value={{className:'scale1'}}>
                    <FaReact size={60} style={{color:'white', background:'#00D8FF'}}/>
                  </IconContext.Provider>
                  <div>React</div>
                </div>

                <div className="icon">
                  <IconContext.Provider value={{className:'scale1'}}>
                    <FaHtml5 size={60}  style={{color:'white', background:'#E44D26'}} />
                  </IconContext.Provider>
                  <div>HTML 5</div>
                </div>

                </div>
              <div className="LeftDiv">

                <div className="icon">
                <IconContext.Provider value={{className:'scale1'}}>
                  <SiCss3 size={60}  style={{color:'white', background:'#177CBE'}}/>
                </IconContext.Provider>
                  <div>CSS</div>
                </div>

                <div className="icon">
                <IconContext.Provider value={{className:'scale1'}}> 
                  <TbDatabase size={60} style={{color:'#170369'}}/>
                </IconContext.Provider>
                  <div>SQL</div>
                </div>
                </div>
              </div>
            </div>
          <div className='Exp'>
            <div className="skills center">Company Worked With</div>
            <br /><br />
            <div className="companyList">
              <div className="firstCol">
                <div className="comapny1">
                  <img src={EVE} width={80} height={70} />
                  {/* <p>Eve HealthCare</p> */}
                </div>
                
                <div className="comapny1">
                <img src={Infomatics} width={300} height={70} />
                {/* <p> Infomatics Technology</p> */}
                </div>
              </div>
              <div className="firstCol Top">

            
              <div className="comapny1">
                <img src={Codepanda} width={300} height={70} />
                {/* <p> Code Panda</p> */}
              </div>
              <div className="comapny1">
                  <img src={CodeClause} width={80} height={70} />
                  {/* <p>Code Clause</p> */}
                </div>
              </div>
            </div>
          </div>

        </div>

    </>
    
  )
}

export default skills