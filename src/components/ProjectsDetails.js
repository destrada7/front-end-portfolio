import React from "react";
import ProjectsCard from "./ProjectsCard";
import littlelemonproject from "../images/little-lemon.png";
import nbametricsproject from "../images/nba-metrics.png";
import Lock from "../icons/icons8-lock-50.png";
import linkicon from "../icons/icons8-link-24.png";
import githubicon from "../icons/icons8-github-50.png";
import "../styles/ProjectsDetails.css";

const AllProjects = () => {
    const projects = [
        {
            projectimage: littlelemonproject,
            name: "NBA Metrics",
            description: "Explore my profile for insights into my work, programming skills, and tech capabilities",
            linkicon: linkicon,
            githubicon: githubicon
        },
        {
            projectimage: nbametricsproject,
            name: "Little Lemon Restaurant",
            description: "Explore my profile for insights into my work, programming skills, and tech capabilities",
            linkicon: linkicon,
            githubicon: githubicon
        },
        {
            projectimage: Lock,
            name: "La Duquesa Kennel",
            description: "Explore my profile for insights into my work, programming skills, and tech capabilities"
        }
    ];

    return(
        <div className="all-projects-wrapper">
            {projects.map((project, index) => (
                <ProjectsCard key={index} project={project} />
            ))}
        </div>
    );
}

export default AllProjects;
