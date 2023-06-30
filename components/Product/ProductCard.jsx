import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BiSolidStar } from "react-icons/bi";

const ProductCard = ({ name, price, discountPrice, image, rating, id }) => {
  return (
    <Link
      href={`/product/${name}`}
      className="bg-[#F5F5F5] group shadow-md border-2 border-gray-100"
    >
      <div className="w-full overflow-hidden">
        <Image
          className=" group-hover:scale-105 transition-transform duration-300 bg-[#F5F5F5]"
          src={image}
          width={500}
          height={500}
          alt={name}
        />
      </div>
      <div className="px-3 py-3 flex flex-col gap-2">
        <h1 className="text-lg font-semibold text-neutral-900">{name}</h1>
        <div className="flex items-center gap-8">
          <p className="inline-block text-slate-900 font-bold">{price} tk</p>
          <span className="inline-block line-through text-neutral-600"> {discountPrice} tk</span>
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
                  <span className="text-neutral-600 text-sm ml-1">(10)</span>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
