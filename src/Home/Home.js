import React from 'react';
import './Home.css';
import Product from '../Product/Product';

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img
                    className="home__image"
                    src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                    alt=""/>

                <div className="home__row">
                    <Product
                        id="12321341"
                        title="X5 Combination Travel Fishing Rod 2 Reels & Case. 5 Rods in ONE. 220cm 7' 2 + 190cm 6' 3 Spin, Cast, Bait, Fly nano-carbon fishing rods, 4 tips. 10 sections"
                        price={129.99}
                        image="https://m.media-amazon.com/images/I/71ZUHwHWRVS._AC_SL1500_.jpg"
                        rating={5}/>
                    <Product
                        id="49538094"
                        title="Kenwood 0W20011139 kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl, Removable Splash Guard, 1000 W, Black"
                        price={239.0}
                        image="https://images-eu.ssl-images-amazon.com/images/I/61etD4-IrPL.__AC_SY300_SX300_QL70_ML2_.jpg"
                        rating={4}/>

                </div>
                <div className="home__row">
                    <Product
                        id="4903850"
                        title="Smart Watch, 1.69' Touch Screen Smartwatch"
                        price={199.99}
                        image="https://m.media-amazon.com/images/I/61uYZrNKzwS._AC_SL1500_.jpg"
                        rating={2}/>
                    <Product
                        id="23445930"
                        title="
                        Echo Dot (3rd Gen) - Smart speaker with Alexa - Charcoal Fabric"
                        price={98.99}
                        image="https://m.media-amazon.com/images/I/61u48FEs0rL._AC_SL1000_.jpg"
                        rating={4}/>
                    <Product
                        id="3254354345"
                        title="New Apple iPad Pro (12.9-inch, Wi-Fi + Cellular, 1TB) - Silver (4th Generation) with AppleCare+"
                        price={598.99}
                        image="https://m.media-amazon.com/images/I/51tQooD4zOL._AC_SL1001_.jpg"
                        rating={5}/>

                </div>
                <div className="home__row">
                    <Product
                        id="4903850"
                        title="Samsung Odyssey G9 LC49G93TSSRXXU 49' 1000R Curved Gaming Monitor - 240hz"
                        price={1999.99}
                        image="https://m.media-amazon.com/images/I/81RcJoVbvDL._AC_SL1500_.jpg"
                        rating={2}/>
                </div>
            </div>
        </div>
    )
}

export default Home
