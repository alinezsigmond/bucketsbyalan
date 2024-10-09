import { useState } from 'react';
import logoH from '../assets/img/logo/logoX.svg'
import shopIcon from '../assets/img/shop.svg'
import { Link } from 'react-router-dom'
import Menu from './Menu'
import SearchBar from './Search';

let cart = [];
let total = 0;
export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [cartOpen, setCartOpen] = useState(false);
    return (
        <>
            <div className='w-full h-28 lg:h-36 bg-[#FDFDFD] flex justify-center'>
                <Link className='w-[330px] lg:w-96 flex' to='/'><img src={logoH} alt="Logo Buckets by Alan" /></Link>
            </div>
            <div className="bg-[#D9D9D9] w-full h-16 flex flex-row items-center justify-center sticky top-0 font-text text-xl z-10">
                <div
                    id='desktop'
                    className='lg:flex lg:justify-center w-full hidden'>
                    <nav className="w-4/6 justify-around items-center uppercase lg:flex">
                        <Link to='/about-us'>About us</Link>
                        <Link to='/shop'>Shop</Link>
                        <Link to='/merch'>Merch</Link>
                        <Link to='/contact-us'>Contact us</Link>
                        <SearchBar />
                        <div id="cart" className='flex hover:cursor-pointer' onClick={() => { setCartOpen(!cartOpen) }}>
                            <img src={shopIcon} alt="shopping basket" />
                            <p id='cartItems' className='bg-black font-text text-white text-xs rounded-lg w-4 h-4 text-center flex justify-center items-center'>{cart.length}</p>
                        </div>
                        {cartOpen ?
                            <CartModal title={cart.title} />
                            :
                            null
                        }
                    </nav>
                </div>

                <div
                    id="mobile"
                    className='flex items-center justify-around w-11/12 lg:hidden'>
                    <svg onClick={() => setMenuOpen(!menuOpen)} className="h-6 w-6 fill-current lg:hidden">
                        {menuOpen ?
                            <path v-if="isOpen" fillRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
                            :
                            <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
                        }
                    </svg>

                    <SearchBar />
                    <div id="cart" className='flex hover:cursor-pointer' onClick={() => { setCartOpen(!cartOpen) }}>
                        <img src={shopIcon} alt="shopping basket" />
                        <p id='cartItemsMobile' className='bg-black font-text text-white text-xs rounded-lg w-4 h-4 text-center flex justify-center items-center'>{cart.length}</p>
                    </div>
                    {cartOpen ?
                        <CartModal />
                        :
                        null
                    }
                </div>
                {menuOpen ?
                    <Menu />
                    :
                    null
                }
            </div>
        </>
    )
}

export function addToCart(title, price, img, alt) {
    const existingItem = cart.find(item => item.title === title)
    if (existingItem) {
        existingItem.qty += 1;
    } else {
        cart.push({
            title,
            price,
            img,
            alt,
            qty: 1
        })
    }
    total += price;
    updateCart(cart);
}

function updateCart(cart) {
    let number = document.getElementById('cartItems');
    let numberMobile = document.getElementById('cartItemsMobile');

    cart.forEach(item => {
        number.innerHTML = cart.length;
        numberMobile.innerHTML = cart.length;
    })
}

function CartModal() {
    return (
        cart.length > 0 ?
            <div
                className="absolute lg:size-72 lg:right-44 top-16 right-0 w-72 h-auto max-h-96 bg-white border border-[#D9D9D9] divide-y divide-solid overflow-auto flex flex-col"
            >
                {cart.map((item) => (
                    <div className='flex flex-row p-2 justify-around items-center '>
                        <img className='object-scale-down size-20' src={item.img} alt={item.alt} />
                        <div className='flex flex-col justify-center w-36'>
                            <p className="normal-case lg:translate-x-1">{item.title}</p>
                            <p className='font-text text-base text-black/60 lg:translate-x-1'>£{item.price}</p>
                        </div>
                        <p className='font-text text-base normal-case text-black/60 '>x{item.qty}</p>
                    </div>
                ))}
                <div className='flex flex-col justify-center items-center p-3 '>
                    <p className="font-text normal-case text-lg">Total: £{total}</p>
                    <button
                        className='bg-black text-[#FDFDFD] w-full text-base rounded-md hover:bg-teal-800 h-9 mt-2'
                        onClick={() => {
                            alert('We appreciate your willingness to spend money on this, but we also urge you to seek professional help.')
                        }}>
                        Proceed to checkout
                    </button>
                </div>
            </div>
            :
            <div
                className="absolute lg:w-72 lg:right-44 top-16 right-0 w-72 h-20 bg-white border border-[#D9D9D9] divide-y divide-solid overflow-auto flex justify-center items-center"
            >
                <p className='normal-case font-text text-s'>Your cart is empty</p>
            </div>

    )
}