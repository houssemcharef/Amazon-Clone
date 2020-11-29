
import React, { useState } from 'react';
import './Login.css';
import { Link, useHistory } from 'react-router-dom';
import { auth } from './firebase';

export default function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const signIn = e => {
        e.preventDefault();
        auth
            .signInWithEmailAndPassword(email, password)
            .then( auth => {
                console.log(auth);
                history.push('/');
            })
            .catch(error => alert(error.message));
    }

    const register = e => {
        e.preventDefault();
        auth
        .createUserWithEmailAndPassword(email, password)
        .then((auth) => {
            if (auth) {
                history.push('/')
            }
        })
        .catch(error => alert(error.message));

    }
    return (
        <div className="login">
            <Link to='/'>
            <img className="login__image" src="http://pngimg.com/uploads/amazon/amazon_PNG21.png" />
            </Link>
            <div className="login__container">
                <h1>Sign-in</h1>

                <form>
                    <h5>Email</h5>
                    <input type='text' value={email} onChange=
                        {e=> setEmail(e.target.value)} />
                    <h5>Password</h5>
                    <input type="password"
                        value={password}
                        onChange=
                        {e => setPassword(e.target.value)}
                    />
                    <button type="submit" className="login__signInButton" onClick={signIn}>Sign In</button>
                </form>
                <p>
                By continuing, you agree to Amazon's <a href="#">Conditions of Use</a> and <a href="#">Privacy Notice.</a> 
                </p>
                <button className="login__registerButton" onClick={register}>Create Your Amazon Account</button>
            </div>
        </div>
        
    )
}
