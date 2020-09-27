import Product_Data from '../ProductData/productData'

export const initialState = {
    Courses:[],
    userDetails:null,
    billingAddress:null,
    Products:Product_Data
}


export const getTotal = (value) => {
    const total = value?.reduce(((accumulatedValue,currentValue)=>(accumulatedValue + currentValue.price )),0);

    return total
}

const reducer = (state,action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return {
                ...state,
                Courses: [...state.Courses,action.payload]
            }
        
        case 'REMOVE_ITEM' :
            return {
                ...state,
                Courses: state.Courses.filter(item => item.id !== action.payload)
            }

        case 'ADD_USER' :
            return {
                ...state,
                userDetails: action.payload
            }

        case 'CLEAR_ITEM' :
            return {
                ...state,
                Courses: action.payload
            }

        case 'ADD_BILLING_INFO' :
            return {
                ...state,
                billingAddress: action.payload
            }
        
        case 'EMPTY_BASKET' : 
            return {
                ...state,
                Courses: []
            }
    
        default:
            return state;
    }
}

export default reducer