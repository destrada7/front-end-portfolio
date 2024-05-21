import React, { forwardRef } from "react";
import ProjectsAlt from "./ProjectsAlternative";
import "../styles/Projects.css";

const Projects = forwardRef((props, ref) => {
  return (
    <section className="projects" ref={ref}>
      <div className="projects_container">
        <div className="projects_intro">
          <h2>Projects</h2>
          <p>Coming Soon</p>
        </div>
        <div className="projects_wrapper">
          <ProjectsAlt />
        </div>
      </div>
    </section>
  );
});

export default Projects;
