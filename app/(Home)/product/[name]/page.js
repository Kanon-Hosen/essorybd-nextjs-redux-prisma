"use client";
import Link from "next/link";
import React, { useState } from "react";
import { BiSolidStar } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import { decrement, increment } from "@/Redux/counterSlice/CounterSlice";
import ProductCard from "@/components/Product/ProductCard";
import Loading from "@/components/Loading";
import {
  useGetOneProductQuery,
  useGetProductByCategoryQuery,
} from "@/Redux/AppApi/AppApi";
import { addToCart } from "@/Redux/cart/cartSlice";
import { addCheckout } from "@/Redux/Checkout/checkoutSLice";
import { data } from "autoprefixer";
import { useRouter } from "next/navigation";
const ProductDetails = ({ params }) => {
  const router = useRouter()
  const [text, setText] = useState("Description");
  const dispatch = useDispatch();
  const state = useSelector((state) => state?.counter?.count);

  const {
    data: oneProducts,
    isLoading: onProductLoading,
    error: onProductError,
  } = useGetOneProductQuery(params?.name);

  const product = oneProducts?.data;
  const [imageUrl, setImageUrl] = useState(product?.images && product.images[0]);

  const {
    data: getCategoryProducts,
    isLoading: categoryProductsLoading,
    error: categoryProductsError,
  } = useGetProductByCategoryQuery(product?.category);


  if (onProductLoading) {
    return <Loading />;
  }

  if (onProductError) {
    return (
      <div className="w-full h-screen overflow-x-hidden flex items-center justify-center font-bold text-2xl text-neutral-800">
        Something went wrong
      </div>
    );
  }

  const handleRoute = (data) => {
    console.log(data)
    dispatch(addCheckout(data))

    return router.push('/checkout');
  }

  return (
    <div className="my-12 overflow-x-hidden">
      <div className="grid lg:grid-cols-2 gap-10 lg:px-24 px-6">
        <div className="flex gap-8">
          <div className="flex flex-col gap-5">
            {product?.images && (
              <div className="flex flex-col gap-3">
                {product?.images?.map((image, i) => {
                  return (
                    <Image
                      key={i}
                      priority={true} 
                      onClick={() => setImageUrl(image)}
                      className={` ${
                        imageUrl === image && "border-2 border-orange-500"
                      } border-2`}
                      src={image}
                      width={100}
                      height={100}
                      alt={oneProducts?.data.name}
                    />
                  );
                })}
              </div>
            )}
          </div>
          <div className="w-full h-[400px] overflow-hidden bg-center">
            <Image
              className="border-2 w-full h-full  bg-center overflow-hidden bg-cover object-contain"
              src={imageUrl || product?.images[0]}
              width={500}
              height={300}
              alt={oneProducts?.data.name}
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold text-slate-900">{product.name}</h1>
          <p className="text-xl font-semibold text-orange-500">
            {product.price} tk
          </p>
          {product?.reviewPoints > 0 && (
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
              <span className="text-neutral-600 text-sm ml-1">
                ({product?.totalReview})
              </span>
            </div>
          )}
          <p
            className="text-base text-neutral-900"
            dangerouslySetInnerHTML={{ __html: product?.description }}
          ></p>
          <div className="flex items-center gap-8 mt-7">
            <div className="px-4 py-2 border-2 rounded-xl text-xl font-semibold text-slate-900 border-neutral-900 grid grid-cols-3 gap-3 w-28 ">
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
                  dispatch(increment(product?.quantity));
                }}
              >
                +
              </div>
            </div>
            <button
              onClick={() =>
                dispatch(
                  addToCart({
                    name: product?.name,
                    id: product?.id,
                    price: product?.price,
                    image: product?.images[0],
                    quantity: state === 0 ? 1 : state,
                  })
                )
              }
              className="bg-black px-9 py-3 text-white rounded-lg hover:bg-orange-500 transition-colors focus:bg-orange-500 border-none outline-none font-semibold"
            >
              Add To Cart
            </button>
            {/* <button
              onClick={() => handleRoute(product)}
              className="bg-orange-500 px-9 py-4 text-white rounded-lg hover:bg-orange-500 transition-colors focus:bg-orange-700 border-none outline-none font-semibold"
            >
              Buy Now
            </button> */}
          </div>
          <hr className="mt-6" />

          <div className="w-82 flex text-base flex-col gap-3 mt-6">
            <div className="grid grid-cols-4 gap-2 ">
              <p className="font-medium  text-neutral-700 col-span-1">
                SKU
              </p>
              <p className="font-medium  text-neutral-700 w-8">:</p>
              <p className="font-medium  text-neutral-700 col-span-2">
                {product?.SKU}
              </p>
            </div>
            <div className="grid grid-cols-4 gap-2 ">
              <p className="font-medium text-neutral-700 col-span-1">
                Category
              </p>
              <p className="font-medium  text-neutral-700 w-8">:</p>
              <p className="font-medium  text-neutral-700 col-span-2">
                {product?.category}
              </p>
            </div>
            <div className="grid grid-cols-4 gap-2 ">
              <p className="font-medium  text-neutral-700 col-span-1">
                Tags
              </p>
              <p className="font-medium text-neutral-700 w-8">:</p>
              <p className="font-medium text-neutral-700 col-span-2">
                {product?.tags}
              </p>
            </div>
          </div>
        </div>
      </div>
      <hr className="mt-14" />
      <div className="lg:px-24 px-6 my-16">
        <div className="flex items-center text-lg text-neutral-700 justify-center gap-6">
          <p
            className={` ${
              text === "Description" && "text-orange-500"
            } hover:text-neutral-950 font-semibold cursor-pointer`}
            onClick={(e) => setText(e.target.innerText)}
          >
            Description
          </p>
          <p
            onClick={(e) => setText(e.target.innerText)}
            className={` ${
              text === "Reviews" && "text-orange-500"
            } hover:text-neutral-950 font-semibold cursor-pointer`}
          >
            Reviews
          </p>
        </div>

        <div className="mt-4">
          {text === "Description" && (
            <div>
              <p
                className="text-base text-neutral-900"
                dangerouslySetInnerHTML={{ __html: product?.description }}
              ></p>
            </div>
          )}
          {text === "Reviews" && <div>Reviews</div>}
        </div>

        <div className="mt-16 overflow-x-hidden">
          <h1 className="text-center font-bold text-slate-900 text-4xl">
            Related Products
          </h1>
          <div className="grid md:grid-cols-4 gap-6 mt-6">
            {categoryProductsLoading && (
              <div className="w-full h-screen flex  items-center justify-center">
                {" "}
                <Loading />
              </div>
            )}
            {categoryProductsError && (
              <div className="w-full h-screen flex items-center justify-center font-bold text-2xl text-neutral-800">
                Something went wrong
              </div>
            )}
            {getCategoryProducts?.data?.map((product) => (
              <ProductCard key={product?.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
