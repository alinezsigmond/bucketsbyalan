import './header.css'
import logoH from '../../assets/img/logo/logoX.svg'
import shopIcon from '../../assets/img/shop.svg'
import { Link } from 'react-router-dom'
import Shop from '../../pages/shop/Shop'

export default function Header() {
    return(
        <header>
            <div className="logo">
                <Link to='/'><img src={logoH} alt="Logo Buckets by Alan" /></Link>
            </div>
            <div className="section2">
                <nav className="links">
                    <a href="#">About us</a>
                    <Link  to='/shop'>Shop</Link>
                    <a href="#">Merch</a>
                    <a href="#">Contact</a>
                </nav>
                <input placeholder='Search' type="text" id="searchInput" />
                <a href=""><img src={shopIcon} alt="shopping basket" /></a>
        </div>
        </header>
    )
}