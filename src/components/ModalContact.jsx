import { useState } from 'react';

export default function Modal({ isOpen }) {
    const [open, setOpen] = useState(true);

    if (open) {
        return (
            <div
                className="bg-black/60 w-full h-full fixed top-0 right-0 left-0 bottom-0 z-[99] flex items-center justify-center"
                id="modal"
            >
                <div
                    className="w-11/12 h-4/6 bg-[#FDFDFD] flex flex-col justify-center items-center p-3 rounded-lg
                    lg:w-[600px] lg:h-[400px] lg:justify-evenly lg:p-5"
                >
                    <p className="font-title text-4xl mb-10">Hold up!</p>
                    <p className="text-center font-text">Since this is a joke, I didn't
                        bother making this page functional. Please note we won't
                        actually receive any e-mails from you.</p>
                    <button onClick={() => setOpen(false)} className="bg-black text-[#D9D9D9] w-36 h-10 font-text my-6">Got it, you're lazy</button>
                    <p className="text-center font-text text-xs mt-2">* Dear recruiters, if you check
                        the console you'll see I do know how forms work. Thank you.</p>
                </div>
            </div>
        )
    } else {
        return null;
    }

}