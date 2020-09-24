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

