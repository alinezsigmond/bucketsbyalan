import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Title from "../../components/Title/Title";

import './about.css'

export default function About() {
    return (
        <>
            <Header />
            <Title text='About us' />
                <section className="about">
                    <p>Buckets by Alan redefines the ordinary, elevating 
                        the humble bucket to a symbol of opulence and 
                        sophistication. Crafted from the finest materials 
                        by an extremely skilled artisan (you guessed it, 
                        it's Alan), each bucket is a masterpiece, boasting 
                        exquisite design details and unparalleled quality. 
                        Whether you're using it as a stylish home accessory, 
                        a unique ice bucket for entertaining, or a statement 
                        piece in your garden, our luxury buckets seamlessly 
                        blend practicality with unparalleled aesthetics. 
                        Elevate your lifestyle and make a statement with 
                        Buckets by Alan – because even the simplest utility 
                        can be a canvas for luxury.</p>
                </section>

                <section className="butreally">
                    <h1 className="really_title">No, but really?</h1> <br />
                    <p>Ok, you got me. Buckets by Alan started out as a joke 
                        on Mediatonic’s livestreams on Twitch back in 2021. 
                        While streaming and showing new costumes and collabs 
                        on the popular game Fall Guys, streamer Alan Campbell 
                        would often use a bucket as a costume. Viewers were 
                        quick to say he should sell them and start a business. 
                        <br />
                        Ok, maybe not “viewers” and actually just Hugh Raynor 
                        and Hugh Raynor only. Sorry, I don’t remember.</p>
                </section>

                <section className="actually">
                    <h1 className="actually_title">Ok, then who really are you?</h1>
                    <p>Alan Campbell still occasionally streams on <a 
                        href="http://twitch.tv/allmavericklive" 
                        target="_blank">Twitch</a> on his own or joined by his 
                        friends. He is also video production lead at Epic 
                        Games, creative director at <a 
                        href="https://allmaverick.com" 
                        target="_blank">All Maverick</a>, and a proud ambassador 
                        for <a 
                        href="https://www.specialeffect.org.uk/" 
                        target="_blank">SpecialEffect.</a></p>
                    <p>This website was made as a joke by Pokemond (Aline Zsigmond), 
                        who happens to be searching for an opportunity as a front-end 
                        developer, by the way. You can check the code for this website 
                        on her <a 
                            href="https://github.com/alinezsigmond/bucketsbyalan"
                            target="_blank"
                        > github</a>.</p>
                    <p>And Hugh? Well, Hugh Raynor is a good friend.</p>
                </section>
            <Footer />
        </>
    )
}