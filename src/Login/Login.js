import React, {useState} from 'react';
import "./Login.css";
import {Link, useHistory} from "react-router-dom";
import {auth} from '../firebase';

function Login() {
    const history = useHistory()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const signIn = e => {
        e.preventDefault()
        console.log(email, password)
        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('/')
            })
            .catch(err => alert(err.message));
    }
    const register = e => {
        e.preventDefault()
        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                console.log(auth);
                if (auth) {
                    history.push('/')
                }
            })
            .catch(err => alert(err.message));
    }

    return (
        <div className="login">
            <Link to="/">
                <img
                    className="login__logo"
                    alt="Amazon logo"
                    src="https://pngimg.com/uploads/amazon/amazon_PNG24.png"/>
            </Link>
            <div className="login__container">
                <h1>Sign-in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange = {e => setEmail(e.target.value)}/>
                    <h5>Password</h5>
                    <input
                        type="password"
                        value={password}
                        onChange =
                        {e => setPassword(e.target.value)}/>
                    <button type="submit" onClick={signIn} className="login__signInButton">Sign In</button>
                </form>
                <p>
                    By signing-in you agree to the AMAZON FAKE Conditions of Use & Sale. Please see
                    our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>
                <button onClick={register} className="login_registerButton">Create yuor amazon account</button>
            </div>
        </div>
    )
}

export default Login
