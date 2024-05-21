import React from "react";
import HeroSocials from "./HomeHeroSocials";
import mypic from "../images/profile-photo.png";
import "../styles/Hero.css";

const Hero = ({ scrollToProjects }) => {
    return(
        <section className="hero">
            <div className="hero_container">
                <div className="box hero-socials">
                <HeroSocials />
                </div>
                <div className="header-button_container">
                    <figure className="hero_image">
                        <img src={mypic} alt="David Estrada"/>
                    </figure>
                    <header className="hero_header" id="hero_header">
                        <h1>Hi there! I'm David</h1>
                        <p>A Front-End Developer</p>
                    </header>
                    <button
                        type="button"
                        className="button"
                        id="hero_button"
                        aria-label="Projects Button"
                        onClick={scrollToProjects}>
                        PROJECTS
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Hero;