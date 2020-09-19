export const initialState = {
    Courses:[]
}

const reducer = (state,action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return {
                ...state,
                Courses: [...state.Courses,action.payload]
            }
            
    
        default:
            return state;
    }
}

export default reducer