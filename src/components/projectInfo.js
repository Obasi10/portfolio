import React, {useState} from "react";
import { Link } from "react-router-dom";
import {AnimatePresence, motion} from "framer-motion";
import { properties } from "./info";
import Copyright from "./copyright";
import Variants from "./variants";


const ProjectInfo=({w, page, setPage, setchange, changeset})=>{
    const [im, setim]=useState(0)
    const np=Number(page[1])
    const np2=Number(page[2])
    const preved=(np)=>{
        setPage("p"+(np -1))
        setim(0)
    }
    
    const nexted=()=>{
        setPage("p"+(np +1))
        setim(0)
    }
    return (
        <motion.div id="main"
            variants={Variants} initial="hidden" animate="visible" exit="exit"
            onLoad={setchange(0)}
        >
            <AnimatePresence>
                {
                    properties.map(({id,web,inspect,image,content,Name})=>(
                        page===id && (
                            <motion.section className="post" key={id} style={{color:"rgb(243, 234, 187)"}} variants={Variants} initial="hidden2" animate="visible" exit="exit2">
                                <h5 style={{textAlign: "center", color:"rgba(7, 149, 243, 0.8)", fontWeight:"550"}}>{Name}</h5>
                                <div className="slideshow-container">
                                {
                                    <AnimatePresence>
                                        <motion.img src={image[im]}  style={{width:"80%", margin:"auto", display: "flex", marginTop:"5%"}} key={image[im]}
                                        variants={Variants} initial="hidden" animate="visible" exit="exit"/>
                                        <div className="my-2" style={{textAlign:"center", color:"rgba(7, 149, 243, 0.8)"}} key={im}>{(im+1)+"/"+image.length}</div>
                                    </AnimatePresence>
                                }
                                    {im !== 0 && (<button className="prev" onClick={()=>setim(im-1)}>&#10094;</button>)}
                                    {im<(image.length-1) && (<button className="next" onClick={()=>setim(im+1)}>&#10095;</button>)}

                                </div>
                                {
                                    content.map((i,k)=>(
                                        <p className="beginner" key={k}>{i}</p>
                                    ))
                                }
                                    {(np !== 1) && (<button className="prevex" onClick={()=>{
                                        preved(np)
                                        }}>&#9664;</button>)}
                                    {(np2 === 0) && (<button className="prevex" onClick={()=>{
                                        preved(10)
                                        }}>&#9664;</button>)}
                                    {(np2 !==0 && !np2) && (<button className="nextex" onClick={nexted}>&#9658;</button>)}
                                <div style={{display: "flex", alignContent: "center", borderRadius:"20%", marginTop:"4%", justifyContent: "space-around"}}>
                                    <motion.button className="btn bi bi-download px-2 py-2 mx-0" style={{minWidth: "30%"}} variants={Variants} whileHover="hover">
                                        <a href={inspect} download="" style={{textDecoration:"none"}} className="motion3"> Download file</a></motion.button>
                                    {(web && w>=410) && (<motion.button className="btn bi bi-globe px-2 py-2 mx-0" variants={Variants} whileHover="hover"><a href={web} download="" style={{textDecoration:"none"}} className="motion3">  Visit site</a></motion.button>)}
                                    <motion.button className="btn bi bi-house px-2 py-2 mx-0" style={{minWidth: "20%"}} variants={Variants} whileHover="hover"><Link to="/" style={{textDecoration:"none"}} className="motion3"> Home</Link></motion.button>
                                </div>
                                {(web && w<410) && (<div><motion.button className="btn bi bi-globe px-2 py-2" variants={Variants} whileHover="hover"><a href={web} download="" style={{textDecoration:"none"}} className="motion3">  Visit site</a></motion.button></div>)}

                            </motion.section>
                            
                        ))
                    )
                }
            </AnimatePresence>
            <Copyright w={w} changeset={changeset}/>
        </motion.div>
    )
}
export default ProjectInfo