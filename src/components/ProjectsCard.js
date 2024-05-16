import React from "react";
import "../styles/ProjectsCard.css";

const ProjectsCard = ({ project }) => {
    const { projectimage, name, description, linkicon, githubicon } = project;

    return (
        <div className="box project-card">
            <figure className="project-img_container">
                <img src={projectimage} alt={name} className="project-image" />
            </figure>
            <div className="name-description_container">
                <h3>{name}</h3>
                <p>{description}</p>
            </div>
            <div className="all-links_container">
                <a href="" target="_blank" rel="noreferrer">
                    <img src={linkicon} alt="Link Icon" className="link-icon" />
                </a>
                <a href="" target="_blank" rel="noreferrer">
                    <img src={githubicon} alt="Github Icon" className="github-icon" />
                </a>
            </div>
        </div>
    );
};

export default ProjectsCard;