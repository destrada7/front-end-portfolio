import React from "react";
import ContactForm from "./ContactForm";
import "../styles/ContactSection.css";

const ContactSection = () => {

    return(
        <section className="contact">
            <div className="contact_container" id="contact">
                <div className="contact_intro">
                    <h2>Contact Me</h2>
                    <p>I am a Front-End Developer</p>
                </div>
                <ContactForm/>
            </div>
        </section>
    );
};

export default ContactSection;