import React, { useState } from 'react'
import './Login.css'

import logo from '../Header/logo_sdk.png'
import CustomButton from '../../ReusableComponents/Buttons/CustomButton.component'

import {auth,googleProvider} from '../../firebase/firebase'

import {useHistory,Link} from 'react-router-dom'


function Login() {

    const [userRegister,setUserRegister] = useState(false);

    const [email,setEmail] = useState('');
    const [password,setPassowrd] = useState('');

    const history = useHistory();

    const register = (e) => {

        e.preventDefault();
        if(email.length === 0 || password.length === 0){
            alert('Please enter the credentials');
            return;
        }

        auth.createUserWithEmailAndPassword(email,password).then(auth => {
            
            history.push('/')
        }).catch(err => {
            console.log(`register error ${err}`);
            alert(err);
            return;
        })
    }

    const login = (e) => {

        e.preventDefault() // stops refreshing the page after form submission
        if(email.length === 0 || password.length === 0){
            alert('Please enter the credentials');
            return;
        }

        auth.signInWithEmailAndPassword(email,password).then(auth => {
            if(auth) {
                
                history.push('/')
            } else {
                
                return;
            }
        }).catch(err => {
            console.log(`login error ${err}`);
            return;
        })
    }

     const google = (e) => {

         e.preventDefault();

         auth.signInWithPopup(googleProvider).then(auth => {
             
             if(!auth) {
                 return;
             }
             history.push('/');
         }).catch(err => {
             console.log(`google auth error`);
             alert(err);
         })
     }



    return (
       
           <div className="wrapper fadeInDown">
             <div id="formContent">
   
                <h2 className={userRegister ? "inactive underlineHover" : "active" } onClick={(e) => {setUserRegister(false)}}> Sign In </h2>
                <h2 className={userRegister ? "active" : "inactive underlineHover" } onClick={(e) => {setUserRegister(true)}}>Sign Up </h2>

                <Link to='/'>
                <div className="fadeIn first">
                
                <img src={logo} alt='SDK_LOGO' />
                
                </div>
                </Link>
   
                <form>
                    <input type="text" id="login" className="fadeIn second" name="email" placeholder="email" autoComplete="off"
                        value={email} onChange={(e) => {setEmail(e.target.value)}} />

                    <input type="password" id="password" className="fadeIn third" name="password" placeholder="password"
                        value={password} onChange={(e) => {setPassowrd(e.target.value)}} />

                        
                            {
                                userRegister ? 
                                <div className="register_button">
                                <CustomButton onClick={register}>Sign Up</CustomButton> 
                                </div>
                                :
                                <div className="button">
                                <CustomButton onClick={login}> SignIn</CustomButton>
                                <CustomButton onClick={google}> SignIn With Google</CustomButton>
                                </div>
                            }
                            
                      
                </form>

                </div>
            </div> 

    )

}

export default Login
