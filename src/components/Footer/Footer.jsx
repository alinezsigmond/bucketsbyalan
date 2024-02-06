import './footer.css'
import Logo from '../../assets/img/logo/logoX.svg'

export default function Footer() {
    return(
        <footer className='footer'>
            <p className='footer-text'>‘Buckets by Alan’ is a joke and should not be taken seriously (but if you really want a custom bucket maybe try contacting Alan).</p>
            <img src={Logo} alt="Logo Buckets by Alan" />
            <p className="copyright">© 2024 Aline Zsigmond (aka Pokemond) - All rights reserved</p>
        </footer>
    )
}