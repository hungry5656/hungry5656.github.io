
import { LazyMotion, domAnimation, m } from "framer-motion";
import {MotionText} from "./MotionText"

export function SectionTitle({Title = ""}){
    return (
        <header className="flex items-center">
            <MotionText
                transTime={"0.1s"}
                xOry = {"X"}
                shiftAmount = {"-100px"}
                classProp={"display-6"}>
                <div className={"fs-1 fw-bold flex items-center \
                    font-extrabold text-3xl md:text-4xl relative w-full \
                    uppercase gap-4 bg-clip-text text-transparent bg-gradient-to-r \
                    from-black-100 to-black-50 after:h-[1px] after:flex-1 \
                    after:bg-inherited text-brand-dark dark:text-brand-dark"}>
                    {Title}
                </div>
            </MotionText>
        </header>
    )
}