import React from "react";
import linkedinicon from "../icons/icons8-linkedin-50.png";
import githubicon from "../icons/icons8-github-50.png";
import "../styles/Footer.css";

const Footer = () => {
    return(
        <section className="footer">
            <div className="footer_container">
                <div className="footer_column1" id="footer_column1">
                    <h2>DAVID ESTRADA</h2>
                    <p>Front-End Developer</p>
                    <p>Copyright © 2024 David Estrada. All rights reserved.</p>
                </div>
                <div className="footer_column2" id="footer_column2">
                    <h2>SOCIAL</h2>
                    <div className="footer-socials">
                        <figure className="footer-icon_container">
                            <a 
                                href="https://www.linkedin.com/in/destradadev/" 
                                target="_blank" rel="noreferrer">
                                <img src={linkedinicon} 
                                alt="LinkedIn Page" />
                            </a>
                        </figure>
                        <figure className="footer-icon_container">
                            <a 
                                href="https://github.com/destrada7" 
                                target="_blank" rel="noreferrer">
                                <img src={githubicon} 
                                alt="GitHub Page" />
                            </a>
                        </figure>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;