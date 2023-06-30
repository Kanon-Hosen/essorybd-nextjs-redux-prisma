"use client";

import Link from "next/link";
import React, { useState } from "react";
import { BiSolidStar } from "react-icons/bi";

const ProductDetails = ({ params }) => {
    const [count, setCount] = useState(0);
  return (
    <div className="my-12 ">
      <div className="grid lg:grid-cols-2 gap-10 lg:px-24 px-6">
        <div></div>
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold text-slate-900">Asgaard sofa</h1>
          <p className="text-xl font-semibold text-neutral-700">5000 tk</p>
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
            <span className="text-neutral-600 text-sm ml-1">(10)</span>
                  </div>
                  <p className="text-base text-neutral-900">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi fugiat minus illo ipsa et blanditiis quo dolores totam dicta animi.</p>
                  <div className="flex flex-col gap-4 mt-2">
                      <p className="text-lg font-semibold text-neutral-700">Color</p>
                      <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-white border-2 cursor-pointer"></div>
                          <div className="w-10 h-10 rounded-full bg-black border-2 cursor-pointer"></div>
                          <div className="w-10 h-10 rounded-full bg-blue-500 border-2 cursor-pointer"></div>
                      </div>
                  </div>
                  <div className="flex items-center gap-8 mt-7">
                  <div className="px-4 py-3 border-2 rounded-xl text-xl font-semibold text-slate-900 border-neutral-900 grid grid-cols-3 gap-3 w-28 ">
                      <div className="cursor-pointer ">-</div>
                      <div>{count}</div>
                      <div className="cursor-pointer">+</div>
                      </div>
                      <Link href='/' className="bg-black px-9 py-4 text-white rounded-lg hover:bg-orange-500 transition-colors focus:bg-orange-500 border-none outline-none font-semibold">Add To Cart</Link>
                  </div>
                  <hr className="mt-6" />

                  <div className="w-82 flex flex-col gap-3 mt-6">
                      <div className="grid grid-cols-4 gap-2 ">
                          <p className="font-medium text-lg text-neutral-700 col-span-1">SKU</p>
                          <p className="font-medium text-lg text-neutral-700 w-8">:</p>
                          <p className="font-medium text-lg text-neutral-700 col-span-2">SS378</p>
                      </div>
                      <div className="grid grid-cols-4 gap-2 ">
                          <p className="font-medium text-lg text-neutral-700 col-span-1">Category</p>
                          <p className="font-medium text-lg text-neutral-700 w-8">:</p>
                          <p className="font-medium text-lg text-neutral-700 col-span-2">Sofas</p>
                      </div>
                      <div className="grid grid-cols-4 gap-2 ">
                          <p className="font-medium text-lg text-neutral-700 col-span-1">Tags</p>
                          <p className="font-medium text-lg text-neutral-700 w-8">:</p>
                          <p className="font-medium text-lg text-neutral-700 col-span-2" >Headphone, Earbuds </p>
                      </div>
                  </div>
        </div>
          </div>
          <hr className="mt-14" />
          <div className="lg:px-24 px-6">
              
          </div>
    </div>
  );
};

export default ProductDetails;
