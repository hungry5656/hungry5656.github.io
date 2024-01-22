"use client"

import {AboutSection, HomeSection, ProjectSection, SkillsSection} from "src/sections"

export default function Home() {
  return (
    <div id="home" className="container-md">
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <HomeSection />
        <AboutSection />
        <SkillsSection />
        <ProjectSection />
      </main>
    </div>
  )
}
