import Logo from '../assets/img/logo/logoX.svg'

export default function Footer() {
    return (
        <footer className="mt-5 bg-[#D9D9D9] w-full h-80 md:h-64 flex flex-row justify-center items-center">
            <div className='w-5/6 flex flex-col justify-center items-center'>
                <p className="text-[#484848] text-center font-text text-s lg:max-w-72 lg:left-32 lg:text-left lg:absolute">‘Buckets by Alan’ is a joke and should not be taken seriously (but if you really want a custom bucket, try contacting Alan).</p>
                <img className='my-8 md:my-6' src={Logo} alt="Buckets by Alan logo" />
                <p className="text-[#484848] text-center font-text text-xs w-3/5">© 2024 Aline Zsigmond (aka Pokemond) - All rights reserved</p>
            </div>
        </footer>
    )
}