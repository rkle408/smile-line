import React, { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import Button from 'react-bootstrap/Button';

function Contact (){
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        message: ""
    });

    // Use this hook to get values of the input fields
    const form = useRef();

    const [errorMessage, setErrorMessage] = useState("");

    const { name, email, message } = formState;

    const validateEmail = (email) => {
        // eslint-disable-next-line
        const re = /.+\@.+\..+/;
        return re.test(String(email).toLowerCase())
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        emailjs.sendForm('service_p38t861', 'template_ev24dbo', form.current, 'D7YNoXK_l3ceF6YMp')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        event.target.reset();
    }

    const handleChange = (event) => {
        event.preventDefault();
        if (event.target.name === "email") {
            const isValid = validateEmail(event.target.value);
            if (!isValid) {
                setErrorMessage("Your email is invalid")
            } else {
                setErrorMessage("")
            }
        } else {
            if (!event.target.value.length) {
                setErrorMessage(`${event.target.name} is required!`)
            } else {
                setErrorMessage("");
            }
            if(!errorMessage) {
                setFormState({...formState, [event.target.name]: event.target.value});
            }
        }
    }

    return (
        <section className="contact">
            <h1 className="H1">Contact Smile Line!</h1>
            <form ref={form} id="contact-form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name: </label><br/>
                    <input className="textbox" type="text" name="Name" defaultValue={name} onBlur={handleChange}/>
                </div>
                <div>
                    <label htmlFor="email">Email: </label><br/>
                    <input className="textbox" type="email" name="Email" defaultValue={email} onBlur={handleChange}/>
                </div>
                <div>
                    <label htmlFor="message">Message: </label><br/>
                    <textarea className="textbox" name="Message" rows="4" defaultValue={message} onBlur={handleChange}/>
                </div>
                {errorMessage && (
                    <div>
                        <p>{errorMessage}</p>
                    </div>
                )}
                <Button variant="success" className="submitBtn" type="submit">Submit</Button>
            </form>
        </section>
    )
};

export default Contact;