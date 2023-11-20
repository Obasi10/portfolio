import React from "react";
import { Link } from "react-router-dom";
import {motion} from "framer-motion";
import Copyright from "./copyright";
import Variants from "./variants";
import Pic from "../images/Featured post/IMG-20211001-WA0002.jpg";
import "bootstrap/dist/js/bootstrap.min.js";
import state from "./info";

const avail=""+document.documentElement.clientHeight+"px"
const avail2=""+(document.documentElement.clientHeight*0.9)+"px"

const nextVariants = {
    hidden: { 
      x: '-100vw' 
    },
    visible: {
      x: 0,
      transition: {delay: 2, type: 'spring', stiffness: 400, duration:10}
    } 
}
const nextVariants2= {
  hidden: { 
    x: '100vw' 
  },
  visible: {
    x: 0,
    transition: { delay: 1.5,type: 'spring', stiffness: 400, duration:10}
  } 
}

const Profile=({w,setchange, changeset})=>{

    return(
      <>
      {w<=500 && (
        <div className="container-lg">
          <nav className="navbar fixed-top navbar-expand-md bglite">
              <h1 className="motion4 bi bi-person-bounding-box beginner fw-bold" style={{textAlign: "center", margin: "auto"}}> Profile</h1>
          </nav>
        </div>
      )}
        <motion.div id="main2" style={{minHeight: avail}}
            variants={Variants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onLoad={()=>setchange(1)}
        >
            <div className="main5" style={{minHeight: avail2, marginBottom: "0%"}}>
                {w>500 && (<h1 className="begin motion2" style={{color:"rgb(1, 32, 72)", textDecoration:"underline"}}>Profile</h1>)}
                <div style={{display:"flex", justifyContent: "space-around", gap:"5%", alignContent:"center", alignItems: "center"}}>
                  <div className="beginner my-3" style={{color: "black", fontStyle: "italic"}}>
                      <div style={{minWidth: "90%", fontWeight:300}}><span style={{color: "rgb(1, 1, 51)"}} >Name: </span><span>Innocent Chukwuma Obasi</span></div>
                      <div style={{minWidth: "90%", fontWeight:300}}><span style={{color: "rgb(1, 1, 51)"}} >Tel: </span><span>+234 8133151825</span></div>
                      <div style={{minWidth: "90%", fontWeight:300}}><span style={{color: "rgb(1, 1, 51)"}} >City: </span><span><motion.i className="bi bi-geo-alt-fill motion" style={{color: "blue"}}></motion.i> Lagos, Nigeria</span></div>
                      <div style={{minWidth: "90%", fontWeight:300}}><span style={{color: "rgb(1, 1, 51)"}} >Email: </span><span>Obasiinno99@gmail.com</span></div>
                  </div>
                  <div style={{maxWidth:"40%"}}>
                    <div ><img className="styleim" src={Pic} alt=""/></div>
                  </div>
                </div>
                <div className="accordion" id="chapters">
                    <motion.div className="accordion-item beginner" variants={nextVariants2} initial="hidden" animate="visible">
                      <h2 className="accordion-header" id="heading-1">
                        <button className="accordion-button py-2 my-1 beginner bglite" type="button" data-bs-toggle="collapse" data-bs-target="#chapter-1" aria-expanded="true" aria-controls="chapter-1">
                          About me
                        </button>
                      </h2>
                      <div id="chapter-1" className="accordion-collapse collapse show" aria-labelledby="heading-1" data-bs-parent="#chapters">
                        <div className="accordion-body justify-content-start black">
                          <p className="beginner">
                            A thorough analyst when it comes to transforming conflicting data into a more comprehendible and enjoyable form.
                            An astute developer filled with ideas to give modern web apps better user experience and aesthetic value.
                          </p>
                          <p className="beginner">
                          A Quick learner and innovative 
                            thinker with over five years of hands-on engineering training and learning. 
                            Highly skilled in research and numerical modelling of engineering systems. 
                            Able to provide strategic leadership and facilitate tutoring; also able to work as a team member or independently.
                          </p>
                        </div>
                      </div>
                    </motion.div>
                    <motion.div className="accordion-item" variants={nextVariants} initial="hidden" animate="visible">
                      <h2 className="accordion-header" id={`heading-${2}`}>
                        <button className="accordion-button collapsed py-2 my-1 beginner bglite" type="button" data-bs-toggle="collapse" data-bs-target={`#chapter-${2}`} aria-expanded="false" aria-controls={`chapter-${2}`}>
                          Education
                        </button>
                      </h2>
                        <div id={`chapter-${2}`} className="accordion-collapse collapse" aria-labelledby={`heading-${2}`} data-bs-parent="#chapters">
                            <div className="accordion-body justify-content-center black">
                                <table>
                                    <tbody className="beginner">
                                        <tr>
                                            <td style={{fontWeight:"bold"}}>Bachelor’s Degree</td>
                                            <td>2019</td>
                                        </tr>
                                        <tr>
                                            <td><p>Marine Engineering with upper division (CGPA 4.40/5.0)</p>
                                                <p>Rivers State University, Port-Harcourt.</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style={{fontWeight:"bold"}}>National Diploma </td>
                                            <td>2015</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <p>Marine Engineering with distinction (CGPA 3.52/4.0)</p>
                                                <p>Yaba College of Technology, Lagos.</p>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                      </div>
                    </motion.div>
                    {state.map(({id, pos, content})=>(<motion.div className="accordion-item" key={id} variants={nextVariants2} initial="hidden" animate="visible">
                      <h2 className="accordion-header" id={`heading-${pos}`}>
                        <button className="accordion-button collapsed py-2 my-1 beginner bglite" type="button" data-bs-toggle="collapse" data-bs-target={`#chapter-${pos}`} aria-expanded="false" aria-controls={`chapter-${pos}`}>
                          {id}
                        </button>
                      </h2>
                        <div id={`chapter-${pos}`} className="accordion-collapse collapse" aria-labelledby={`heading-${pos}`} data-bs-parent="#chapters">
                            <div className="accordion-body justify-content-center">
                            <p className="beginner">{content[0]}</p>
                            <p className="beginner">{content[1]}</p>
                        </div>
                      </div>
                    </motion.div>))}
                </div>

                <motion.div className="trials" style={{ textAlign: "center", justifyContent: "space-around"}} variants={nextVariants} initial="hidden" animate="visible">
                    <div className="trial" style={{textAlign: "start", minWidth:"15%"}}>
                        <Link to="/"><motion.button className="btn2 motion3" variants={Variants} whileHover="hover"><i className="bi bi-house"> Home</i></motion.button></Link>
                    </div>
                    <div className="trial-rem">
                        <Link to="/projects" ><motion.button className="btn2 motion3" variants={Variants} whileHover="hover"
                            style={{ textTransform:"capitalize", minWidth:"55%"}}><i className="bi bi-laptop"> Projects</i></motion.button></Link>
                    </div>
                </motion.div>
                <div style={{marginTop:"10%"}}>
                {document.documentElement.clientWidth<=700 && (<Copyright w={w} changeset={changeset}/>)}
                </div>
            </div>
            {document.documentElement.clientWidth>700 && (<Copyright w={w} changeset={changeset}/>)}
        </motion.div>
        </>
    )
}
export default Profile