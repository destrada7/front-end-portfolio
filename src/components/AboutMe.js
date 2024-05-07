import React from "react";
import '../styles/AboutMe.css';

const About = () => {
    return(
        <section className="about-me">
            <div className="about-me_container">
                <div className="about-me_intro">
                  <h2>About Me</h2>
                    <p>I am a Front-End Developer</p>  
                </div>
            </div>
            <div className="description-skills_container">
                <div className="get-to-know-me">
                    <h3>Get to know me</h3>
                    <p>I am a Front-End Developer</p>
                    <button type="button" id="about-me-contact-button">ABOUT ME</button>
                </div>
                <div className="skills">
                    <div className="skill" id="javascript">
                        <p>JavaScript</p>
                    </div>
                    <div className="skill"  id="react">
                        <p>React</p>
                    </div>
                    <div className="skill" id="css">
                        <p>CSS</p>
                    </div>
                    <div className="skill"  id="git">
                        <p>GIT</p>
                    </div>
                    <div className="skill"  id="github">
                        <p>GitHub</p>
                    </div>
                    <div className="skill"  id="responsive">
                        <p>Responsive Design</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;