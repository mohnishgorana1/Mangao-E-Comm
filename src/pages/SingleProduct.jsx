/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useProductsContext } from "../context/products_context";

import { single_product_url as url } from "../utils/constants";
import { formatPrice } from "../utils/helpers";
import { Stars, AddToCart, ProductImages } from "../components/";
import { FaCheck } from "react-icons/fa";

function SingleProduct() {
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    single_product_loading: loading,
    single_product_error: error,
    single_product: product,
    fetchSingleProduct,
  } = useProductsContext();

  const {
    name, price, description, stock, stars, reviews, id: sku, company, images, colors,
  } = product; // from product context
  
  useEffect(() => {
    fetchSingleProduct(`${url}${id}`);
  }, [id]);

  console.log("SINGLE PRODUCT", product);

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        navigate("/");
      }, 4000);
    }
  }, [error]);

  if (loading) {
    return <div className="loading-spinner"></div>;
  }
  if (error) {
    return (
      <div className="text-xl  sm:text-2xl">Error fetching product....</div>
    );
  }

  return (
    <div className="flex flex-col gap-y-5 h-screen">
      <Link to={"/products"} className="btn-sm">
        back to products
      </Link>
      <div className="w-full h-full px-2 sm:px-0 flex flex-col gap-4 sm:flex-row items-center sm:items-start justify-between ">
        <ProductImages images={images} />
        <section className="sm:w-[65%]  h-full px-4 flex flex-col  gap-y-2 sm:gap-y-6 ">
          <h2 className=" text-2xl sm:text-4xl text-primary tracking-widest  w-80 capitalize font-bold">
            {name}
          </h2>
          <Stars stars={stars} reviews={reviews} />
          <h5 className="text-xl text-accent ">{formatPrice(price)}</h5>
          <p className="text-sm sm:text-md tracking-wider">{description}</p>
          <p className="">
            <span className="text-secondary">Available : </span>
            {stock > 0 ? "In stock" : "out of stock"}
          </p>
          <p className="info">
            <span className="text-secondary">SKU : </span>
            {sku}
          </p>
          <p className="">
            <span className="text-secondary">Brand : </span>
            {company}
          </p>
          
          {stock > 0 && <AddToCart product={product} />}
        </section>
      </div>
    </div>
  );
}

export default SingleProduct;
