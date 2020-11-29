import React, { useEffect, useState } from 'react';
import './Payment.css';
import { useStateValue } from './StateProvider';
import Checkoutproduct from './CheckoutProduct';
import { Link } from 'react-router-dom';
import { CardElement, useStripe, useElement, useElements } from "@stripe/react-stripe-js";
import { getBasketTotal } from './reducer';
import CurrencyFormat from 'react-currency-format';

export default function Payment(props) {
    const [{ basket, user }, dispatch] = useStateValue();
    // const stripe = useStripe();
    // const elements = useElements();
    const [succeeded, setSuccedded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    // const [clientSecret, setClientSecret] = useState(true);
    // useEffect(() => {
    //     const getClientSecret = async () => {
    //         const response = await axios({
    //             method: 'post',
    //             url: `/payments/create?totale=${getBasketTotal(basket) * 100}`
    //         });
    //         setClientSecret(response.data.clientSecret);
    //     }
    //     getClientSecret();
    // }, [basket])

    // const handleSubmit = async e => {
       
    //     e.preventDefault();
    //     setProcessing(true);
    //     const payload = await stripe.confirmCardPayment(clientSecret, {
    //         paymeent_method: {
    //             card: elements.getElement(CardElement)
    //         }
    //     }).then(({ paymentIntent }) => {
    //         setSucceeded(true);
    //         setError(null);
    //         setProcessing(false);
    //         history.replace('/orders');
    //     })

    //     // const payload = await stripe

    // }
    // const handleChange = e => {
    //     setDisabled(e.empty);
    //     setError(e.error);

    // }

    return (
        <div className="payment">
            <div className="payment_container">
                <h1>
                    Checkout <Link to="/checkout"> {basket?.length} items </Link>
                </h1>
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Delevery Adress</h3>
                    </div>
                    <div className="payment__address">
                        <p>{user?.email}</p>
                        <p>rue soussen</p>
                        <p> ksarhellal, monastir, tunisia</p>
                    </div>
                </div>
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Review items and delevery</h3>

                    </div>
                    <div className="payment__items">
                    
                        {basket.map(item => (
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

                
                {/* pament section - -payment method */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment__detail">
                        <form
                            // onSubmit={handleChange}
                        >
                            <CardElement
                                // onChange={handleChange}
                            />
                            <div className="payment__priceContainer">
                                <CurrencyFormat
                                    renderText={(value) =>(
                                            <h3>Order Totale: {value}</h3>
                                    )}
                                    decimalScale={2}
                                    value={ getBasketTotal(basket) }
                                    displayType={"text"}
                                    thousandSparator={true}
                                    prefix={"$"}
                                />
                                <button disabled={processing || disabled || succeeded}>
                                    <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                                </button>
                                {error && <div>error</div>}
                            </div>
                        </form>
                    </div>
                </div>

            
            </div>
        </div>
    )
}
