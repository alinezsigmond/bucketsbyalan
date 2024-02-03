import './header.css'
import logoH from '../../assets/img/logo/logoX.svg'
import shopIcon from '../../assets/img/shop.svg'

export default function Header() {
    return(
        <header>
            <div className="logo">
                <img src={logoH} alt="Logo Buckets by Alan" />
            </div>
            <div className="section2">
                <nav className="links">
                    <a href="#">About us</a>
                    <a href="#">Shop</a>
                    <a href="#">Merch</a>
                    <a href="#">Contact</a>
                </nav>
                <input placeholder='Search' type="text" id="searchInput" />
                <a href=""><img src={shopIcon} alt="shopping basket" /></a>
        </div>
        </header>
    )
}