"use client";

import React, { useEffect } from "react";
import ProductCard from "./ProductCard";
import Headphone from "../../images/headphone.jpeg";
import watch from "../../images/smart-watch.jpg";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "@/Redux/ProductSlice/manyProduct.slice";

const Product = () => {
  const dispatch = useDispatch();
  const { productsLoading, productsError, products } = useSelector((state) => {
    return state.allProducts;
  });
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  if (productsLoading) {
    return (
      <div className="mt-6 flex items-center w-full justify-center h-screen">
        <div aria-label="Loading..." role="status">
          <svg class="h-16 w-16 animate-spin" viewBox="3 3 18 18">
            <path
              class="fill-gray-200"
              d="M12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5ZM3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z"
            ></path>
            <path
              class="fill-orange-500"
              d="M16.9497 7.05015C14.2161 4.31648 9.78392 4.31648 7.05025 7.05015C6.65973 7.44067 6.02656 7.44067 5.63604 7.05015C5.24551 6.65962 5.24551 6.02646 5.63604 5.63593C9.15076 2.12121 14.8492 2.12121 18.364 5.63593C18.7545 6.02646 18.7545 6.65962 18.364 7.05015C17.9734 7.44067 17.3403 7.44067 16.9497 7.05015Z"
            ></path>
          </svg>
        </div>
      </div>
    );
  }

  if (productsError) {
    return (
      <div className="text-center font-semibold text-xl mt-8 text-slate-900">
        Something went wrong
      </div>
    );
  }

  return (
    <div>
      {products?.data && (
        <div className="my-24 lg:px-24 px-6">
          <h1 className="text-center text-slate-900 font-bold text-4xl">
            Our Products
          </h1>
          <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-6 mt-10">
            {products?.data.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Product;
