import React from "react";
import "../styles/Hero.css";

const Hero = () => {
    return(
        <section className="hero">
            <div className="hero_container">
                <header className="hero_header" id="hero_header">
                    <h1>David Estrada</h1>
                    <p>Front-End Developer</p>
                </header>
                <button type="button" className="hero_button" id="hero_button">PROJECTS</button>
            </div>
        </section>
    );
};

export default Hero;