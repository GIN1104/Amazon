import React, {useEffect, useState} from 'react';
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct';
import {useStateValue} from '../StateProvider';
import './Payment.css';
import {Link, useHistory} from 'react-router-dom';
import {CardElement, useStripe, useElements} from "@stripe/react-stripe-js";
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from '../reducer';
import axios from "../axios";

function Payment() {
    const [ {basket, user }, dispatch] = useStateValue();
    const history = useHistory();


    const stripe = useStripe();
    const elements = useElements();

    const [succeeded, setSucceeded] = useState(false);
    const [ processing, setProcessing ] = useState("")
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState(true);

    useEffect(() => {
        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                url: `/payments/create?total=${getBasketTotal(basket) * 100}`
            });
            setClientSecret(response.data.clientSecret)
        }
        getClientSecret();
    }, [basket])

    console.log("THE SECRET >>>>>", clientSecret)

    const handleSubmit = async (event) => {
        event.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({ paymentIntent }) => {
            setSucceeded(true);
            setError(null);
            setProcessing(false);

            dispatch({
                type: "EMPTY_BASKET"
            })

            history.replace('/orders');
        })
    }

    const handelChange = event => {
        setDisabled(event.empty);
        setError(
            event.error
                ? event.message
                : ""
        );
    }
    return (
        <div className="payment">
            <div className="payment__container">
                <h1>
                    Checkout(
                    <Link to="/checkout">{
                            basket
                                ?.length
                        }
                        item</Link>
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
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handelChange}/>
                            <div className="payment__priceContainer">
                                <CurrencyFormat
                                    renderText={value => <h3>Order Total: {value }</h3>}
                                    decimalScale={2}
                                    value={getBasketTotal(basket)}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"$"} />
                                <button disabled={processing || disabled || succeeded}>
                                    <span>{ processing ? <p>Processing</p> : "Buy Now"}</span>
                                </button>
                            </div>
                            {error && <div>{ error}</div>}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment
