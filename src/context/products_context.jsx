import axios from "axios";
import React, { useReducer, useContext, useEffect } from "react";

import reducer from "../reducers/products_reducer";

import { products_url } from "../utils/constants";

import {
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_ERROR,
  GET_PRODUCTS_SUCCESS,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
} from "../actions";

const initialState = {
  products: [],
  products_loading: false,
  products_error: false,

  featured_products: [],
  single_product_loading: false,
  single_product_error: false,
  single_product: [],
};

const ProductsContext = React.createContext();

export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  //* functions for reducers

  const fetchProducts = async (products_url) => {
    dispatch({
      type: GET_PRODUCTS_BEGIN,
    });

    try {
      const response = await axios.get(products_url);
      const products = response.data;
      console.log("PRODUCTS", products);
      dispatch({
        type: GET_PRODUCTS_SUCCESS,
        payload: products,
      });
    } catch (error) {
      dispatch({
        type: GET_PRODUCTS_ERROR,
      });
    }
  };

  const fetchSingleProduct = async (products_url) => {
    dispatch({
      type: GET_SINGLE_PRODUCT_BEGIN,
    });
    try {
      const response = await axios.get(products_url);
      const singleProduct = response.data;
      dispatch({
        type: GET_SINGLE_PRODUCT_SUCCESS,
        payload: singleProduct,
      });
    } catch (error) {
      dispatch({ type: GET_SINGLE_PRODUCT_ERROR });
    }
  };

  useEffect(() => {
    fetchProducts(products_url);
  }, []);

  return (
    <ProductsContext.Provider
      value={{
        ...state,
        fetchSingleProduct
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductsContext = () => {
  return useContext(ProductsContext);
};
