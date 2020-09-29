import React, {useEffect,useState} from 'react'
import { db } from '../../firebase/firebase'
import { useStateValue } from '../../State/StateProvider'
// import CartProduct from '../CartProduct/CartProduct'
import Order from './order'
import './OrderHistory.css'



const OrderHistory = () => {

    const [orderHistory,setorderHistory] = useState([]);
    const [{userDetails}] = useStateValue();


    useEffect(() => {

        if(userDetails) {
            db.collection('users').doc(userDetails?.uid)
            .collection('orders').orderBy('created','desc')
            .onSnapshot(snap => {
                setorderHistory(snap.docs.map(value => ({
                    data: value.data()
                })))   
            })
        } else {
            setorderHistory([]);
            alert('Please Login to check the orderHistroy');
        }

    },[userDetails])


    return (
        
      <div className='orders'>
      <h1>Your Orders</h1>

      <div className='orders__order'>
          {orderHistory?.map(order => (
              <Order order={order} />
          ))}
      </div>
  </div>
          
      )

      
  }



export default OrderHistory




