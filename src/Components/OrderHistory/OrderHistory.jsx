import React, {useEffect,useState} from 'react'
import { db } from '../../firebase/firebase'
import { useStateValue } from '../../State/StateProvider'
// import CartProduct from '../CartProduct/CartProduct'
import moment from 'moment';
import './OrderHistory.css'
import CurrencyFormat from 'react-currency-format';


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


    console.log(orderHistory);

    return (
        <div className="container bootdey">
<div className="panel panel-default panel-order">


<div className="panel-body">

  2{
      orderHistory?.map(order => (
          order.data?.Courses.map(val => (

            <div className="row">
            <div className="col-md-1"><img src={val.imageUrl} alt='orderImage' className="media-object img-thumbnail"/></div>
            <div className="col-md-11 content">
              <div className="row placed_details">
                <div className="col-md-12 placed_title">
                  <span><strong>Order name</strong></span> <span className="label label-info">{val.title}</span><br/>
                  <strong>cost: </strong>₹{val.price} <br/>
                </div> 
                <div className="col-md-12 placed_details">
                <br/>
                 
                </div>
              </div>
              <div className="placed_by"><strong>order made on: </strong> {moment.unix(order.data?.created).format("MMMM Do YYYY, h:mma")} <strong>by</strong> <span>{userDetails?.email} </span></div>
            </div>

            <CurrencyFormat
                renderText={(value) => (
                <h3 className="order__total">Order Total: {value}</h3>
                )}
                decimalScale={2}
                value={order.data.amount / 100}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"₹"}
            /> 
          </div>

          ))

          
      ))

      
  }

</div>
{/* <div className="panel-footer">Put here some note for example: bootdey si a gallery of free bootstrap snippets bootdeys</div> */}
</div>  



</div>
  
    )
}


export default OrderHistory




