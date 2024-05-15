import React from "react";
import { useForm } from "react-hook-form";
import '../styles/ContactForm.css';

const ContactForm = ({ onFormSubmit }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        onFormSubmit(data); // Here you call the function passed as a prop
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