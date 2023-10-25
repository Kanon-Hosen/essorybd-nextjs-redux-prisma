"use client";
import React from "react";
import Bkash from "../../../images/bkash.png";
import Nogod from "../../../images/nogod.png";
import Cod from "../../../images/cod.svg";
import Visa from "../../../images/download.svg";
import Image from "next/image";
import { useSelector } from "react-redux";
import { District } from "@/utils/district";
function Checkout() {
  const state = useSelector((state) => state);
  console.log(state);
  return (
    <div className="md:px-12 px-6 my-12">
      <div>
        <div className="grid grid-cols-2 gap-12">
          <div>
            <h1 className="text-center font-bold text-xl mb-4 text-neutral-800">
              Checkout Info
            </h1>
            <form>
              <div className="flex flex-col gap-5">
                <label htmlFor="" className="font-semibold">
                  Contact Info
                </label>
                <input
                  type="text"
                  name=""
                  className="border p-2 border-gray-300 rounded focus:outline-none"
                  placeholder="Full Name"
                  required
                />
                <div className="grid grid-cols-2 gap-8 w-full">
                  <input
                    type="email"
                    name=""
                    className="border p-2 border-gray-300 rounded focus:outline-none"
                    placeholder="Email"
                    required
                  />
                  <input
                    type="text"
                    className="border p-2 border-gray-300 rounded focus:outline-none"
                    placeholder="Phone Number"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-5 mt-6">
                <h1 className="font-semibold">Shipping Info</h1>
                <input
                  type="text"
                  name=""
                  className="border p-2 border-gray-300 rounded focus:outline-none"
                  placeholder="Detailed Address"
                  required
                />
                <div className="grid grid-cols-2 gap-8 w-full">
                  <select
                    name=""
                    id=""
                    required
                    placeholder="Select City"
                    className="border p-2 border-gray-300 rounded focus:outline-none"
                  >
                    <option value="">Select City</option>
                    {District?.map((d, i) => (
                      <option value={d} key={i}>
                        {d}
                      </option>
                    ))}
                  </select>
                  <input
                    type="text"
                    className="border p-2 border-gray-300 rounded focus:outline-none"
                    placeholder="Alt. Phone (01XXXXXXXX)"
                  />
                </div>
                <input
                  type="text"
                  className="border p-2 border-gray-300 rounded focus:outline-none"
                  placeholder="Note for EssoryBD (Optional)"
                />
              </div>
              <div className="mt-6 bg-gray-100 rounded p-4">
                <p className="text-center">Your total payable amount is</p>
                <h1 className="text-center font-bold text-orange-500 mt-2 text-3xl">
                  ৳ 1000
                </h1>
                <div className="flex items-center justify-center ">
                  <table className=" border-separate border-spacing-6 ">
                    <thead>
                      <tr>
                        <th>Purpose</th>
                        <th>Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Total</td>
                        <td className="text-orange-500">৳1961</td>
                      </tr>
                      <tr>
                        <td>Shipping</td>
                        <td className="text-orange-500">৳100</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
