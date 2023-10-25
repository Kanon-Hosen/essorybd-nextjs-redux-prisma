"use client";
import ProductCard from "@/components/Product/ProductCard";
import React from "react";
import { useSelector } from "react-redux";

const Wishlist = () => {
  const products = useSelector((state) => state?.wishlist?.products);
  console.log(products);
  return (
    <div>
      <div className="w-full h-96 flex items-center justify-center bg-orange-200">
        <h1 className="font-bold text-3xl uppercase">Wishlist</h1>
      </div>
          <div className="grid lg:grid-cols-4 gap-5 md:px-24 px-6 mt-10">
              {
                  products.map((product) => <ProductCard key={product?.id} product={product}/>)
              }
      </div>
    </div>
  );
};

export default Wishlist;
