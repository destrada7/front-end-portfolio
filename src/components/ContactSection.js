// ContactSection.js
import React, { forwardRef } from "react";
import ContactForm from "./ContactForm";
import "../styles/ContactSection.css";

const ContactSection = forwardRef((props, ref) => {
  return (
    <section className="contact" ref={ref}>
      <div className="contact_container" id="contact">
        <div className="contact_intro">
          <h2>Contact Me</h2>
          <p>I am a Front-End Developer</p>
        </div>
        <ContactForm />
      </div>
    </section>
  );
});

export default ContactSection;
