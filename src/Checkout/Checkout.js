import React from 'react';
import Subtotal from '../Subtotal/Subtotal';
import './Checkout.css';
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct';
import { useStateValue } from '../StateProvider';

function Checkout() {
    const [{ basket }] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img
                    src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
                    alt="banner"
                    className="checkout__ad"/>
                <div>
                    <h2 className="checkout__title">Your shopping Basket</h2>
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
                    {/* CheckoutProduct */}
                    {/* CheckoutProduct */}
                    {/* CheckoutProduct */}
                </div>
            </div>
            <div className="checkout__right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout
