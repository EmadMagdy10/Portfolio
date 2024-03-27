import './Contact.css'
import { useForm, ValidationError } from '@formspree/react';
import Lottie from "lottie-react";
import doneAnimation from '../../animation/done.json';
import contactAnimation from '../../animation/contact.json';
export default function Contact() {
    const [state, handleSubmit] = useForm("xoqgkqqz");

    return (
        <section className='contact-us' id="contact-us-id">
            <h1 className='title'>
                <span className='icon-envelope'></span>Contact Us
            </h1>
            <p className='subtitle'>Submit the form below to get in touch with me!</p>
            <div className="flex main">
                <form onSubmit={handleSubmit} className='flex'>
                    <div className="email flex">
                        <label htmlFor="email">Email Address:</label>
                        <input autoComplete='off' required type="email" id="email" name='email' />
                        <ValidationError
                            prefix="Email"
                            field="email"
                            errors={state.errors}
                        />
                    </div>
                    <div className="flex message">
                        <label htmlFor="message">Your Message:</label>
                        <textarea required type="text" name="message" id="message"></textarea>
                        <ValidationError
                            prefix="Message"
                            field="message"
                            errors={state.errors}
                        />
                    </div>
                    <button type='submit' className='submit' disabled={state.submitting}>
                        {state.submitting ? 'Sending...' : 'Submit'}
                    </button>
                    {state.succeeded && (
                        <p className='flex' >Your message has been sent successfully.
                            <Lottie loop={false} style={{ height: 35 }} animationData={doneAnimation}>
                            </Lottie>
                        </p>
                    )}
                </form>
                <div className="animation ">
                    <Lottie style={{ height: 400 }} animationData={contactAnimation}>
                    </Lottie>
                </div>
            </div>
        </section>
    );
}