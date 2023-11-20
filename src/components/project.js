import React, { useEffect } from "react";
import { properties } from "./info";
import Copyright from "./copyright";
import { Link } from "react-router-dom";
import {motion} from "framer-motion";
import Variants from "./variants";

const avail=""+document.documentElement.clientHeight+"px"
const avail2=""+(document.documentElement.clientHeight*0.9)+"px"

const Projects=({w,setPage, changeset, setchange})=>{
    useEffect(()=>{
        setchange(1)
    },[])
    return(
        <>
        {w<=500 && (
            <div className="container-lg">
            <nav className="navbar fixed-top navbar-expand-md bglite py-2">
                <h1 className="motion4 bi bi-laptop beginner fw-bold my-1" style={{textAlign: "center", margin: "auto"}}> Projects</h1>
            </nav>
            </div>
        )}
        <motion.div id="main2"
            variants={Variants}
            initial="hidden2"
            animate="visible"
            exit="exit2"
            style={{minHeight: avail}}
        >
            <div className="main5" style={{minHeight: avail2, marginBottom: "0%"}}>
                {w>500 && (<h1 className="begin motion2" style={{color:"rgb(1, 32, 72)", textDecoration:"underline"}}>Projects</h1>)}
                {
                    properties.map(({id,Name,content,image})=>(
                        <div key={id} className="beginner black my-3">
                            <div className="beginne text-center fw-bold">{Name}</div>
                            <div className="bglite table-responsive r">
                                <div className="d-flex my-3">
                                    {  
                                        image.length>3 && (image.map((i)=>(

                                            (<motion.img src={i} style={{width: "40%"}} className="px-3" initial={{x:0}} 
                                            animate={{
                                                x:[0,-300,0,300,0],
                                                transition:{
                                                    delay:2,
                                                    duration:60,
                                                    repeat:Infinity,
                                                    ease: "easeInOut",
                                                    spring: 120
                                                }
                                            }}
                                            />)
                                        )))
                                    }
                                    {  
                                        image.length<=3 && (image.map((i,k)=>(
                                            <motion.img src={i} style={{width: "40%"}} className="px-3" initial={{x:0}} 
                                            animate={{
                                                x:[0,180,0,-180,0],
                                                transition:{
                                                    delay:5,
                                                    duration:55,
                                                    repeat:Infinity,
                                                    ease: "easeInOut",
                                                    spring: 120
                                                }
                                            }}
                                            key={k}
                                            />
                                        )))
                                    }
                                </div>
                            </div>
                            {
                                content.length>3 && (
                                    <>
                                        <p>{content[0]}</p>
                                        <p className="beginner text-center">{content[1]}</p>
                                    </>
                                )
                            }
                            {
                                content.length<=3 && (
                                    <>
                                        <p className="beginner">{content[0]}</p>
                                    </>
                                )
                            }
                            <Link to="/projectinfo" style={{textDecoration:"none", alignContent:"center", alignSelf:"center", textAlign: "center"}}>
                                <motion.button className="btn2 motion3 px-3" id="btn3" variants={Variants} whileHover="hover" onClick={()=>setPage(id)}>view</motion.button></Link>
                        </div>
                    ))
                }
                <div style={{marginTop:"10%"}}>
                {document.documentElement.clientWidth<=700 && (<Copyright w={w} changeset={changeset}/>)}
                </div>
            </div>
            {document.documentElement.clientWidth>700 && (<Copyright w={w} changeset={changeset}/>)}
        </motion.div>
        </>
    )
}

export default Projects 