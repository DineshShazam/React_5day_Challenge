import React,{useEffect} from 'react';
import './App.css';

import Header from './Components/Header/Header.component';
import Home from './Components/Home/Home.component';
import Cart from './Components/Cart/Cart.component';
import Login from './Components/Login/Login.component';

import {Switch,Route} from 'react-router-dom'
import { auth } from './firebase/firebase';
import { useStateValue } from './State/StateProvider';


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
  }, [])


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

        <Route path='/'>
        <Header />
        <Home/>
        </Route>

      </Switch>
    </div>
  );
}

export default App;
