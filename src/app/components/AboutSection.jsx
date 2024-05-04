"use client"
import React, {useTransition, useState} from "react"
import Image from "next/image"
import TabButton from "./TabButton";

const TAB_DATA = [
    {
        title : "Skills",
        id : "skills",
        content : (
            <ul className= "list-disc pl-2 text-red-200">
                <li>Node.js</li>
                <li>Next.js</li>
                <li>React.js</li>
                <li>JavaScript</li>
                <li>MySQL</li>
                <li>PostgreSQL</li>
                <li>PHP</li>
                <li>Java</li>
                <li>C#</li>
            </ul>
        )
    },
    {
        title : "Education",
        id : "education",
        content : (
            <ul className= "list-disc pl-2 text-red-200">
                <li>Srednja Skola: Tehnicka Skola Smederevo</li>
                <li>Collage : Visoka ICT Skola Beograd</li>
            </ul>
        )
    },
    {
        title : "Experience",
        id : "experience",
        content : (
            <ul className= "list-disc pl-2 text-red-200">
                <li>Teacher at Programming School</li>
                <li>EPS Kostolac</li>
            </ul>
        )
    }
]
const AboutSection = () => {
    const [tab, setTab] = useState('skills');
    const [isPending, startTransition] = useTransition();
    
    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    }
    return (
        <section className= "text-white">
            <div className= "md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
                <Image
                    src = "/images/aboutMeIMG.jpg"
                    width= {500}
                    height= {350}
                    alt = "About Image"
                    className= "rounded-full"
                />
                <div className= "mt-4 md:mt-0 text-left flex flex-col h-full" id = "about">
                    <h2 className= "text-4xl font-bold text-white mb-4">I'm Aleksandar Simic, Passionate Programmer</h2>
                    <p className= "italic font-bold text-base lg:text-lg">On a perpetual quest to turn innovative ideas into reality through code. 
                        With a blend of creativity and technical expertise, I specialize in crafting elegant solutions to complex problems. 
                        My journey in the realm of programming has been guided by a relentless pursuit of learning and a commitment to excellence. 
                        From building sleek websites to developing robust applications, I thrive in the dynamic landscape of software development. 
                        Let's collaborate and bring your vision to life, one line of code at a time.
                    </p>
                    <div className="flex flex-row justify-start mt-8" id ="skills">
                        <TabButton selectTab={() => handleTabChange("skills")} active = {tab === "skills"}>
                            {" "}
                            Skills {" "}
                        </TabButton>
                        <TabButton selectTab={() => handleTabChange("education")} active = {tab === "education"}>
                            {" "}
                            Education {" "}
                        </TabButton>
                        <TabButton selectTab={() => handleTabChange("experience")} active = {tab === "experience"}>
                            {" "}
                            Experience {" "}
                        </TabButton>
                    </div>
                    <div className = "mt-8">
                        {TAB_DATA.find((t) => t.id === tab).content}
                    </div>
                </div>
            </div>
        </section>
    )
}
export default AboutSection;