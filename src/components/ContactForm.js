import React from "react";
import { useForm } from "react-hook-form";
import emailjs from 'emailjs-com';
import '../styles/ContactForm.css';

const ContactForm = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        emailjs.send('service_o6zhiwu', 'template_k4o2hkf', data, 'ZkxwIiF71y2_yFS-H')
            .then((response) => {
                alert('Form submitted successfully!');
                reset();
            })
            .catch((error) => {
                alert('An error occurred while submitting the form.');
                console.error('EmailJS Error:', error);
            });
    };

    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="box contact-form">
                <div className="input_container">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        className="form-input"
                        id="name"
                        placeholder="Enter Your Name"
                        {...register("name", { required: true })}
                    />
                    {errors.name && <p className="error">Name is required</p>}
                </div>

                <div className="input_container">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        className="form-input"
                        id="email"
                        placeholder="Enter Your Email"
                        {...register("email", { required: true })}
                    />
                    {errors.email && <p className="error">Email is required</p>}
                </div>

                <div className="input_container">
                    <label htmlFor="message">Message</label>
                    <textarea
                        className="textarea"
                        id="message"
                        placeholder="Enter Your Message"
                        {...register("message", { required: true })}
                    />
                    {errors.message && <p className="error">Message is required</p>}
                </div>

                <button type="submit" className="button" id="form_button" aria-label="Contact Submit Button">Submit</button>
            </div>
        </form>
    );
};

export default ContactForm;
