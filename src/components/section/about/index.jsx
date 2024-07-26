"use client";

import { SectionTitle, MotionText } from "../.."
import {TimeLine} from "./Timeline"


export function AboutContainer(){
    

    return (
        <div className="container">
            <SectionTitle Title={"ABOUT ME"} />
            <div className="row">
                <div className="col">
                    <MotionText
                        transTime={"0.3s"}
                        classProp="text-xl leading-relaxed"
                    >
                        <MotionText transTime="0.3s" shiftAmount = "-50px">
                        <p className={"mt-4 mb-4"}>
                            I am a Full-stack Software Engineer who is passionate about Web, AI/ML, GPU/Parallel 
                            and Embedded Software. I graduated from UC Davis with a B.S. in Computer Science and 
                            Engineering on June 2024. Now I am pursuing Master Degree at Carnegie Mellon University
                            for Software Engineering at the heart of Silicon Valley.
                        </p>
                        </MotionText>
                        <MotionText transTime="0.3s" shiftAmount = "-40px">
                        <p className={"mt-5 mb-4"}>
                            I was majoring in Computer Engineering when I first step into the beautiful Davis campus. As I 
                            took more and more courses from both CS and ECE department, I found out that I 
                            am passionate about software. That&apos;s why I decided to switch my major 
                            to CSE. You may wonder what is that "Engineering" inside my major. Well, I took 
                            wide range of classes that helps me to become a better Engineer, including Physics, 
                            Chemistry, circuits, Embedded System and my Senior Design Project that requires both 
                            hardware and software skills.
                        </p>
                        </MotionText>
                        <MotionText transTime="0.3s" shiftAmount = "-30px">
                        <p className={"mt-5 mb-4"}>
                            I was on the EcoCAR team at UC Davis from 2022 to 2023. During that time, I learned 
                            about fundamental of Autonomous Vehicle and tried to research/develop the Autonomous 
                            system. There are tongs of prep work to do before we can start on the coding part of 
                            this project. We tested and compared several sensors, boards, ML algorithms and etc. 
                            The future of vehicles are beyond those technology.
                        </p>
                        </MotionText>
                        <MotionText transTime="0.3s" shiftAmount = "-20px">
                        <p className={"mt-5 mb-3"}>
                            I was a Software Engineer Intern at SK hynix America during summer 2023. As I am on the 
                            Architecture Enabling Team inside SOLAB, my role was to analyze a Storage OS that uses 
                            SPDK and DPDK to make SSD available over RDMA/TCP network. I really learned about the 
                            knowledge related to distributed system, Storage architecture, and several Monitoring Tools.
                        </p>
                        </MotionText>
                    </MotionText>
                </div>
            </div>
            <TimeLine />
        </div>
        
    )
}