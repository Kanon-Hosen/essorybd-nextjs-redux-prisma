import React from "react";
import { LuEdit2 } from "react-icons/lu";
import { BsTrash3Fill } from "react-icons/bs";
import Link from "next/link";
import { AiOutlinePlus } from "react-icons/ai";
function page() {
    
  return (
      <div>
          <div className="flex items-center justify-between mb-4">
          <h1 className="font-semibold text-xl">Product</h1>
              <Link href="/dashboard/add-product" className="flex items-center gap-2 text-lg px-5 py-3 text-white rounded-md bg-[#5C59E8]">
                  <div>
                      <AiOutlinePlus/>
                  </div>
                  <p>Add Product</p>
          </Link>
          </div>
          <div className="mb-4">
              <input type="text" placeholder="Search Product" className="px-4 w-80 py-3 border-2 rounded-md" />
          </div>
      <div>
        <div className="border">
          <div className="overflow-x-auto">
            <table className="w-full p-6 text-xs text-left whitespace-nowrap">
              <colgroup>
                <col />
                <col />
                <col />
                <col />
                <col />
                <col />
                <col />
              </colgroup>
              <thead>
                <tr className="bg-gray-200">
                  <th className="p-3 flex items-center gap-2">
                    <input type="checkbox" className="w-4 h-4" id="product" />
                    <label htmlFor="product" id="product">
                      Product
                    </label>
                  </th>
                  <th className="p-3">Category</th>
                  <th className="p-3">Stock</th>
                  <th className="p-3">Price</th>
                  <th className="p-3">Status</th>
                  <th className="p-3">Added</th>
                  <th className="p-3">Action</th>
                </tr>
              </thead>
              <tbody className="border-b dark:bg-gray-900 dark:border-gray-700">
                <tr className="mt-2">
                  <td className="px-3 py-2 text-2xl font-medium flex items-center gap-2">
                    <input className="w-4 h-4" type="checkbox" id="" />
                    <div className="w-10 h-10 rounded-lg bg-gray-300">
                      {/* <img src="" alt="" /> */}
                    </div>
                    <p className="text-sm">Product one</p>
                  </td>
                  <td className="px-3 py-2">
                    <p>Dwight Adams</p>
                  </td>
                  <td className="px-3 py-2">
                    <span>UI Designer</span>
                    <p className="dark:text-gray-400">Spirit Media</p>
                  </td>
                  <td className="px-3 py-2">
                    <p>555-873-9812</p>
                  </td>
                  <td className="px-3 py-2">
                    <p>dwight@adams.com</p>
                  </td>
                  <td className="px-3 py-2">
                    <p>71 Cherry Court, SO</p>
                    <p className="dark:text-gray-400">United Kingdom</p>
                  </td>
                  <td className="px-3 py-2 text-lg text-neutral-800 flex items-center justify-center gap-4">
                    <div className="text-green-500 cursor-pointer">
                      <LuEdit2 />
                    </div>
                    <div className="cursor-pointer text-red-500">
                      <BsTrash3Fill />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
