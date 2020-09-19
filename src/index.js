import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from 'react-router-dom'
import { StateProvider } from './State/StateProvider';
import reducer,{initialState} from './Reducer/reducer';

ReactDOM.render(

  <React.StrictMode>
    {/* It passes the initial value and reducer action to the component */}
    <StateProvider initialState={initialState} reducer={reducer} >
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')

);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
