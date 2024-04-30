import { Link } from 'react-router-dom'

export default function Menu() {
    return (
        <div
            id='menu-mobile'
            className='bg-[#D9D9D9] absolute w-7/12 left-0 top-52 divide-y divide-solid captalize transform'>
            <div className='py-4 px-9'><Link to='/about-us'>About us</Link></div>
            <div className='py-4 px-9'><Link to='/shop'>Shop</Link></div>
            <div className='py-4 px-9'><Link to='/merch'>Merch</Link></div>
            <div className='py-4 px-9'><Link to='/contact-us'>Contact us</Link></div>
        </div>
    )
}