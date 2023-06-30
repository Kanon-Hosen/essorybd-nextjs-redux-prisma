import Link from "next/link";
import React from "react";
import { BiUser, BiCartAlt } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";
import { BsHeart } from "react-icons/bs";
const Navbar = () => {
  return (
    <nav className="lg:px-24 px-6 bg-white z-50 shadow sticky top-0 h-[10vh] py-4">
      <div className="grid grid-cols-3  ">
        <div className="col-span-1">
          <h1 className="text-xl font-bold text-orange-500">EssoryBD</h1>
        </div>
        <ul className="flex items-center justify-center gap-8 col-span-1 ">
          <Link
            className="text-base font-medium hover:text-orange-500 transition-colors focus:text-orange-500"
            href="/"
          >
            Home
          </Link>
          <Link
            className="text-base font-medium hover:text-orange-500 transition-colors focus:text-orange-500"
            href="/"
          >
            Shop
          </Link>
          <Link
            className="text-base font-medium hover:text-orange-500 transition-colors focus:text-orange-500"
            href="/"
          >
            About
          </Link>
          <Link
            className="text-base font-medium hover:text-orange-500 transition-colors focus:text-orange-500"
            href="/"
          >
            Contact
          </Link>
        </ul>
        <div className="flex items-center gap-8 font-semibold col-span-1 justify-end">
          <div className="text-xl text-black hover:text-orange-500 transition-colors focus:text-orange-500 cursor-pointer">
            <BiUser></BiUser>
          </div>
          <div className="text-xl text-black hover:text-orange-500 transition-colors focus:text-orange-500 cursor-pointer">
            <FiSearch></FiSearch>
          </div>
          <div className="text-xl text-black hover:text-orange-500 transition-colors focus:text-orange-500 cursor-pointer">
            <BsHeart></BsHeart>
          </div>
          <div className="text-2xl text-black hover:text-orange-500 transition-colors focus:text-orange-500 cursor-pointer">
            <BiCartAlt></BiCartAlt>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
