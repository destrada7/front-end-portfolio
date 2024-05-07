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
            <div className="contact-form">
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    id="name"
                    {...register("name", { required: true })}
                />
                {errors.name && <p className="error">Name is required</p>}
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    {...register("email", { required: true })}
                />
                {errors.email && <p className="error">Email is required</p>}
                <label htmlFor="message">Message</label>
                <textarea
                    id="message"
                    {...register("message", { required: true })}
                />
                {errors.message && <p className="error">Message is required</p>}
                <button type="submit">Submit</button>
            </div>
        </form>
    );
};
 export default ContactForm;