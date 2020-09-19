import React from 'react'
import './CustomButton.style.css'

const CustomButton = ({children,...otherPropos}) => {

    return (
            <button className="custom-button" {...otherPropos}>
                {children}
            </button>
    )
}

export default CustomButton