import { useState } from 'react';
import './modal.css'

export default function Modal({isOpen}) {
    const [open, setOpen] = useState(true);

    if (open) {
        return (
            <div className="modal_bg">
                <div className="modal">
                    <p className="modal_title">Hold up!</p>
                    <p className="modal_text">Since this is a joke, I didn't 
                    bother making this page functional. Please note we won't 
                    actually receive any e-mails from you.</p>
                    <button onClick={() => setOpen(false)} className="button_modal">Got it, you're lazy</button>
                    <p className="modal_small-text">Dear recruiters, if you check 
                    the console you'll see I do know how forms work. Thank you.</p>
                </div>
            </div>
        )
    } else {
        return null;
    }

}