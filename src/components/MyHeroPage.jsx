"use client";

import { useEffect, useState, useRef } from "react";
import {MY_DISCRIPTION} from "../constants"


export function MyHeroPage(){

    const [discripState] = useState(MY_DISCRIPTION);
    const totalNum = discripState.length;

    let [timer, setTimer] = useState(0);

    useEffect(() => {
        let interval = setInterval(() => {
            setTimer((timer + 1) % totalNum);
        }, 2200);
        return () => clearInterval(interval);
    }, [timer]);

    return (
        <div className="">
            <h1>
                Hi there 
                <div className="d-inline-block">
                    <img src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif" width="25px" />
                </div>
                , I&apos;m Sizhuo (Henry).
            </h1>
            
            <h2 className="mt-3 relative flex flex-col overflow-hidden">
                <div  
                // // ref={ref}
                // className="text-[17px] md:text-2xl transform-none opacity-100"
                // style={{
                //     // transform: isInView ? "none" : "translateX(-200px)",
                //     // opacity: isInView ? 1 : 0,
                //     opacity: 1,
                //     transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                // }}
                >
                    I am 
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
                                    : "0",
                            left: "55px"
                        }}
                    >
                        {discripState.map((elem) => (
                            <TextElement key={elem} elem={elem} />
                        ))}
                    </div>
                </div>
            </h2>
            <br></br>
            <p>
                My name is <>Sizhuo Sun</>. You can call me <>Henry</> if you want. <br />
                I am currently a senior studying Computer Science and Engineering at UC Davis. 
            </p>
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
            // style={{
            // //     // transform: isInView ? "none" : "translateX(-200px)",
            // //     // opacity: isInView ? 1 : 0,
            // //     opacity: 1,
            //     // transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
            // }}
        >
            {headWord} {tailWord}
        </div>
    );
}