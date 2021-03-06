import React, {useState} from 'react';
import {projectsData} from "../data/projectsData";
import {motion} from "framer-motion";

const Project = (props) => {
    const [currentProject] = useState(projectsData);
    const project = currentProject[props.projectNumber];


    let left = Math.floor(Math.random() * 200 + 700) + "px";
    let top = Math.floor(Math.random() * 200 + 150) + "px";
    let size = "scale(" + Math.random() + 0.7 + ")";
    const variants = {
        initial: {
            opacity: 0,
            transition: { duration: 0.5 },
            x: 400,
        },
        visible: {
            opacity: 1,
            x: 0,
        },
        exit: {
            opacity: 0.4,
            transition: { duration: 0.35 },
            x: -800,
        }
    };



    const transition = {
        ease: [.03,.87,.73,.9],
        duration: .6,
    }

    return (
        <motion.div
            className="project-main"
            initial="initial"
            animate="visible"
            exit="exit"
            transition={transition}
            variants={variants}
        >
            <div className="project-content">
                <h1>{project.date}</h1>
                <ul className="languages">
                    {project.languages.map((item) => {
                        return <li key={item}>{item}</li>
                    })}
                </ul>
            </div>
            <div className="img-content">
                <div className="img-container hover">
                    <span>
                        <h3>{project.title}</h3>
                        <p>{project.infos}</p>
                    </span>
                    <img src={project.img} alt={project.title} />
                </div>
                <div className="button-container">
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="hover">
                        <span className="button">Voir le site</span>
                    </a>
                </div>
            </div>
            <span className="random-circle" style={{left, top, transform: size}}></span>
        </motion.div>
    );
};

export default Project;
