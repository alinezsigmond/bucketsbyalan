import { useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Modal from "../../components/ModalContact";
import Title from "../../components/Title";

export default function ContactUs() {
    document.title = 'Buckets by Alan - Contact us'

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const fullMessage = { name, email, subject, message }
    return (
        <>
            <Header />
            <Title title='Contact us' />
            <Modal isOpen={true} />
            <div className="font-text w-5/6 m-auto lg:flex lg:flex-col lg:w-5/12 lg:self-center">
                <p className="mb-7 lg:absolute lg:w-1/6 ">
                    Do you have any suggestions, compliments, or complaints?
                    Do you want your own custom bucket? Perhaps you’re just
                    feeling lonely and in need of a friend? Don’t hesitate
                    to reach out!
                </p>
                <form onSubmit={(event) => event.preventDefault()} className="flex flex-col lg:w-1/2 lg:ml-72 lg:self-end">
                    <label>Name:</label>
                    <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        type="text"
                        className="bg-[#D9D9D9] h-8 mb-3 p-2 focus:outline-none"
                    />
                    <label>E-mail:</label>
                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        className="bg-[#D9D9D9] h-8 mb-3 p-2 focus:outline-none"

                    />
                    <label>Subject:</label>
                    <input
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        type="text"
                        className="bg-[#D9D9D9] h-8 mb-3 p-2 focus:outline-none"

                    />
                    <label>Message:</label>
                    <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        type="text"
                        className="bg-[#D9D9D9] h-32 mb-3 p-2 focus:outline-none"
                        id="form_message"
                    />
                    <button
                        onClick={() => console.log(fullMessage)}
                        className="bg-[#2B2F2E] hover:bg-teal-800 text-[#FDFDFD] text-base h-9 mt-5 rounded-md mb-12"
                    >
                        Send
                    </button>
                </form>
            </div>
            <Footer />
        </>
    )
}