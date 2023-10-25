"use client";

import { calculateAll, removeOneCart } from "@/Redux/cart/cartSlice";
import Image from "next/image";
import { useEffect, useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { IoCloseCircle } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
const CartSidebar = ({ setCartToggle, cartToggle }) => {
  const dispatch = useDispatch();
  const { products, total, isAdd } = useSelector((cart) => {
    return cart.cartR;
  });

  useEffect(() => {
    dispatch(calculateAll());
  }, [dispatch, isAdd]);

  const handleRemove = (id) => {
    dispatch(removeOneCart(id));
  };

  return (
    <div className="md:w-[420px] w-[100vw] z-50 h-[100vh] bg-white shadow-md px-6 py-8 relative ">
      <div className="flex items-center justify-between h-[9vh]">
        <h1 className="text-slate-900 text-2xl font-semibold">Shopping Cart</h1>
        <div
          onClick={() => setCartToggle(!cartToggle)}
          className="text-2xl text-neutral-700 cursor-pointer"
        >
          <AiOutlineCloseCircle></AiOutlineCloseCircle>
        </div>
      </div>
      <hr className="mt-3" />
      {products?.length < 1 && (
        <div className="flex items-center h-full font-semibold justify-center text-xl text-slate-900">
          No Product Added
        </div>
      )}
      <div className="h-[60vh] overflow-y-auto scrollbar-none">
        {products && (
          <div className="flex flex-col gap-4">
            {products?.map((product) => {
              return (
                <div
                  className="mt-4 flex items-center justify-between gap-4 "
                  key={product?.id}
                >
                  <Image
                    className="border"
                    src={product?.image}
                    width={105}
                    height={105}
                    alt=""
                  />
                  <div className="flex flex-col gap-2">
                    <p className="font-semibold text-lg text-slate-900">
                      {product?.name}
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="border py-1 px-3">
                        {product?.quantity}
                      </div>
                      <p className="text-orange-500 text-base">
                        {product?.price * product?.quantity}
                      </p>
                    </div>
                  </div>
                  <div
                    onClick={() => handleRemove(product?.id)}
                    className="text-2xl text-neutral-700 cursor-pointer"
                  >
                    <IoCloseCircle></IoCloseCircle>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
      {/* cart bottom */}

      {products.length > 0 && (
        <div className="fixed bottom-0 z-40 h-[19vh] bg-white border-t left-0 w-full px-6 pb-8">
          <div className="flex items-center justify-between ">
            <h1 className="text-slate-900 tex-xl ">Subtotal</h1>
            <div className="text-orange-500 font-medium ">{total} tk</div>
          </div>
          <hr className="my-4" />
          <div className="flex items-center justify-center gap-8">
            <button className="border-2 border-neutral-700 px-7 py-2 rounded-full hover:bg-black hover:text-white transition-colors hover:border-black">
              Cart
            </button>
            <button className="bg-black border-none text-white hover:bg-orange-500 transition-colors  px-7 py-2 rounded-full">
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartSidebar;
