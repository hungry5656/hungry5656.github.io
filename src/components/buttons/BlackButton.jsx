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
                    // className={`btn btn-primary buttonStyle`}
                    // className={`btn btn-primary ${styles.buttonStyle}`}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.8 }}
                >
                    {newElem}
                </motion.a>
                {/* <a href="#" title="Get quote now"
                    class="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                    role="button">Get it now
                </a> */}
            </div>
            
        </div>        
    )
}

