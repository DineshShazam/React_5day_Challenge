import React from 'react'
import CustomButton from '../../ReusableComponents/Buttons/CustomButton.component'
import { useStateValue } from '../../State/StateProvider'
import './product.style.css'



const Prodcut = ({id,title,price,imageUrl,desc,rating}) => {

    const [state,dispatch] = useStateValue();

    const addCart = () => {
        console.log('add to cart method called')
        dispatch({
            type:'ADD_TO_CART',
            payload:{
                id:id,
                title:title,
                price:price,
                imageUrl:imageUrl,
                desc:desc,
            }
        })
    }

    return (
        <div className="product">

            <div className="product_info">

                <div className="product_image">
                    <img src={imageUrl} alt='ZeroToMastery' />
                </div>
                
                <div className="product_details">
                    <p className='title'>{title}</p>
                     <p className='product_price'>
                        <small>₹</small>
                        <strong>{price}</strong>
                     </p>
                     <div className="product_rating">
                         {
                             Array(rating).fill().map((_,i) => (
                                 <span className="fa fa-star checked"></span>
                             ))
                         }
                        {/* <span class="fa fa-star checked"></span> */}
                     </div>
                    <div className="description">{desc}</div>
                   
                </div>
            </div>
            <CustomButton type='submit' onClick={addCart}>Add To Cart</CustomButton>
        
        </div>
    )
}

export default Prodcut