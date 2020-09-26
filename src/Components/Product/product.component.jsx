import React from 'react'
import CustomButton from '../../ReusableComponents/Buttons/CustomButton.component'
import { useStateValue } from '../../State/StateProvider'
import './product.style.css'



const Prodcut = ({Pvalue:{id,title,price,imageUrl,desc,rating}}) => {

    // const {id,title,price,imageUrl,desc,rating} = Pvalue

    const [{Courses,userDetails},dispatch] = useStateValue();

    const addCart = () => {
       
        if(!userDetails) {
            alert('Please login and add the items');
            return;
        }

        const itemCheck = Courses.find(value =>value.id === id);

        

        if(itemCheck) {
            alert('Course has been already added to the cart');
            return;
        }

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
        <div className="animate__animated animate__flipInX product">

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
                    
                    <div className="prdct_button">
                        <CustomButton type='submit' onClick={addCart}>Add To Cart</CustomButton>
                        <CustomButton type='submit' >Buy Now</CustomButton>
                    </div>
                </div>
               
            </div>
            
        
        </div>
    )
}

export default Prodcut