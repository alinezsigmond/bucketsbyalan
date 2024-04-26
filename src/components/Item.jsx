import { addToCart } from "./Header"

export default function Item(props) {
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
                    onClick={() => {
                        addToCart(props.title, props.price);
                    }}
                >Add to cart</button>
            </div>
        </div>
    )
}