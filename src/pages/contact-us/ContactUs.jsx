import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Title from "../../components/Title/Title";

import './contact-us.css'

export default function ContactUs() {
    return(
        <>
        <Header />
        <Title text='Contact us' />
        <div className="contact_wrapper">
            <p className="contact_text">
                Do you have any suggestions, compliments, or complaints? 
                Do you want your own custom bucket? Perhaps you’re just 
                feeling lonely and in need of a friend? Don’t hesitate 
                to reach out!
            </p>
            <form action="" className="contact_form">
                <label>Name</label>
                <input type="text" className="contact_input" id="" />
                <label>E-mail</label>
                <input type="email" className="contact_input" id="" />
                <label>Subject</label>
                <input type="text" className="contact_input" id="" />
                <label>Message</label>
                <textarea type="text" className="contact_input" id="contact_message" />
                <button className="contact_button">Send</button>
            </form>
        </div>
        <Footer />
        </>
    )
}