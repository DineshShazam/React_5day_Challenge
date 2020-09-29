/* eslint-disable react-hooks/exhaustive-deps */
import React,{useEffect} from 'react';
import './App.css';

import Header from './Components/Header/Header.component';
import Home from './Components/Home/Home.component';
import Cart from './Components/Cart/Cart.component';
import Login from './Components/Login/Login.component';
import Checkout from './Components/Checkout/checkout';
import Orders from './Components/Receipt/orders';


import {Switch,Route} from 'react-router-dom'
import { auth } from './firebase/firebase';
import { useStateValue } from './State/StateProvider';

import {loadStripe} from '@stripe/stripe-js'
import {Elements} from '@stripe/react-stripe-js'
import OrderHistory from './Components/OrderHistory/OrderHistory';


const promise = loadStripe('pk_test_51HVHHYKTcLtwblEUgaOifomOW8H77zJbyIdOwtBw5Rix2uWmuGOAAaj1Q2amuSwCL97r9et5hkS1q6G7F1X533JW008BGPN7S7')


function App() {

  const [,dispatch] = useStateValue()

 // to capture the user AUth details once after he logs in 
  useEffect(() => {
    auth.onAuthStateChanged(auth => {
      
      if(!auth) {
        dispatch({
          type:'ADD_USER',
          payload:null
        })
      }
      
      // store the user details in the data layer
      dispatch({
        type:'ADD_USER',
        payload:auth
      })

    })
  },[])


  return (
    <div className="App">
     
      
      <Switch>

        <Route exact path='/cart'>
          <Header />
          <Cart/>
        </Route>

        <Route exact path='/login'>
          <Login />
        </Route>

        <Route exact path='/checkout' >
           <Header />
            <Elements stripe={promise}>
              <Checkout />
            </Elements>
        </Route>

        <Route exact path='/orders'>
          <Header />
          <Orders />
        </Route>

        <Route exact path='/OrderHistory'>
          <Header />
          <OrderHistory/>
        </Route>

        <Route path='/'> 
        <Header />
        <Home/>
        </Route>

      </Switch>
    </div>
  );
}

export default App;
