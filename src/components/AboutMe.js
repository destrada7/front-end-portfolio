import React from "react";
import ActivityProvider from "./ActivityProvider";
import CurrentActivity from "./CurrentActivity";
import InfiniteSkillsCarrousel from "./InfiniteSkillsCarousel";
import '../styles/AboutMe.css';

const About = () => {
    return(
        <section className="about-me">
            <div className="about-me_container">
                <div className="about-me_intro">
                    <h2>About Me</h2>
                    <p>Explore my profile for insights into my work, programming skills, and tech capabilities</p>
                </div>
            </div>
            <div className="description-skills-activity_container">
                <div className="skills-carrousel_container">
                    <InfiniteSkillsCarrousel />
                </div>
                <div className="description-skills_container">
                    <div className="get-to-know-me">
                        <h3>Get to know me</h3>
                        <p>I'm a Front-End Developer focused on building and managing the frontend of websites and web applications to ensure their success. You can explore some of my work in the Projects section.</p>
                        <p>As a Product Design Engineer graduate who found a passion for development, I aim to create excellent solutions that blend design and functionality seamlessly.</p>
                        <p>I'm actively seeking job opportunities where I can contribute, learn, and grow. If you have an opportunity that aligns with my skills and experience, feel free to reach out. Let's connect on LinkedIn and explore exciting possibilities together!</p>
                        <button type="button" id="about-me-contact-button">ABOUT ME</button>
                    </div>
                    <div className="about-activity_container">
                        <ActivityProvider>
                            <CurrentActivity />
                        </ActivityProvider>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;