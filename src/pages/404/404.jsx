import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Title from "../../components/Title";
import { Link } from "react-router-dom";

export default function Error404() {
    return (
        <>
            <Header />
            <Title title='Page not found' />
            <div className="w-full h-72 flex flex-col items-center text-left">
                <p className="font-text text-xl">We're not sure what happened, but let's agree it's probably your fault.</p>
                <p className="font-text text-xl my-5">Apologize and head back to our home page</p>
                <Link to='/'><button className="w-36 h-14 bg-black text-[#FDFDFD] font-text text-base rounded-md my-5">Sorry, it won't <br /> happen again</button></Link>
            </div>
            <Footer />
        </>
    )
}