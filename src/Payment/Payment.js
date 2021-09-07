import React, { useState} from 'react';
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct';
import {useStateValue} from '../StateProvider';
import './Payment.css';
import { Link } from 'react-router-dom';
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js"

function Payment() {
    const [{ basket, user }] = useStateValue();

    const stripe = useStripe();
    const elements = useElements();

    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const handleSubmit = e => {

    }
    const handelChange = event => {
        setDisabled(event.empty);
        setError(event.error ? event.message : "");
    }
    return (
        <div className="payment">
            <div className="payment__container">
                <h1>
                    Checkout(
                    <Link to="/checkout">{
                            basket?.length
                        } item</Link>
                    )
                </h1>

                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment__address">
                        <p>{
                                user
                                    ?.email
                            }</p>
                        <p>Haifa</p>
                        <p>Israel</p>
                    </div>
                </div>
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Review items and delivery</h3>
                    </div>
                    <div
                        className="payment__items"
                        style={{
                            backgroundColor: 'white'
                        }}>
                        {
                            basket.map((item, i) => (
                                <CheckoutProduct
                                    key={i}
                                    id={item.id}
                                    title={item.title}
                                    image={item.image}
                                    price={item.price}
                                    rating={item.rating}/>
                            ))

                        }
                    </div>
                </div>
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment__details">
                        <form onSubmit = { handleSubmit }>
                            <CardElement onChange={ handelChange }/>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment
