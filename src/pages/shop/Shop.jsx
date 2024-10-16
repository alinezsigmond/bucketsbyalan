import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Item from '../../components/Item'
import Title from '../../components/Title'

import products from '../../../api/products.json'

export default function Products() {
    document.title = 'Buckets by Alan - Shop'
    const buckets = products.filter(item => item.category === "bucket");
    return (
        <>
            <Header />
            <Title title='Shop' />
            <div className="w-full flex flex-col items-center justify-center mb-12">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-3">
                    {buckets.map((item, index) => (
                        <Item key={index} title={item.title} price={item.price} img={item.img} alt={item.alt} />
                    ))}
                </div>
            </div>
            <Footer />
        </>
    )
}