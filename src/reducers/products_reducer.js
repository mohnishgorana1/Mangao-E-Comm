import {
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_ERROR,
  GET_PRODUCTS_SUCCESS,
} from "../actions";

const products_reducer = (state, action) => {

  // GET_PRODUCTS_BEGIN
  if (action.type === GET_PRODUCTS_BEGIN) {
    return {
      ...state,
      products_loading: true,
    };
  }

  //   GET_PRODUCTS_SUCCESS
  if (action.type === GET_PRODUCTS_SUCCESS) {
    const featured_products = action.payload.filter(
      (product) => product.featured === true
    );
    return {
      ...state,
      products_loading: false,
      products: action.payload,
      featured_products
    };
  }

  //GET_PRODUCTS_ERROR
  if (action.type === GET_PRODUCTS_ERROR) {
    return {
      ...state,
      products_loading: false,
      products_error: true,
    };
  }
};

export default products_reducer;
