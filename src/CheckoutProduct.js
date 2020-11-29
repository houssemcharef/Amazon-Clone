import React from 'react';
import StarIcon from '@material-ui/icons/Star';
import './CheckoutProduct.css';
import { useStateValue } from './StateProvider';

export default function Checkoutproduct({id,image, title, price, rating}) {
    const [state, dispatch] = useStateValue();
    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id:id
        }) 
        
    }

    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct__image" src={image} />
            <div className="checkoutProduct__info">
                <p className="checkoutproduct__title"> {title} </p>
                <p className="chekoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                          <p><StarIcon /></p>  
                        ))}
                </div>
                <button onClick={removeFromBasket}>remove product</button>
            </div>
        </div>
    )
}
