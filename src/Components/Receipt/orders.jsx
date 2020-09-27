/* eslint-disable react-hooks/exhaustive-deps */
import React,{useEffect, useState} from 'react'
import { db } from '../../firebase/firebase'
import { getTotal } from '../../Reducer/reducer'
import { useStateValue } from '../../State/StateProvider'
import './orders.css'


const Orders = () => {

    const [{userDetails,billingAddress}] = useStateValue();

    // const [billing,setBilling] =  useState([]);
    const [orders,SetOrders] = useState([]);

    const {fname,address,city,phone,acctName,zip} = billingAddress ;
  
    const today = new Date();
    const dd = today.getDate();
    const mm = today.getMonth()+1; 
    const yyyy = today.getFullYear();
    const tdy  = dd+'/'+mm+'/'+yyyy;

    // need to fetch the placed order and form the receipt

    useEffect(()=> {
      if(userDetails) {

        // db.collection('billingDetails').doc(userDetails?.uid)
        // .onSnapshot(snap => {
        //   setBilling(snap.map(val => (
        //     {
        //       data: val.data()
        //       // fname:val.fname,
        //       // acctName:val.acctName,
        //       // address:val.address,
        //       // city:val.city,
        //       // zip:val.zip,
        //       // phone:val.phone
        //     }
        //   )))
        // })

        db.collection('users').doc(userDetails?.uid)
          .collection('orders').onSnapshot(snap => {
            SetOrders(snap.docs.map(val => (
              {
                data:val.data()
              }
            )))
          })

      } else {
        // setBilling([]);
        SetOrders([]);
      }

   
    },[])

    console.log(orders);

    return (
      
        <div className="container bootstrap snippets bootdeys">
        <div className="row order_outline">
          <div className="col-sm-12">
                  <div className="panel panel-default invoice" id="invoice">
                  <div className="panel-body">
                    <div className="invoice-ribbon"><div className="ribbon-inner">PAID</div></div>
                    <div className="row">
        
                        {/* <div className="col-sm-6 top-left">
                            <i className="fa fa-rocket"></i>
                        </div> */}
        
                        <div className="col-sm-6 top-right">
                                <h3 className="marginright">INVOICE-1234578</h3>
                                <span className="marginright">{tdy}</span>
                        </div>
        
                    </div>
                    <hr/>
                    <div className="row">
        
                        <div className="col-xs-4 from">
                            <p className="lead marginbottom"><b>To :</b> {fname}</p> 
                            <p>{address}</p>
                            <p>{city}</p>
                            <p>{zip}</p>
                            <p>Phone: {phone}</p>
                            <p>{userDetails.email}</p>
                        </div>
        
                        <div className="col-xs-4 text-right payment-details">
                            <p className="lead marginbottom payment-info">Payment details</p>
                            <p>Date: {tdy}</p>
                            <p>Total Amount: {getTotal(orders.data?.Courses)}</p>
                            <p>Account Name: {acctName}</p>
                        </div>
        
                    </div>
        
                    <div className="row table-row">
                        <table className="table table-striped">
                          <thead>
                            <tr>
                              <th className="text-center" style={{width:'5%'}}>#</th>
                              <th style={{width:"50%"}}>Item</th>
                              <th className="text-right" style={{width:'15%'}}>Description</th>
                              <th className="text-right" style={{width:'15%'}}>Price</th>
                            </tr>
                          </thead>
                          <tbody>

                            
                              {
                                orders.data?.Courses.map(val => (
                                  <tr>
                                  <td className="text-center">{val.id}</td>
                                  <td className="text-right">{val.title}</td>
                                  <td className="text-right">{val.desc}</td>
                                  <td className="text-right">{val.price}</td>
                                  </tr>
                                ))
                              }

                            
                           </tbody>
                        </table>
        
                    </div>
        
                    <div className="row">
                    <div className="col-xs-6 margintop">
                        <p className="lead marginbottom">THANK YOU!</p>
        
                       
                    </div>
                    <div className="col-xs-6 text-right pull-right invoice-total">
                              <p>Subtotal : $1019</p>
                              <p>Total : $991 </p>
                    </div>
                    </div>
                  </div>
                </div>
            </div>
        </div>
        </div>

    )
}

export default Orders