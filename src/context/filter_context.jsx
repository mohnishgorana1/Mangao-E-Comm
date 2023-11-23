import React, { createContext, useContext, useEffect, useReducer } from "react";

import {
  LOAD_PRODUCTS,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from "../actions";
import { useProductsContext } from "./products_context";
import reducer from "../reducers/filter_reducer";

const initialState = {
    
  filtered_products: [],
  all_products: [],
  sort: "price-lowest",

  filters: {
    text: "",
    category: "all",
    company: "all",
    color: "all",
    min_price: 0,
    max_price: 0,
    price: 0,
    shipping: false,
  },
};

const FilterContext = React.createContext();

export const FilterProvider = ({ children }) => {
  const { products } = useProductsContext();
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({
      type: LOAD_PRODUCTS,
      payload: products,
    });
  }, [products]);


  useEffect(() => {
    dispatch({
      type: FILTER_PRODUCTS,
    });
    dispatch({
      type: SORT_PRODUCTS,
    });
  }, [state.filters, state.sort]);



  const clearFilters = () => {
    dispatch({
        type:CLEAR_FILTERS
    })
  }

  const updateSort = (e) => {
    dispatch({
      type: UPDATE_SORT,
      payload: e.target.value,
    });
  };

  const updateFilters = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    console.log(name, value);
    
    if (name === "category") {
      value = e.target.textContent;
    }
    if (name === "color") {
      value = e.target.dataset.color;
    }
    if (name === "price") {
      value = Number(value);
    }
    if (name === "shipping") {
      value = e.target.checked;
    }

    dispatch({
        type: UPDATE_FILTERS,
        payload: {name, value}
    })
  };







  return (
    <FilterContext.Provider
      value={{
        ...state,
        clearFilters,
        updateFilters,
        updateSort
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};
