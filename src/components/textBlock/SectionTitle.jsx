import {MotionText} from "./MotionText"

export function SectionTitle({Title}){
    return (
        <MotionText
            transTime={"0.1s"}
            xOry = {"X"}
            shiftAmount = {"-100px"}
            classProp={"display-6"}>
            <div className={"fs-1 fw-bold"}>
                {Title}
            </div>
        </MotionText>
    )
}