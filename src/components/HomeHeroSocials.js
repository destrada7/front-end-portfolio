import React from "react";
import Mail from "../icons/icons8-gmail-50.png";
import LinkedIn from "../icons/icons8-linkedin-50.png";
import GitHub from "../icons/icons8-github-50.png";
import "../styles/HomeHeroSocials.css";

const HeroSocials = () => {


    return(
        <div className="hero-socials_container">
            <div className="icon_container" id="mail-icon_container">
                <a href="mailto:estradaochoa@gmail.com">
                    <img src={Mail} alt="Mail Contact Icon" className="hero-icon" aria-label="Mail Icon" />
                    </a>
            </div>
            <div className="icon_container" id="linkedin-icon_container">
                <a href="https://www.linkedin.com/in/destradadev" target="_blank" rel="noopener noreferrer">
                    <img src={LinkedIn} alt="LinkedIn Contact Icon" className="hero-icon" aria-label="LinkedIn Icon" />    
                </a>
            </div>
            <div className="icon_container" id="linkedin-icon_container">
                <a href="https://github.com/destrada7" target="_blank" rel="noopener noreferrer">
                    <img src={GitHub} alt="GitHub Contact Icon" className="hero-icon" aria-label="GitHub Icon" />    
                </a>
            </div>
        </div>
    );
};

export default HeroSocials;