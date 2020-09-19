import React from 'react';
import './App.css';

import Header from './Components/Header/Header.component';
import Home from './Components/Home/Home.component';
import Cart from './Components/Cart/Cart.component';

import {Switch,Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Header />
      
      <Switch>
        <Route exact path='/cart'>
          <Cart/>
        </Route>


        <Route path='/'>
        
        <Home/>
        </Route>

      </Switch>
    </div>
  );
}

export default App;
