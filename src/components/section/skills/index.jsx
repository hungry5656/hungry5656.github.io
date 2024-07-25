"use client";

import { useRef } from "react";
import { LazyMotion, domAnimation, useInView } from "framer-motion";
import { SectionTitle, MotionText } from "../.."
import { SKILLS_CONSTANT } from "../../../constants"

export function SkillsContainer(){
    const textRef = useRef(null);
	const stackRef = useRef(null);
	const isTextInView = useInView(textRef, { once: true });
	const isStackInView = useInView(stackRef, { once: true });
    
    return (
        <div className="container mt-6">
            <SectionTitle Title={"SKILLS"} />
            <div className="row mb-3">
                <div className="col">
                {!!SKILLS_CONSTANT.length && (
					<div className="mt-4 mb-5 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10">
						{SKILLS_CONSTANT.map((tech, index) => {
							return (
								<div
									key={tech.category}
									ref={stackRef}
									className="flex flex-col gap-4 flex-1 md:flex-auto"
									style={{
										transform: isStackInView
											? "none"
											: `${index === 0 ? "translateY(250px)" : `translateY(${200 / index}px)`}`,
										opacity: isStackInView ? 1 : 0,
										transition: `all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) ${
											index === 0 ? 0 : 0.5 * (index % 4)
										}s`
									}}
								>
									<h3 tabIndex="0" className="text-2xl font-bold">
										{tech.category}
									</h3>
									<div className="flex items-center flex-wrap gap-x-5 gap-y-8">
										{tech.items.map((item) => (
											<div key={item.name} className="group relative flex">
												<div tabIndex="0" role="img">
													{item.icon}
												</div>
												<div
													className="group-hover:transition-opacity group-hover:opacity-100 group-hover:!opacity-100 group-hover:bg-gray-800
													text-sm group-hover:text-gray-100 rounded-md absolute left-1/2 -translate-x-1/2
													translate-y-full mt-3 mx-auto px-2 w-max opacity-0"
												>
													{item.name}
												</div>
											</div>
										))}
									</div>
								</div>
							);
						})}
                    </div>
				)}
                    
                </div>
            </div>
        </div>
    )
}