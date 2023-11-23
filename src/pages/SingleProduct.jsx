import React, { useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

import { useProductsContext } from "../context/products_context";

import { single_product_url as url } from "../utils/constants";
import { formatPrice } from "../utils/helpers";



function SingleProduct() {

  const {id} = useParams();
  const navigate = useNavigate();

  const {} = useProductsContext()

  return (
    <div>
      
    </div>
  )
}

export default SingleProduct