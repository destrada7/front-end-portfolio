import React from "react";
import "../styles/ProjectsCard.css";

const ProjectsCard = ( {project} ) => {
    const { name } = project;

    return(
        <div className="project-card">
            <h3>{name}</h3>
        </div>
    );
};

export default ProjectsCard;