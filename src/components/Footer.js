import React from "react";
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
                </div>
            </div>
        </section>
    );
};

export default Footer;