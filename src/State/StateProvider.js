import React, {createContext,useContext,useReducer} from 'react'

// create the data-layer
export const StateContext = createContext();

// this wraps our app and provide the dataLayer
export const StateProvider = ({reducer,initialState,children}) => (
    <StateContext.Provider value ={useReducer(reducer,initialState)}>
        {children}
    </StateContext.Provider>
)

// pull from dataLayer
export const useStateValue = () => useContext(StateContext);