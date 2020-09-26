import React from 'react'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format'
import CustomButton from '../../ReusableComponents/Buttons/CustomButton.component'
import { useStateValue } from '../../State/StateProvider'
import {useHistory} from 'react-router-dom'

function Subtotal({value}) {
   
    const total = value?.reduce(((accumulatedValue,currentValue)=>(accumulatedValue + currentValue.price )),0)
    
    const [{Courses},dispatch] = useStateValue();

    const history = useHistory();

    const ClearItem = () => {
        
        if(Courses.length !== 0) {
            dispatch({
                type:'CLEAR_ITEM',
                payload: []
            })
        } else {
            
            alert('No Items available to clear');
        }
        
    }

    return (
        <div className='subtotal'>
            <CurrencyFormat 
                renderText = { (total) => (
                    <>
                        <p>
                            Subtotal ({value?.length} courses):

                            <strong>
                                {
                                   total
                                }
                            </strong>
                        </p>
                    </>
                )}

            decimalScale={2}
            value={total}
            displayType={'text'}
            thousandSeparator={true}
            prefix={'₹ '}
            />
            <div className="chk_button">
                <CustomButton type='submit' onClick={()=>{
                    Courses.length !== 0 ?
                    history.push('/checkout') :
                    alert('Empty Cart')
                    }}>Checkout</CustomButton>

                <CustomButton type='submit' onClick={ClearItem}>Clear Cart</CustomButton>
            </div>
        </div>
    )
}

export default Subtotal
