"use client";

import { useEffect, useState, useRef } from "react";
import {MY_DISCRIPTION} from "../constants"


export function MyHeroPage(){

    const [discripState] = useState(MY_DISCRIPTION);

    return (
        <div className="">
            <h1>
                Hi there 
                <div className="d-inline-block">
                    <img src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif" width="25px" />
                </div>
                , I&apos;m Sizhuo (Henry).
            </h1>
            <h2>
                I am 
                <div>
                    {discripState.map((elem) => (
                        elem
                    ))}
                </div>
            </h2>
            <p>
                My name is <>Sizhuo Sun</>. You can call me <>Henry</> if you want. <br />
                I am currently a senior studying Computer Science and Engineering at UC Davis. 
            </p>
        </div>
    )
}