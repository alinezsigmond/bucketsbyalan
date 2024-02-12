import { useState } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Modal from "../../components/Modal/Modal";
import Title from "../../components/Title/Title";

import './contact-us.css'

export default function ContactUs() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const fullMessage = {name,email,subject,message}
    return(
        <>
        <Header />
        <Title text='Contact us' />
        <Modal isOpen={true} />
        <div className="contact_wrapper">
            <p className="contact_text">
                Do you have any suggestions, compliments, or complaints? 
                Do you want your own custom bucket? Perhaps you’re just 
                feeling lonely and in need of a friend? Don’t hesitate 
                to reach out!
            </p>
            <form onSubmit={(event) => event.preventDefault()} className="contact_form">
                <label>Name</label>
                <input 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    type="text" 
                    className="contact_input"
                />
                <label>E-mail</label>
                <input 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} 
                    type="email" 
                    className="contact_input" 
                />
                <label>Subject</label>
                <input 
                    value={subject} 
                    onChange={(e) => setSubject(e.target.value)} 
                    type="text" 
                    className="contact_input"
                />
                <label>Message</label>
                <textarea
                    value={message} 
                    onChange={(e) => setMessage(e.target.value)} 
                    type="text" 
                    className="contact_input" 
                    id="form_message" 
                />
                <button onClick={() => console.log(fullMessage)} className="contact_button">Send</button>
            </form>
        </div>
        <Footer />
        </>
    )
}