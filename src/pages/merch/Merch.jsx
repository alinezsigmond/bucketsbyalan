import Header from '../../components/Header'
import Title from '../../components/Title'
import Item from '../../components/Item'
import Footer from '../../components/Footer'

import merch from '../../../api/merch/merch-api.json'

export default function Merch() {
    document.title = 'Buckets by Alan - Merch'
    return (
        <>
            <Header />
            {/* <div className='h-56'></div> */}
            <Title title='Merch' />
            <div className="w-full flex flex-col items-center justify-center mb-12">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-3">
                    {merch.map((item, index) => (
                        <Item key={index} title={item.title} price={item.price} img={item.img} alt={item.alt} />
                    ))}
                </div>
            </div>
            <Footer />
        </>
    )
}