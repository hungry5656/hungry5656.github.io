"use client";

import { useEffect, useState, useRef } from "react";
import TypewriterComponent from 'typewriter-effect';
import Typewriter from 'typewriter-effect';
import { useInView, motion } from "framer-motion";
import { MY_DESCRIPTION, HYPERLINK } from "../../../constants"
import { MotionText} from "../../textBlock";
import { MyButton } from "@/components";
import styles from "../../../scss/main.module.scss"



export function HomeContainer(){

    const [descripState] = useState(MY_DESCRIPTION);
    const totalNum = descripState.length;

    let [timer, setTimer] = useState(0);

    const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

    useEffect(() => {
        let interval = setInterval(() => {
            setTimer((timer + 1) % totalNum);
        }, 2500);
        return () => clearInterval(interval);
    }, [timer]);

    return (
        <div className="container">
            <div className="row mb-5">
                <div className="col ml-2 mr-2 mb-2">
                    <MotionText
                        transTime={"0.1s"}
                        xOry="Y"
                        shiftAmount="50px"
                        classProp="display-5"
                    >
                        <h1>
                            <TypewriterComponent
                            onInit={(typewriter) => {
                                typewriter.typeString("Hi there! I'm <span style='color: OrangeRed;'>Sizhuo</span>:)")
                                .pauseFor(1000)
                                .deleteChars(8)
                                .typeString("<span style='color: OrangeRed;'>Henry</span>:)")
                                .pauseFor(1000)
                                .start();
                            }}
                            options={{
                                loop: true,
                            }}
                            />
                        </h1>
                    </MotionText>
                    
                    <MotionText
                        transTime={"0.2s"}
                    >
                        <h2 className="mt-3 relative flex flex-col overflow-hidden">
                            <div
                                className="text-[17px] md:text-2xl transform-none opacity-100"
                                style={{
                                    opacity: 1,
                                    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                                }}
                            >
                                I  
                                <div
                                    className="absolute flex flex-col transition-all duration-500 ease-in-expo"
                                    style={{
                                        top:
                                            timer === 0
                                                ? "0"
                                                : timer === 1
                                                ? "-100%"
                                                : timer === 2
                                                ? "-200%"
                                                : timer === 3
                                                ? "-300%"
                                                : timer === 4
                                                ? "-400%"
                                                : "0",
                                        left: "15px"
                                    }}
                                >
                                    {descripState.map((elem) => (
                                        <TextElement key={elem} elem={elem} />
                                    ))}
                                </div>
                            </div>
                        </h2>
                    </MotionText>
                    <MotionText
                        transTime={"0.3s"}
                        classProp="text-xl leading-relaxed"
                    >
                        <p className="mt-3 mb-2 text-justify">
                            Welcome to my website! This site is used for me to learn frontend development 
                            initially, but I also want to share my experience and let everyone get 
                            to know me. Feel free to check my website! I also have this amazing blog 
                            site if you want to know more about what technology I am interested in. 
                            Check it below!
                        </p>
                    </MotionText>
                    <div className={"container-md d-flex justify-content-left"}>
                    <ul className={"mt-2 list-group list-group-horizontal"}>
                        <li>
                            {/* <div className={` ${styles.buttonWrapper}`}>
                                <MotionText xOry="Y" shiftAmount="30px">
                                <motion.a
                                    href={HYPERLINK.blog}
                                    target={"_blank"}
                                    className={`btn btn-primary ${styles.buttonStyle}  d-flex align-items-center justify-content-center`}
                                    whileHover={{ scale: 1.2 }}
                                    whileTap={{ scale: 0.8 }}
                                ><p>My Blog</p>
                                </motion.a>
                                </MotionText>
                            </div> */}
                            <MyButton aName="My Blog" url={HYPERLINK.blog} />
                        </li>
                        <li>
                            <div className={`${styles.buttonWrapper}`}>
                                {/* <MotionText xOry="Y" shiftAmount="30px">
                                <motion.a
                                    href={HYPERLINK.projects_web}
                                    target={"_blank"}
                                    className={`btn btn-primary ${styles.buttonStyle}  d-flex align-items-center justify-content-center`}
                                    whileHover={{ scale: 1.2 }}
                                    whileTap={{ scale: 0.8 }}
                                >Projects Demo</motion.a>
                                </MotionText> */}
                                <MyButton aName="Projects Demo" url={HYPERLINK.projects_web} />
                            </div>
                        </li>
                    </ul>
                    </div>
                </div>
                <div className="col ml-2 mr-2 mb-2">
                    {/* profile picture */}
                    <MotionText shiftAmount="45px">
                        <motion.div whileHover={{ scale: 1.05 }}>
                        <div className={`${styles.HomeContainer}`}>
                            <img src="/assets/front_avatar.jpg" className={`${styles.homePic}`}></img>
                        </div>
                        </motion.div>
                    </MotionText>
                </div>
                <br></br>
            </div>
        </div>
    )
}

function TextElement({ elem }){
    const headWord = <b>{elem.split(" ").at(0)}</b>;
    const tailWord = elem.split(" ").slice(1).join(" ");
	const ref = useRef(null);

    return (
        <div
			tabIndex="0"
            ref={ref}
            className="text-[13px] md:text-2xl"
        >
            {headWord} {tailWord}
        </div>
    );
}