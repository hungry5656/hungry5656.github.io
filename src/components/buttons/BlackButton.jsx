"use client";

import { motion } from "framer-motion"
// import styles from "../../scss/main.module.scss"

export function BlackButton(aName, url){
    const newElem = <div>{aName}</div>
    return (
        
        <div style={{"border-radius": "30px",
            width: "120px",
            height: "42px"}}>
            <div className="relative inline-flex  group">
                <div
                    className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt">
                </div>
                <motion.a
                    href={url}
                    className={`buttonStyle`}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.8 }}
                >
                    {newElem}
                </motion.a>
            </div>
            
        </div>        
    )
}

