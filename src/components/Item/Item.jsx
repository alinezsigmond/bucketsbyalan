import './item.css'

export default function Item(props) {
    return(
        <div className="product">
            <img src={props.img} alt={props.alt} className="photo" />
            <div className="wrapper">
                <div className="product-details">
                    <p className="item-title">{props.title}</p>
                    <p className="item-price">{props.price}</p>
                </div>
                <button className="add">Add to cart</button>
            </div>
        </div>
    )
}