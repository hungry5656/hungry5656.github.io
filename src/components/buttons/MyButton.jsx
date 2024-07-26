"use client";

import { motion } from "framer-motion"
import { MotionText} from "../textBlock";
import "@/scss/globals.css"
// import styles from "../../scss/main.module.scss"

export function MyButton({aName, url}){
    const newElem = <div>{aName}</div>
    return (
        <div className="">
            <MotionText xOry="Y" shiftAmount="30px">
                <div className = "d-flex align-items-center justify-content-center ml-5 mr-5 mt-2 mb-2">
                    <div className="relative inline-flex group">
                        <div
                            className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt">
                        </div>
                    <motion.a
                        href={url}
                        style={{"line-height":2.3}}
                        className={"buttonStyle w-37 h-14 line-height-2.3 align-baseline"}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.8 }}
                    >{newElem}</motion.a>
                
                    </div>
                </div>
            </MotionText> 
        </div>
    )
}