import React from 'react';
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct';
import { useStateValue } from '../StateProvider';
import './Payment.css';


function Payment() {
    const [{ basket, user }] = useStateValue();
    return (
        <div className="payment">
            <div className="payment__container">
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment__address">
                        <p>{user?.email}</p>
                        <p>Haifa</p>
                        <p>Israel</p>
                    </div>
                </div>
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className="payment__items" style={{backgroundColor: 'white'}}>
                    {
                        basket.map((item, i )=> (
                            <CheckoutProduct 
                            key={i}
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />
                        ))

                    }
                    </div>
                </div>
                <div className="payment__section"></div>
            </div>
        </div>
    )
}

export default Payment
