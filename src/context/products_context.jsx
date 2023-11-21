import axios from "axios";
import React , { useReducer, useContext, useEffect} from "react";

import reducer  from "../reducers/products_reducer";

import {
    GET_PRODUCTS_BEGIN
} from '../actions'


const initialState = {
    products: [],
}

const ProductsContext = React.createContext()

export const ProductsProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <ProductsContext.Provider 
            value={{
                ...state
            }}
        >
            {children}
        </ProductsContext.Provider>
    )
}

export const useProductsContext = () => {
    return useContext(ProductsContext)
}

