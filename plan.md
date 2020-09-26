// 15-09

/// npm i @material-ui/core 

// icons
    - npm i @material-ui/icons

// Header.js

. create a Header component .header 
    - left side of header contains the logo .header_logo
    - middle contains the .header_search // input field and search icon 
    - right side .header_nav, create each option

// Home.js

. Create image slider .home__container width:100%
z-inde:-1
margin-bottom: -150px

. Create content .home__row

// Product.js

// use custom button concept

. product 
    .product__info
        .title
        .price

    .product__rating
        .img
        .description  
        .add to basket

===================== DAY-3 ===================

// create login page

// useState() to handle the form value
    - const [email,setEmail] = useState('');

    - <input value={email} onChange={(e) => setEmail(e.target.value)}>

// enable signIN method in Firebase

// npm i firebase

// npm i -g firebase-tools ==> this helps for deployment 

// firebase.js
    - import firebase from 'firebase'
    - const firebaseApp = firebase.initializeAPP(config)
    - const db = firebaseAPP.firestore();
    - const auth = firebase.auth();
    - export const {db,auth}

// Login.js
    - register
    - auth.createUserWithEmail()
    - import {Link,useHistory} from 'react-router-dom'
    - history.push('/')

    - login
    - signInWithEmailAndPassword

// App.js
    - To track the usersState we need useEffect, It triggers wen the app component loads same like componentDidiMount

    - useEffect(()=>{
        auth.onStateChanged(authUser => {
            if(authUser) {
                // store it in the reducer
            } else {
                // push to login screen 
                // store null in the reducer 
            }
        })
    },[])

    - handleAuthentication()

// Header
    <link to={!user && '/login'}> /// only if the user is null it shows the login

=========================================

// Deployment firebase process

    - npm i -g firebase-tools
    - firebase login
    - firebase init
        - Hosting
        - existing project
        - public directory ? build
        - singlePage ? Y
    - npm run build
    - firebase deploy

=========================================

/// DAY-4 ///

// STRIPE PAYMENT
    - npm i @stripe/stripe-js
    - npm i @stripe/react-stripe-js

+ APP.js
    - import {loadStripe} "@stripe/stripe-js"
    - import {Element} "@stripe/react-stripe-js"

    const promise = loadstripe('pk_test_51HVHHYKTcLtwblEUgaOifomOW8H77zJbyIdOwtBw5Rix2uWmuGOAAaj1Q2amuSwCL97r9et5hkS1q6G7F1X533JW008BGPN7S7');

    - wrap the checkout page with 
        + <Elements stripe={promise}>
            //our component
            </Element>

+ checkout.js
    - import {cardElement,useStripe,useElements} from '@stripe/react-stripe-js"

    - const stripe = useStripe();
    - const elements = useElements();

    - <form //handleSubmit>
        <cardElement //handleChange/>
      <form>

    - create two state ==> error , disabled

    - handleChange
        + setDisabled(event.empty)
        + setError(event.error ? event.error.message : "");

=================================== Cloud Functions
- to run google cloud function in local
    firebase emulators:start