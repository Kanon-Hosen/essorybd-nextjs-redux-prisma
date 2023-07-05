"use client";
import { addToCart, removeAllCart, removeToCart } from "@/Redux/cart/cartSlice";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BiSolidStar } from "react-icons/bi";
import { BsFillCartPlusFill, BsHeart } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";

const ProductCard = ({ product}) => {

  const cart = useSelector(cart => {
    return cart.cartR
  })
  console.log("🚀 ~ file: ProductCard.jsx:13 ~ ProductCard ~ cart:", cart)
  const dispatch = useDispatch();

  return (
    <div
      className="bg-[#F5F5F5] z-0 relative group shadow-md border-2 border-gray-100"
    >
      <div className="w-full overflow-hidden relative">
        <Image
          className=" group-hover:scale-105 transition-transform duration-300 bg-[#F5F5F5]"
          src={product.image}
          width={500}
          height={500}
          alt={product?.name}
        />
        <div className="absolute translate-y-full group-hover:translate-y-0 duration-300 z-20  top-0 left-0 w-full h-full flex gap-6 bg-black bg-opacity-40 items-center justify-center">
          {/* <button className="bg-orange-500 border-none outline-none hover:bg-black transition-all text-white px-8 py-3">Add To Cart</button> */}
          <button onClick={()=>{dispatch(addToCart({name:product?.name, id:product.id, price:product.price, image:product.image}))}} className="bg-white text-black font-semibold focus:text-white text-2xl p-3 hover:bg-orange-500 hover:text-white transition-opacity rounded-full focus:bg-orange-500">
            <BsFillCartPlusFill />
          </button>
          <button onClick={() => { dispatch(removeAllCart())}} className="bg-white focus:bg-orange-500 focus:text-white  text-black font-semibold text-2xl p-3 hover:bg-orange-500 hover:text-white transition-opacity rounded-full ">
            <BsHeart />
          </button>
        </div>
      </div>
      <Link
      href={`/product/${product?.name}`} className="px-3 py-3 flex flex-col gap-2">
        <h1 className="text-lg font-semibold text-neutral-900">{product?.name}</h1>
        <div className="flex items-center gap-8">
          <p className="inline-block text-slate-900 font-bold">{product?.price} tk</p>
          <span className="inline-block line-through text-neutral-600">
            {" "}
            {Number(product.price) / 100 * Number(product?.discount)} tk
          </span>
        </div>
        <div className=" flex gap-1 items-center">
          <div className="text-base text-orange-500">
            <BiSolidStar />
          </div>
          <div className="text-base text-orange-500">
            <BiSolidStar />
          </div>
          <div className="text-base text-orange-500">
            <BiSolidStar />
          </div>
          <div className="text-base text-orange-500">
            <BiSolidStar />
          </div>
          <div className="text-base text-orange-500">
            <BiSolidStar />
          </div>
          <span className="text-neutral-600 text-sm ml-1">{product.totalReview}</span>
        </div>
      </Link>
      <div className="w-14 h-14 absolute top-3 z-30 right-3 flex items-center justify-center rounded-full bg-orange-500 text-white font-semibold">
        <p>- {product.discount}%</p>
      </div>
    </div>
  );
};

export default ProductCard;
