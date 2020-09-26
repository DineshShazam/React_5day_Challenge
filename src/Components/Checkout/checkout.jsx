import React, { useEffect, useState } from 'react'
import CustomButton from '../../ReusableComponents/Buttons/CustomButton.component'
import './checkout.css'
import {CardElement,useElements,useStripe} from '@stripe/react-stripe-js'
import { useStateValue } from '../../State/StateProvider'
import axios from '../../axios/axios'
import {useHistory} from 'react-router-dom'
import { getTotal } from '../../Reducer/reducer'


const Checkout = () => {

    const [{Courses},dispatch] = useStateValue();
    const stripe = useStripe();
    const elements = useElements();

    const [succeeded,setSucceeded] = useState(null);
    const [processing,setProcessing] = useState("");
    const [error,setError] = useState(null);
    const [disabled,setDisabled] = useState(true);
    const [clientSecret,setClientSecret] = useState(true); 

    // billing address
    const [fname,setFname] = useState('');
    const [address,setAddress] = useState('');
    const [city,setCity] = useState('');
    const [state,setState] = useState('');
    const [zip,setZip] = useState('');
    const [acctName,setAcctname] = useState('');
    const [phone,setPhone] = useState('');

    const history = useHistory();

    useEffect(() => {
         // need to generate secret key for each user and their payment
         const getClientSecret = async () => {
           const response = await axios({
             method: 'post',
             url : `/payments/create?total=${getTotal(Courses) * 100}`
           })

           setClientSecret(response.data.clientSecret);
         }

         getClientSecret();
    },[Courses])

    const handleSubmit = async (e) => {
      e.preventDefault();

      if(fname && address && phone && acctName && address) {

        dispatch({
          type:'ADD_BILLING_INFO',
          payload: {fname,address,city,state,zip,phone,acctName}
        })
  
        // this processing prevents from hitting the req multiple times
        setProcessing(true);
  
         await stripe.confirmCardPayment(clientSecret ,{
          payment_method:{
            card : elements.getElement(CardElement)
          }
        }).then(({paymentIntent}) => {
          // paymentIntent means paymentConformation
            console.log(paymentIntent);
          setSucceeded(true);
          setError(null)
          setProcessing(false)
  
          history.replace('/orders');
        }).catch(err => {
          console.log('payment failed',err);
        })

      } else {
        alert('Please fill out the required fields')
      }

       
    }

    const handleChange = (e) => {
      setDisabled(e.empty);
      setError(e.error ? e.error.message : "");
    }

    return (

        <div className="row">
  <div className="col-75">
    <div className="container">
      <form onSubmit={handleSubmit}>
      
        <div className="row">
          <div className="col-50">
            <h3>Billing Address</h3>
            <label for="fname"><i className="fa fa-user"></i> Full Name</label>
            <input type="text" value={fname} onChange={(e)=>{setFname(e.target.value)}} id="fname" name="firstname" placeholder="John M. Doe" />
           
            <label for="adr"><i className="fa fa-address-card-o"></i> Address</label>
            <input type="text" value={address} onChange={(e)=>{setAddress(e.target.value)}} id="adr" name="address" placeholder="542 W. 15th Street"/>

            <label for="city"><i className="fa fa-institution"></i> City</label>
            <input type="text" value={city} onChange={(e)=>{setCity(e.target.value)}} id="city" name="city" placeholder="New York"/>

            <label for="phone"> Phone Number</label>
            <input type="text" value={phone} onChange={(e)=>{setPhone(e.target.value)}} id="phone" name="phone" placeholder="+91"/>

            <div className="row">
              <div className="col-50">
                <label for="state">State</label>
                <input type="text" value={state} onChange={(e)=>{setState(e.target.value)}} id="state" name="state" placeholder="NY"/>
              </div>
              <div className="col-50">
                <label for="zip">Zip</label>
                <input type="text" value={zip} onChange={(e)=>{setZip(e.target.value)}} id="zip" name="zip" placeholder="10001"/>
              </div>
            </div>
          </div>

          <div className="col-50">
            <h3>Payment</h3>
            <label for="fname">Accepted Cards</label>
            <div className="icon-container">
              <i className="fa fa-cc-visa"></i>
              <i className="fa fa-cc-amex"></i>
              <i className="fa fa-cc-mastercard"></i>
              <i className="fa fa-cc-discover"></i>
            </div>
            <label for="cname">Name on Card</label>
            <input type="text" value={acctName} onChange={(e)=>{setAcctname(e.target.value)}} id="cname" name="cardname" placeholder="John More Doe" autoComplete='off'/>

            <CardElement onChange={handleChange} />
            {/* <label for="ccnum">Credit card number</label>
            <input type="text" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444"/>
            <label for="expmonth">Exp Month</label>
            <input type="text" id="expmonth" name="expmonth" placeholder="September"/>
            <div className="row">
              <div className="col-50">
                <label for="expyear">Exp Year</label>
                <input type="text" id="expyear" name="expyear" placeholder="2018"/>
              </div>
              <div className="col-50">
                <label for="cvv">CVV</label>
                <input type="text" id="cvv" name="cvv" placeholder="352"/>
              </div>
            </div> */}
          </div>
          
        </div>
        {/* <label>
          <input type="checkbox" checked="checked" name="sameadr"/> Shipping address same as billing
        </label> */}
        <CustomButton disabled={processing || disabled || succeeded} type='submit' className='btns'>
          <span>
            {processing ? <p>processing</p> : "Continue to checkout" }
          </span>

        </CustomButton>
        {error && <div>error</div> }
        {/* <input type="submit" value="Continue to checkout" className="btns"/> */}
      </form>
    </div>
  </div>
  <div className="col-25">
    <div className="container">
      <h4>Cart <span className="price"><i className="fa fa-shopping-cart"></i> <b>{Courses.length}</b></span></h4>

      <div className="orderlist">
        {
            Courses.map(val => (
                <p><b>{val.title} <span className="price">₹ {val.price}</span></b></p>
            ))
        }


      </div>
      
      <hr/>
      <p><b>Total <span className="price">₹ {getTotal(Courses)}</span></b></p>
    </div>
  </div>
</div>

  )
}

export default Checkout



        