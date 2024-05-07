import React, { useState } from "react";
import ContactForm from "./ContactForm";
import "../styles/ContactSection.css";

const ContactSection = () => {
    const [formSubmitted, setFormSubmitted] = useState(false);
    const handleFormSubmit = (data) => {
        console.log("Form Data: ", data);
        setFormSubmitted(true);
        setTimeout(() => {
            setFormSubmitted(false);
        }, 3000);
    };

    return(
        <section className="contact">
            {formSubmitted && (
                <div className="success-overlay">
                    <div className="success-message">
                        <h3>Success!</h3>
                    </div>
                </div>
            )}
            <div className="contact_container" id="contact">
                <div className="contact_intro">
                    <h2>Contact Me</h2>
                    <p>I am a Front-End Developer</p>    
                </div>
                <ContactForm onFormSubmit={handleFormSubmit} />
            </div>
        </section>
    );
};

export default ContactSection;