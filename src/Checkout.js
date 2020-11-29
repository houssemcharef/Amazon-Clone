import React from 'react'
import Subtotal from './Subtotal'
import './Checkout.css';
import Checkoutproduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';

export default function Checkout(props) {
    const [{ basket }, dispatch] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout__left">
                <img
                    className="checkout__ad"
                    src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
                    alt="" />
                <div>
                    <h2 className="checkout__title">Your shopping Basket</h2>
                    {basket.map(item =>(
                        <Checkoutproduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />
                    ))}     
                </div>
            </div>
            <div className="checkout__right">
                <h2>The subtotal will go here</h2>
                <Subtotal/>
            </div>
        </div>
    )
}
