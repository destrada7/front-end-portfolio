import React from "react";
import ProjectsCard from "./ProjectsCard";
import "../styles/ProjectsCard.css";

const AllProjects = () => {
    const projects = [
        {
            name: "NBA Metrics"
        },
        {
            name: "Little Lemon Restaurant"
        },
        {
            name: "Soon!"
        }
    ];

    return(
        <div className="all-projects-wrapper">
            {projects.map((project, index) => {
                return(
                    <ProjectsCard key={index} project={project} />
                );
            })}
        </div>
    );
}

export default AllProjects;