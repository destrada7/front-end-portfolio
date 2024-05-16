import React from "react";
import AllProjects from "./ProjectsDetails";
import "../styles/Projects.css";

const Projects = () => {
    return(
        <section className="projects">
            <div className="projects_container">
                <div className="projects_intro">
                    <h2>Projects</h2>
                    <p>Coming Soon</p>
                </div>
                <div className="projects_wrapper">
                    <AllProjects />
                </div>
            </div>
        </section>
    );
};

export default Projects;
