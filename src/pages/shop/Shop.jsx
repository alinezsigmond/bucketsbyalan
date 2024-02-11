import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Title from "../../components/Title/Title";
import Item from "../../components/item/Item";

import products from '../../../api/buckets/buckets-api.json'

import './shop.css'

export default function Shop() {
    return (
        <>
            <Header />
            <Title text='Shop' />
            <div className="items-wrapper">
                <div className="items-grid">
                {products.map((item, index) => (
                    <Item key={index} title={item.title} price={item.price} img={item.img} alt={item.alt} />
                ))}
                </div>
            </div>
            <Footer />
        </>
    )
}