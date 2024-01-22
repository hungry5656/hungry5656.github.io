"use client";

import { motion } from "framer-motion"
import styles from "../../scss/main.module.scss"

export function MyButton(aName, url){
    const newElem = <div>{aName}</div>
    return (
        <div style={{"border-radius": "30px",
            width: "120px",
            height: "42px"}}>
            <motion.a
                href={url}
                className={`btn btn-primary ${styles.buttonStyle}`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
            >{newElem}</motion.a>
        </div>
    )
}