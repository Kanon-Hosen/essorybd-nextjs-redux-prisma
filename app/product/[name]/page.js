"use client";

import { decrement, increment } from "@/Redux/counterSlice/CounterSlice";
import ProductCard from "@/components/Product/ProductCard";
import Link from "next/link";
import React, { useState } from "react";
import { BiSolidStar } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import Headphone from '../../../images/headphone.jpeg'
import watch from '../../../images/smart-watch.jpg'
import Image from "next/image";
const ProductDetails = ({ params }) => {
  const [text, setText] = useState("Description");
  const state = useSelector((state) => state?.counter?.count);
  const dispatch = useDispatch();
  return (
    <div className="my-12 ">
      <div className="grid lg:grid-cols-2 gap-10 lg:px-24 px-6">
              <div className="flex gap-8">
                  <div className="flex flex-col gap-5">
                      <Image className="border-2" src={Headphone} width={100} height={100} alt=""/>
                      <Image className="border-2" src={Headphone} width={100} height={100} alt=""/>
                      <Image className="border-2" src={Headphone} width={100} height={100} alt=""/>
                  </div>
                  <div className="">
                      <Image className="border-2" src={Headphone} width={500} height={300} alt="" />
                  </div>
        </div>
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
          <p className="text-base text-neutral-900">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
            fugiat minus illo ipsa et blanditiis quo dolores totam dicta animi.
          </p>
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
              <div
                className="cursor-pointer "
                onClick={() => {
                  dispatch(decrement());
                }}
              >
                -
              </div>
              <div>{state}</div>
              <div
                className="cursor-pointer"
                onClick={() => {
                  dispatch(increment(20));
                }}
              >
                +
              </div>
            </div>
            <Link
              href="/"
              className="bg-black px-9 py-4 text-white rounded-lg hover:bg-orange-500 transition-colors focus:bg-orange-500 border-none outline-none font-semibold"
            >
              Add To Cart
            </Link>
          </div>
          <hr className="mt-6" />

          <div className="w-82 flex flex-col gap-3 mt-6">
            <div className="grid grid-cols-4 gap-2 ">
              <p className="font-medium text-lg text-neutral-700 col-span-1">
                SKU
              </p>
              <p className="font-medium text-lg text-neutral-700 w-8">:</p>
              <p className="font-medium text-lg text-neutral-700 col-span-2">
                SS378
              </p>
            </div>
            <div className="grid grid-cols-4 gap-2 ">
              <p className="font-medium text-lg text-neutral-700 col-span-1">
                Category
              </p>
              <p className="font-medium text-lg text-neutral-700 w-8">:</p>
              <p className="font-medium text-lg text-neutral-700 col-span-2">
                Sofas
              </p>
            </div>
            <div className="grid grid-cols-4 gap-2 ">
              <p className="font-medium text-lg text-neutral-700 col-span-1">
                Tags
              </p>
              <p className="font-medium text-lg text-neutral-700 w-8">:</p>
              <p className="font-medium text-lg text-neutral-700 col-span-2">
                Headphone, Earbuds{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <hr className="mt-14" />
      <div className="lg:px-24 px-6 my-16">
        <div className="flex items-center text-lg text-neutral-700 justify-center gap-6">
          <p
            className="hover:text-neutral-950 font-semibold cursor-pointer"
            onClick={(e) => setText(e.target.innerText)}
          >
            Description
          </p>
          <p
            onClick={(e) => setText(e.target.innerText)}
            className="hover:text-neutral-950 font-semibold cursor-pointer"
          >
            All Features
          </p>
          <p
            onClick={(e) => setText(e.target.innerText)}
            className="hover:text-neutral-950 font-semibold cursor-pointer"
          >
            Reviews
          </p>
        </div>

        <div className="mt-4">
          {text === "Description" && <div>Description</div>}
          {text === "All Features" && <div>All Features</div>}
          {text === "Reviews" && <div>Reviews</div>}
        </div>

              <div className="mt-16">
                  <h1 className="text-center font-bold text-slate-900 text-4xl">Related Products</h1>
                  <div className="grid grid-cols-4 gap-6 mt-6">
                  <ProductCard name="New Wireless Headphone" price="400" discountPrice="500" image={Headphone} />
                <ProductCard name="New Smart watch" price="1400" discountPrice="1600" image={watch} />
                <ProductCard name="New Smart watch" price="1400" discountPrice="1600" image={Headphone} />
                <ProductCard name="New Smart watch" price="1400" discountPrice="1600" image={watch} />
                  </div>
              </div>       
      </div>
    </div>
  );
};

export default ProductDetails;
