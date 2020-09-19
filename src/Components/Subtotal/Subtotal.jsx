import React from 'react'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format'
import CustomButton from '../../ReusableComponents/Buttons/CustomButton.component'


function Subtotal({value}) {
    
   
    const total = value?.reduce(((accumulatedValue,currentValue)=>(accumulatedValue + currentValue.price )),0)
    
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
            <CustomButton type='submit'>Checkout</CustomButton>
        </div>
    )
}

export default Subtotal
