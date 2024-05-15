import React from "react";
import HeroSocials from "./HomeHeroSocials";
import "../styles/Hero.css";

const Hero = () => {
    return(
        <section className="hero">
            <div className="hero_container">
                <div className="hero-socials">
                <HeroSocials />
                </div>
                <div className="header-button_container">
                    <header className="hero_header" id="hero_header">
                        <h1>Hi there! I'm David</h1>
                        <p>A Front-End Developer</p>
                    </header>
                    <button type="button" className="button" id="hero_button" aria-label="Projects Button">PROJECTS</button>
                </div>
            </div>
        </section>
    );
};

export default Hero;