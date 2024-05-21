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
          <p>Feel free to send a message using the form below, and I'll get back to you quickly</p>
        </div>
        <ContactForm />
      </div>
    </section>
  );
});

export default ContactSection;
