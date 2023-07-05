"use client";

import Image from "next/image";
import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import headphone from '../../images/headphone.jpeg'
import {IoCloseCircle} from 'react-icons/io5'
const CartSidebar = ({setCartToggle, cartToggle}) => {
  return (
    <div className="w-[420px] h-screen bg-white shadow-md px-6 py-8 relative">
      <div className="flex items-center justify-between">
        <h1 className="text-slate-900 text-2xl font-semibold">Shopping Cart</h1>
        <div onClick={()=>setCartToggle(!cartToggle)} className="text-2xl text-neutral-700 cursor-pointer">
          <AiOutlineCloseCircle></AiOutlineCloseCircle>
        </div>
          </div>
          <hr className="mt-3" /> 
          <div className="mt-4 flex items-center justify-between gap-4">
              <Image className="border" src={headphone} width={105} height={105} alt="" />
              <div className="flex flex-col gap-2">
                  <p className="font-semibold text-lg text-slate-900">New Headphone</p>
                  <div className="flex items-center gap-4">
                      <select name="" id="" className="border py-1 px-3">
                          <option value="">1</option>
                          <option value="">2</option>
                          <option value="">3</option>
                      </select>
                      <p className="text-orange-500 text-base">500 tk</p>
                  </div>
              </div>
              <div className="text-2xl text-neutral-700 cursor-pointer">
          <IoCloseCircle></IoCloseCircle>
        </div>
          </div>
          <div className="mt-4 flex items-center justify-between gap-4">
              <Image className="border" src={headphone} width={105} height={105} alt="" />
              <div className="flex flex-col gap-2">
                  <p className="font-semibold text-lg text-slate-900">New Headphone</p>
                  <div className="flex items-center gap-4">
                      <select name="" id="" className="border py-1 px-3">
                          <option value="">1</option>
                          <option value="">2</option>
                          <option value="">3</option>
                      </select>
                      <p className="text-orange-500 text-base">500 tk</p>
                  </div>
              </div>
              <div className="text-2xl text-neutral-700 cursor-pointer">
          <IoCloseCircle></IoCloseCircle>
        </div>
          </div>

          {/* cart bottom */}

          <div className="absolute bottom-0 left-0 w-full px-6 pb-8">
              <div className="flex items-center justify-between ">
                  <h1 className="text-slate-900 tex-xl ">Subtotal</h1>
                  <p className="text-orange-500 font-medium ">5050 tk</p>
              </div>
              <hr className="my-4" />
              <div className="flex items-center justify-center gap-8">
                  <button className="border-2 border-neutral-700 px-7 py-2 rounded-full hover:bg-black hover:text-white transition-colors hover:border-black">Cart</button>
                  <button className="bg-black border-none text-white hover:bg-orange-500 transition-colors  px-7 py-2 rounded-full">Checkout</button>
              </div>
          </div>
    </div>
  );
};

export default CartSidebar;
