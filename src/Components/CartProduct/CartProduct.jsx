import React, {forwardRef} from 'react'
import CustomButton from '../../ReusableComponents/Buttons/CustomButton.component'
import { useStateValue } from '../../State/StateProvider'
import './CartProduct.css'


const CartProduct = forwardRef(({value:{id,imageUrl,title,price,desc},hideButton},ref) => {
    
    const [,dispatch] = useStateValue();

    const removeItem = () => {

        dispatch({
            type:'REMOVE_ITEM',
            payload:id 
        })

    }

    return (
        
        <div ref={ref} className='checkout_product'>
        
            <img src={imageUrl} alt="item" className="checkoutProduct_image"/>
        
            <div className="checkoutProduct_info">
                <p className="checkoutProduct_title">{title}</p>
                <p className="checkoutProduct_price">
                    <small>₹</small>
                    <strong>{price}</strong>
                </p>
                <p className="description">{desc}</p>
                <br/>
                {
                    hideButton ?
                    <div></div> : 
                    <CustomButton type='submit' onClick={removeItem}>Remove</CustomButton>
                   
                }
               
            </div>
            
        </div>
        
    )
})

export default CartProduct
