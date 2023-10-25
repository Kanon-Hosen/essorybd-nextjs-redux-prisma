"use client";

import Link from "next/link";
import { useState } from "react";
import { AiOutlineAppstore } from "react-icons/ai";
import { BiChevronDown } from "react-icons/bi";
import { BsBag, BsCart2 } from "react-icons/bs";
import { FiUsers } from "react-icons/fi";
import { usePathname } from 'next/navigation'
// import '../app/globals.css'
const SideNav = () => {

  const [toggle, setToggle] = useState(false);
  const pathname = usePathname()
  console.log(pathname)
  return (
    <div className="w-full h-full">
      <h1 className="mb-6 text-2xl uppercase font-bold text-[#5C59E8]">Dashboard</h1>
      <hr />
      <div className="flex flex-col mt-4 gap-2 font-semibold">
        <Link
          onClick={()=>setToggle(false)}
          href="/dashboard"
          className={`${pathname === "/dashboard" && 'bg-[#5C59E8] text-white'} flex items-center gap-3 text-base text-neutral-800 hover:bg-gray-100 hover:text-[#5C59E8] transition-colors rounded-lg p-2 focus:bg-[#5C59E8] focus:text-white`}
        >
          <div className="text-xl">
            <AiOutlineAppstore />
          </div>
          <div className="">Dashboard</div>
        </Link>
        <Link href='/dashboard/product-list' onClick={()=>setToggle(!toggle)} className={`${toggle && 'bg-[#5C59E8] text-white'} flex items-center gap-3 text-base text-neutral-800 hover:bg-gray-100 hover:text-[#5C59E8] transition-colors rounded-lg p-2 focus:bg-[#5C59E8] focus:text-white`}>
          <div  className="text-xl">
            <BsBag />
          </div>
          <div>Product</div>
          <div className="text-2xl ml-16">
            <BiChevronDown/>
          </div>
          {/* DropDown */}
   
        </Link>
        <div className={` ${!toggle && 'hidden transition-all duration-300'} duration-300 transition-all flex flex-col ml-8 gap-1 text-neutral-800`}>
            <Link href='/dashboard/product-list' className={`${pathname === "/dashboard/product-list" && 'bg-[#5C59E8] text-white'} flex items-center gap-3 text-base text-neutral-800 hover:bg-gray-100 hover:text-[#5C59E8] transition-colors rounded-lg p-2 focus:bg-[#5C59E8] focus:text-white`}>
              Product list
            </Link>
            <Link href='/dashboard/category'  className={`${pathname === "/dashboard/category" && 'bg-[#5C59E8] text-white'} flex items-center gap-3 text-base text-neutral-800 hover:bg-gray-100 hover:text-[#5C59E8] transition-colors rounded-lg p-2 focus:bg-[#5C59E8] focus:text-white`}>
              Category
            </Link>
          </div>
        <Link onClick={()=>setToggle(false)} href="/dashboard"  className={`${pathname === "/dashboard/orders" && 'bg-[#5C59E8] text-white'} flex items-center gap-3 text-base text-neutral-800 hover:bg-gray-100 hover:text-[#5C59E8] transition-colors rounded-lg p-2 focus:bg-[#5C59E8] focus:text-white`}>
          <div  className="text-xl">
            <BsCart2 />
          </div>
          <div>Orders</div>
        </Link>
        <Link onClick={()=>setToggle(false)} href="/dashboard"  className={`${pathname === "/dashboard/customers" && 'bg-[#5C59E8] text-white'} flex items-center gap-3 text-base text-neutral-800 hover:bg-gray-100 hover:text-[#5C59E8] transition-colors rounded-lg p-2 focus:bg-[#5C59E8] focus:text-white`}>
          <div  className="text-xl">
            <FiUsers />
          </div>
          <div>Customers</div>
        </Link>
      </div>
    </div>
  );
};

export default SideNav;
