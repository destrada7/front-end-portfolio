import React from "react";
import littlelemon from "../images/little-lemon.png";
import nbametrics from "../images/nba-metrics.png";
import lock from "../icons/icons8-lock-150.png"
import link from "../icons/icons8-link-48.png"
import github from "../icons/icons8-github-50.png"
import "../styles/ProjectsAlternative.css";

const ProjectsAlt = () => {
    return (
        <div className="projects-alt_container">
            <div className="box projects-alt_wrapper" id="little-lemon-project">
                <figure className="project_figure">
                    <img src={littlelemon} alt="Little Lemon Page" />
                    <figcaption className="project-figcaption">
                        <h3>Little Lemon</h3>
                        <p>A web app for a restaurant, allowing users to reserve tables for various occasions and order food. The platform streamlines the reservation process and facilitates online food ordering.</p>
                    </figcaption>
                </figure>
                <div className="project-icons_container">
                    <figure className="link-icon">
                        <a
                            href="https://little-lemon-restaurant-livid.vercel.app/"
                            target="_blank" rel="noreferrer" aria-label="Link Icon">
                                <img
                                src={link}
                                alt="Link Icon" />
                        </a>
                    </figure>
                    <figure className="github-icon">
                        <a
                            href="https://github.com/destrada7/little_lemon_restaurant"
                            target="_blank" rel="noreferrer" aria-label="GitHub Icon">
                                <img
                                src={github}
                                alt="GitHub Icon" />
                            </a>
                    </figure>
                </div>
            </div>
            <div className="box projects-alt_wrapper" id="nba-metrics-project">
            <figure className="project_figure">
                    <img src={nbametrics} alt="NBA Metrics Page" />
                    <figcaption className="project-figcaption">
                        <h3>NBA Metrics</h3>
                        <p>A platform for visualizing data that projects the future performance of current NBA players based on their Playoff performance. It uses a MongoDB database and a Node.js/Express Back-End.</p>
                    </figcaption>
                </figure>
                <div className="project-icons_container">
                    <figure className="link-icon">
                        <a
                            href="https://nba-metrics-app.vercel.app//"
                            target="_blank" rel="noreferrer" aria-label="Link Icon">
                                <img
                                src={link}
                                alt="Link Icon" />
                        </a>
                    </figure>
                    <figure className="github-icon">
                        <a
                            href="https://github.com/destrada7/nba-metrics-app"
                            target="_blank" rel="noreferrer" aria-label="GitHub Icon">
                                <img
                                src={github}
                                alt="GitHub Icon" />
                            </a>
                    </figure>
                </div>
            </div>
            <div className="box projects-alt_wrapper" id="duquesa-kennel-project">
            <figure className="project_figure">
                    <img src={lock} alt="Lock Icon" />
                    <figcaption className="project-figcaption">
                        <h3>La Duquesa Kennel</h3>
                        <p>Soon!</p>
                    </figcaption>
                </figure>
            </div>
        </div>
    );
};

export default ProjectsAlt;