import React, {useEffect} from 'react';
import './App.css';
import Header from './Header/Header';
import Home from './Home/Home';
import Checkout from './Checkout/Checkout';
import Login from './Login/Login';
import Payment from './Payment/Payment';
import Orders from './Orders/Orders';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {auth} from './firebase';
import {useStateValue} from './StateProvider';
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js"

const promise = loadStripe(
    'pk_test_51JWnK2CvczMvL8dL1x3bEKNAPoekI1AucoGYLlR6ObkUMiyKFyAfEuSmkDo0AnTybRaAJJIC6JfWPqV9khgYJ0F900ircTi8Ls',
    { locale: "en" }
);

function App() {

    const [
        {
            user
        }, dispatch] = useStateValue()

    useEffect(() => {
        auth.onAuthStateChanged(authUser => {
            if (authUser) {
                dispatch({type: 'SET_USER', user: authUser})
            } else {
                dispatch({type: 'SET_USER', user: authUser})
            }

        })
    }, [dispatch])
    console.log(user)

    return (
        <Router>
            <div className="app">
                <Switch>
                    <Route path="/orders">
                       <Header/>
                        <Orders />
                    </Route>
                    <Route path="/login">
                        <Login/>
                    </Route>
                    <Route path="/checkout">
                        <Header/>
                        <Checkout/>
                    </Route>
                    <Route path="/payment">
                        <Header/>
                        <Elements stripe={promise}>
                            <Payment/>
                        </Elements>
                    </Route>
                    <Route path="/">
                        <Header/>
                        <Home/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
