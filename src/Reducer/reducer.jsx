import Product_Data from '../ProductData/productData'

export const initialState = {
    Courses:[],
    userDetails:null,
    Products:Product_Data
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
    
        default:
            return state;
    }
}

export default reducer