import React from "react";
import Pic from "../images/Featured post/IMG-20211001-WA0003.jpg"
import { Link } from "react-router-dom";
import {motion, AnimatePresence} from "framer-motion";
import Variants from "./variants";


const nextVariants = {
    hidden: { 
      x: '-100vw' 
    },
    visible: {
      x: 0,
      transition: { type: 'spring', stiffness: 400, duration:10}
    } 
}


const skillVariants={
    hidden: { 
        x: '100vw' 
    },
    visible: {
        x: 0,
        transition: { type: 'spring', stiffness: 12, duration:6}      
    },
    exit: {
        x: '100vw' 
    }
}

const svgVariants = {
    hidden: { rotate: -180 },
    visible: { 
      rotate: 0,
      transition: { 
        duration : 10,
        repeat: Infinity
     }
    },
}
  
const pathVariants = {
    hidden: {
        opacity: 0,
        pathLength: 0,
    },
    visible: {
        opacity: 1,
        pathLength: 1,
        transition: { 
        duration: 10,
        repeat: Infinity,
        ease: "easeInOut",
        }
    }
};

const skills1= {
    A: "Engineer skilled in systems modelling and research;",
    B:"Data Analyst skilled in MS Excel, SQL, MATLAB and Python;",
    C:"Full stack Web developer skilled in React, node.js, express, CSS and html",
    D: "Also able to implement designs in AutoCAD and SolidWorks, if given sufficient time and resources."
}

const skills2={
    A:"HTML and CSS (bootstrap inclusive)",
    B:"Javascript: Mathjax, React, node.js, react-plotly",
    C:"Ms Excel and python",
    D: "MATLAB, AutoCAD"
}

const Home=()=>{
    var state=[{id: "first", content: skills1}, {id: "second", content: skills2}]
    const content =state[0].content

    return(

        <motion.div id="main"
            initial={{opacity:0}}
            animate={{
                opacity: 1
            }}
            transition={{duration:0.5, spring:1200, when: "beforeChildren"}}
            exit={{opacity: 0}} 
        >
            <article className="main1">
                <div style={{display: "flex", textAlign:"center", 
                    justifyItems: "center", justifyContent: "space-between"
                }}>
                    <div style={{display: "flex", width: "30%", alignItems: "center", alignContent: "center", alignSelf: "center", textAlign: "center"}}>
                        <div>
                            <div style={{margin: "15%", marginBottom: "0%", marginTop:"0%"}}><img className="styleimg" src={Pic} alt=""/></div>
                            {document.documentElement.clientWidth>450 && (<div className="beginner" style={{textAlign: "center", marginBottom: "0%"}}><p>Linkedin profile: <a style={{textDecoration:"none", fontStyle: 'italic'}} href="https://Linkedin.com/in/obasi-chukwuma-722472156">@Innocent_Obasi</a></p>
                                <motion.span style={{display: 'flex', textAlign: "center", alignItems: "center", alignContent: "center", alignSelf: "center", marginTop:"0%", marginBottom: "0%"}}><span className="px-2 nav-link border-0"><Link to="https://www.linkedin.com/in/innocent-obasi-72ab6022a" target="_blank">
                                    <motion.svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16" variants={svgVariants} initial="hidden" animate="visible">
                                        <motion.path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" variants={pathVariants}/>
                                    </motion.svg>
                                    </Link></span>
                                    <span className="px-2 nav-link border-0"><Link to="https://www.facebook.com/obasi.chukwuma.77" target="_blank" variants={svgVariants} initial="hidden" animate="visible">
                                    <motion.svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16" variants={svgVariants} initial="hidden" animate="visible">
                                        <motion.path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" variants={pathVariants}/>
                                    </motion.svg>
                                    </Link></span>
                                    <span className="px-2 nav-link border-0"><Link to="https://wa.link/fjkcmd" target="_blank">
                                    <motion.svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-whatsapp" viewBox="0 0 16 16" variants={svgVariants} initial="hidden" animate="visible">
                                        <motion.path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" variants={pathVariants}/>
                                    </motion.svg>   
                                    </Link></span>
                                </motion.span>
                            </div>)}
                            {document.documentElement.clientWidth<=450 && (<div className="beginner" style={{textAlign: "center", marginBottom: "0%", display:"flex", left:"0"}}>
                                <motion.span style={{display: 'block', textAlign: "center", alignItems: "center", alignContent: "center", alignSelf: "center", marginTop:"0%", marginBottom: "0%"}}><span className="px-2 nav-link border-0"><Link to="https://www.linkedin.com/in/innocent-obasi-72ab6022a" target="_blank">
                                    <motion.svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16" variants={svgVariants} initial="hidden" animate="visible">
                                        <motion.path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" variants={pathVariants}/>
                                    </motion.svg>
                                    </Link></span>
                                    <span className="px-2 nav-link border-0"><Link to="https://www.facebook.com/obasi.chukwuma.77" target="_blank" variants={svgVariants} initial="hidden" animate="visible">
                                    <motion.svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16" variants={svgVariants} initial="hidden" animate="visible">
                                        <motion.path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" variants={pathVariants}/>
                                    </motion.svg>
                                    </Link></span>
                                    <span className="px-2 nav-link border-0"><Link to="https://wa.link/fjkcmd" target="_blank">
                                    <motion.svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-whatsapp" viewBox="0 0 16 16" variants={svgVariants} initial="hidden" animate="visible">
                                        <motion.path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" variants={pathVariants}/>
                                    </motion.svg>   
                                    </Link></span>
                                </motion.span>
                            </div>)}
                        </div>
                    </div>
                    <div style={{borderLeft: "solid 1px rgba(7, 149, 243, 0.8)", maxWidth: "65%", minWidth:"65%"}}>
                        <h1 className="begin">Innocent Chukwuma Obasi</h1>
                        <AnimatePresence mode="wait">
                            <motion.ul className="actions beginner" variants={skillVariants} initial="hidden" animate="visible" exit="exit"
                                >
                                <li>{content.A}</li>
                                <li>{content.B}</li>
                                <li>{content.C}</li>
                                <li>{content.D}</li>
                            </motion.ul>
                        </AnimatePresence>
                    </div>
                </div>
                <motion.div className="trials" style={{marginTop: "4%", textAlign: "center", justifyContent: "space-around"}} variants={nextVariants} initial="hidden" animate="visible">
                    <div className="trial" style={{textAlign: "start"}}>
                        <Link to="/profile"><motion.button className="btn motion3" variants={Variants} whileHover="hover"><i className="bi bi-person-bounding-box"> Profile</i></motion.button></Link>
                    </div>
                    <div className="trial-rem">
                        <Link to="/projects" ><motion.button className="btn motion3" variants={Variants} whileHover="hover"
                            style={{ textTransform:"capitalize"}}><i className="bi bi-laptop"> Projects</i></motion.button></Link>
                    </div>
                </motion.div>
            </article>
        </motion.div>
    )
}

export default Home