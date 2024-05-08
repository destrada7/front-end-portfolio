import React from "react";
import HeroSocials from "./HomeHeroSocials";
import ActivityProvider from "./ActivityProvider";
import "../styles/Hero.css";
import CurrentActivity from "./CurrentActivity";

const Hero = () => {
    return(
        <section className="hero">
            <div className="hero_container">
                <div className="hero-socials">
                <HeroSocials />  
                </div>
                <div className="header-button_container">
                    <header className="hero_header" id="hero_header">
                        <h1>David Estrada</h1>
                        <p>Front-End Developer</p>
                    </header>
                    <button type="button" className="hero_button" id="hero_button">PROJECTS</button>    
                    <div>
                        <ActivityProvider>
                            <CurrentActivity />
                        </ActivityProvider>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;