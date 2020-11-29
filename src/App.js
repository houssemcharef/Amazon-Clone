import './App.css';
import Header from './Header.js'
import Home from './Home.js';
import Checkout from './Checkout';
import Login from './Login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { useEffect } from 'react';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Payment from './Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js'


const promise = loadStripe("pk_test_51HnVLcL83IQ8H8DrF8k1hrbNzTEAY7wMuWR7b8IbrLP1VzUpFeWVEIMAER9yTqc6iC1FKo8zSCD9Wqqmpu08rk7H00eqrBfol2");
function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log('the user is :', authUser);
      if (authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser 
        })
        
      } else {
        dispatch({
          type: 'SET_USER',
          user: null
        })
        
      }
    })
  }, []);

  return (
    <Router>
      <div className="App">
        <Switch >
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment /> 
            </Elements>
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
