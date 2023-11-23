import {
  LOAD_PRODUCTS,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from "../actions";

const filter_reducer = (state, action) => {
  //* reducers

  // LOAD_PRODUCTS
  if (action.type === LOAD_PRODUCTS) {
    //find all price
    let maxPrice = action.payload.map((p) => p.price);

    //get the maximum price
    maxPrice = Math.max(...maxPrice);

    return {
      ...state,
      all_products: [...action.payload],
      filtered_products: [...action.payload], // filtered products bhi vhi sare products ku ki initiall ysare producst load honge
      filters: {
        ...state.filters,
        max_Price: maxPrice,
        price: maxPrice,
      },
    };
  }

  // pehle update sort hoga fir sort_products
  if (action.type == UPDATE_SORT) {
    return {
      ...state,
      sort: action.payload,  
    };
  }

  if (action.type === SORT_PRODUCTS) {
    const { sort, filtered_products } = state;

    let tempProducts = [...filtered_products];

    // SORTED_PRODUCTS ===> TEMP_PRODUCTS ===> FILTERED_PRODUCTS

    if (sort === "price-lowest") {
      tempProducts = tempProducts.sort((a, b) => a.price - b.price);
    }
    if (sort === "price-highest") {
      tempProducts = tempProducts.sort((a, b) => b.price - a.price);
    }
    if (sort === "name-a") {
      tempProducts = filtered_products.sort((a, b) => {
        return a.name.localeCompare(b.name);
      });
    }
    if (sort === "name-z") {
      tempProducts = filtered_products.sort((a, b) => {
        return b.name.localeCompare(a.name);
      });
    }

    return {
      ...state,
      filtered_products: tempProducts,
    };
  }

  if (action.type === UPDATE_FILTERS) {
    const { name, value } = action.payload;
    return {
      ...state,
      filters: {
        ...state.filters,
        [name]: value,
      },
    };
  }

  if (action.type === FILTER_PRODUCTS) {
    const { all_products } = state;
    const { text, category, company, color, price, shipping } = state.filters;

    let tempProducts = [...all_products];

    // searched product
    if (text) {
      tempProducts = tempProducts.filter((product) =>
        product.name.toLowerCase().startsWith(text)
      );
    }

    if (category != "all") {
      tempProducts = tempProducts.filter(
        (product) => product.category === category
      );
    }

    if (company != "all") {
      tempProducts = tempProducts.filter(
        (product) => product.company === company
      );
    }

    if (color !== "all") {
      tempProducts = tempProducts.filter((product) => {
        return product.colors.find((c) => c === color);
      });
    } 
    
    // filter by price
    tempProducts = tempProducts.filter((product) => product.price <= price);

    // filter by shipping
    if (shipping) {
      tempProducts = tempProducts.filter(
        (product) => product.shipping === true
      );
    }

    return {
      ...state,
      filtered_products:tempProducts
    };
  }

  if (action.type === CLEAR_FILTERS) {
    return{
        ...state,
        filters: {
            ...state.filters,
            text: "",
            category: "all",
            company: "all",
            color: "all",
            price: state.filters.max_price,
            shipping: false,
          },
    }
  }
};

export default filter_reducer;
