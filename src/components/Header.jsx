import { useState } from 'react';
import logoH from '../assets/img/logo/logoX.svg'
import shopIcon from '../assets/img/shop.svg'
import { Link } from 'react-router-dom'
import Menu from './Menu'

let cart = [];
export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    let items = 0;
    return (
        <>
            <header className='top-0 w-full h-52 bg-[#FDFDFD] flex flex-col justify-between items-center font-text text-xl'>
                <div className="mt-14">
                    <Link to='/'><img className='w-[330px] lg:w-96' src={logoH} alt="Logo Buckets by Alan" /></Link>
                </div>
                <div className="bg-[#D9D9D9] w-full h-16 flex flex-row items-center justify-center">
                    <div id='desktop' className='lg:flex lg:justify-center w-full hidden'>
                        <nav className="w-4/6 justify-around items-center uppercase lg:flex">
                            <Link to='/about-us'>About us</Link>
                            <Link to='/shop'>Shop</Link>
                            <Link to='/merch'>Merch</Link>
                            <Link to='/contact-us'>Contact us</Link>
                            <input
                                placeholder='Search'
                                type="text"
                                id="searchInput"
                                className='bg-white rounded-lg w-56 h-9 px-3 text-lg focus:outline-none'
                            ></input>
                            <div id="cart" className='flex'>
                                <img src={shopIcon} alt="shopping basket" />
                                <p id='cartItems' className='bg-black font-text text-white text-xs rounded-lg w-4 h-4 text-center flex justify-center items-center'>{cart.length}</p>
                            </div>
                        </nav>
                    </div>

                    <div id="mobile" className='flex items-center justify-around w-11/12 lg:hidden'>
                        <svg onClick={() => setMenuOpen(!menuOpen)} className="h-6 w-6 fill-current lg:hidden">
                            {menuOpen ?
                                <path v-if="isOpen" fillRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
                                :
                                <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
                            }
                        </svg>

                        <input
                            placeholder='Search'
                            type="text"
                            id="searchInput"
                            className='bg-white rounded-lg w-56 h-9 px-3 text-lg focus:outline-none'
                        >
                        </input>
                        <div id="cart" className='flex'>
                            <img src={shopIcon} alt="shopping basket" />
                            <p id='cartItemsMobile' className='bg-black font-text text-white text-xs rounded-lg w-4 h-4 text-center flex justify-center items-center'>{cart.length}</p>
                        </div>
                    </div>
                    {menuOpen ?
                        <Menu />
                        :
                        null
                    }
                </div>
            </header>
            {/* <div class="h-24"></div> */}
        </>
    )
}

export function addToCart(name, price) {
    cart.push({
        name,
        price,
        qtd: 1
    })
    updateCart();
}

function updateCart() {
    let total = 0;
    let number = document.getElementById('cartItems');
    let numberMobile = document.getElementById('cartItemsMobile');

    cart.forEach(item => {
        total += item.price * item.qtd;
    })
    cart.forEach(item => {
        number.innerHTML = cart.length;
        numberMobile.innerHTML = cart.length;
    })
    console.log(total)
}


// menuMobile.addEventListener('click', function (e) {
//     console.log(e.target);
// })