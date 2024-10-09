import { addToCart } from "./Header"
import { Slide, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

export default function Item(props) {
    const notify = () => toast.success("Item added to cart", {
        autoClose: 3000,
        position: 'bottom-right',
        pauseOnHover: false,
        transition: Slide
    });

    return (
        <div className="border border-black border-solid p-4 m-3">
            <img src={props.img} alt={props.alt} className="self-center h-[150px] w-[150px] object-cover" />
            <div className="flex flex-col justify-center">
                <div className='font-text'>
                    <p className="mt-1">{props.title}</p>
                    <p className="mb-1">£{props.price}</p>
                </div>
                <button
                    className="bg-black text-[#D9D9D9] font-text w-32 h-8 self-center hover:bg-teal-950"
                    data-name={props.title}
                    data-price={props.price}
                    onMouseUp={notify}
                    onClick={() => {
                        addToCart(props.title, props.price, props.img, props.alt);
                    }}
                >Add to cart</button>
            </div>
        </div>
    )
}