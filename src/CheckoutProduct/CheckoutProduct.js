import React from 'react';
import './CheckoutProduct.css';
import StarIcon from '@material-ui/icons/Star';

function CheckoutProduct({id, image, title, price, rating}) {
    return (
        <div  className="checkoutProduct">
            <img className="checkoutProduct__image" src={image} alt=""/>
            <div className="checkoutProduct__info">
                <p className="CheckoutProduct__title">{title}</p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutPorduct__rating">
                    {
                        Array(rating)
                            .fill()
                            .map((_, i) => (
                                <p key={i}><StarIcon
                                    key={i}
                                    style={{
                                        color: "gold"
                                    }}/></p>
                            ))
                    }
                </div>
                <button>Remove from Basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
