import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Title from '../../components/Title'

import greyBucket from '../../assets/img/home/grey-bucket.png'

export default function Home() {
    return (
        <>
            <Header />
            <Title text='Homepage' />
            <div className='flex flex-col justify-center lg:items-center'>
                <section className='flex flex-col justify-around items-center py-8 lg:hidden'>
                    <h1 className='font-title text-6xl text-center mb-7 lg:w-2/5'>Tired of the same old boring buckets?</h1>
                    <img
                        src={greyBucket}
                        alt="Plain and boring old bucket"
                        className='object-scale-down size-72'
                    />
                    <p className='font-text text-2xl mt-5'>So are we.</p>
                    <p className='font-text text-xl mt-3 text-center'>Get ready for a world of elegance with our exclusive, custom, handpainted buckets!</p>
                </section>
                <section className='lg:flex flex-row items-center justify-around py-8 hidden bg-white w-9/12'>
                    <div className='flex flex-col w-2/5 text-left'>
                        <h1 className='font-title text-6xl'>Tired of the same old boring buckets?</h1>
                        <p className='font-text text-2xl mt-5'>So are we.</p>
                        <p className='font-text text-xl mt-3 w-96'>Get ready for a world of elegance with our exclusive, custom, hand-painted buckets!</p>
                    </div>
                    <img
                        src={greyBucket}
                        alt="Plain and boring old bucket"
                        className='object-scale-down size-72'
                    />
                </section>
                <section className='flex flex-col bg-black/5 w-full p-5 items-center justify-between text-center'>
                    <h1 className='font-title text-4xl py-7'>What our clients say</h1>
                    <div className='text-center pb-5'>
                        <p className='font-text text-xl'>Pokemond</p>
                        <p className='font-text text-teal-700'>★★★★★</p>
                        <p className='font-text text- italic'>Personally I can't afford one of Alan's buckets yet, but it's a dream to have one some day!</p>
                    </div>
                    <div className='text-center pb-5'>
                        <p className='font-text text-xl'>Jez</p>
                        <p className='font-text text-teal-700'>★★★★☆</p>
                        <p className='font-text text- italic'>Very beautiful and sturdy bucket. I was planning on wearing it this halloween but it smells of banana, so I'll have to wash it first.</p>
                    </div>
                    <div className='text-center pb-7'>
                        <p className='font-text text-xl'>Hugh</p>
                        <p className='font-text text-teal-700'>★☆☆☆☆</p>
                        <p className='font-text text- italic'>You have got to be kidding me. Are people stupid enough to buy one of these things?</p>
                    </div>
                    <div className='text-center pb-5'>
                        <p className='font-text text-xl'>Alan's mum</p>
                        <p className='font-text text-teal-700'>★★★★★</p>
                        <p className='font-text text- italic'>I was gifted a custom bucket and I think it's lovely! It makes a great vase for my petunias.</p>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    )
}