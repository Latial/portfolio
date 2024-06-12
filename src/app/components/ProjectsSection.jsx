"use client";

import React, {useState, useRef} from "react";
import ProjectCard from './ProjectCard';
import ProjectTag from './ProjectTag';
import {motion, useInView} from "framer-motion";

const projectsData = [
    {
        id: 1,
        title: "LucyusBeats",
        description: "Beat selling website",
        image: "/images/projects/1.png",
        tag: ["All", "Web"],
        gitUrl: "",
        previewUrl: "/",
    },
    {
        id: 2,
        title: "Scout.rs",
        description: "Job Fiding Website (Collaboration)",
        image: "/images/projects/2.png",
        tag: ["All", "Web"],
        gitUrl: "",
        previewUrl: "/",
    },
    {
        id: 3,
        title: "Food Ordering Application",
        description: "Project 4 description",
        image: "/images/projects/4.png",
        tag: ["All", "Mobile"],
        gitUrl: "/",
        previewUrl: "/",
    },
    {
        id: 4,
        title: "GameShop Website",
        description: "Website for game shopping",
        image: "/images/projects/5.png",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/Latial/PlayPort",
        previewUrl: "/",
    },
    {
        id: 5,
        title: "E-commerce Application",
        description: "Project 3 description",
        image: "/images/projects/3.png",
        tag: ["All", "Web"],
        gitUrl: "/",
        previewUrl: "/",
    },
    {
        id: 6,
        title: "Full-stack Roadmap",
        description: "Project 5 description",
        image: "/images/projects/6.png",
        tag: ["All", "Web"],
        gitUrl: "/",
        previewUrl: "/",
    },
    {
        id: 7,
        title: "Coffee Shop Website",
        description: "Coffee Shop Website",
        image: "/images/projects/11.png",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/Latial/CoffeeShop",
        previewUrl: "/",
    },
    {
        id: 8,
        title: "Restaurant Website",
        description: "Site for restaurant owners",
        image: "/images/projects/22.png",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/Latial/Bakery",
        previewUrl: "/",
    },
];

const ProjectsSection = () => {
    const [tag, setTag] = useState("All");
    const ref = useRef(null);
    const isInView = useInView(ref, {once :true})
    const handleTagChange = (newTag) =>{
        setTag(newTag);
    };
    const filteredProjects = projectsData.filter((project) =>
        project.tag.includes(tag)
    );
    const cardVariants = {
        initial : {y : 50, opacity : 0},
        animate : {y : 0, opacity: 1}
    }
    return (
        <section>
            <h2 className= "text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12" id = "projects">My Projects</h2>
            <div className = "text-white flex flex-row justify-center items-center py-6 gap-2">
                <ProjectTag onClick = {handleTagChange} name = "All" isSelected={tag === "All"}/>
                <ProjectTag onClick = {handleTagChange} name = "Web" isSelected={tag === "Web"}/>
                <ProjectTag onClick = {handleTagChange} name = "Mobile" isSelected={tag === "Mobile"}/>
            </div>
            <ul ref = {ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap:12">
                {filteredProjects.map((project, index) =>
                    <motion.li key = {index} variants = {cardVariants} initial= "initial" animate = {isInView ? "animate" : "initial"} 
                    transition={{duration : 0.3, delay : index * 0.3}}>
                        <ProjectCard key = {project.id} title = {project.title} description= {project.description} imgUrl={project.image} gitUrl={project.gitUrl} previewUrl={project.previewUrl}/>
                    </motion.li>
                )}
            </ul>
        </section>
    )
}
export default ProjectsSection;