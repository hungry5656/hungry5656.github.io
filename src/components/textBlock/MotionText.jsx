"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";

export function MotionText({children, transTime="0.1s", xOry="X", shiftAmount="-100px", classProp=""}){
    const ref = useRef(null);
	const isInView = useInView(ref, { once: true });
    let translateXY = "translate" + xOry + "(" + shiftAmount + ")";
    const styleTrans = "all 0.8s cubic-bezier(0.17, 0.55, 0.55, 1) " + transTime;
    return (
        <div
            className={classProp}
            ref={ref}
            style={{
                transform: isInView ? "none" : translateXY,
                opacity: isInView ? 1 : 0,
                transition: styleTrans
            }}
        >
        {children}
        </div>
    )
}