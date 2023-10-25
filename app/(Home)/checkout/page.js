"use client";
import React, { useState } from "react";
import Bkash from "../../../images/bkash.png";
import Nogod from "../../../images/nogod.png";
import Cod from "../../../images/cod.svg";
import Visa from "../../../images/download.svg";
import Image from "next/image";
import { useSelector } from "react-redux";
import { District } from "@/utils/district";
import Link from "next/link";
function Checkout() {
  const state = useSelector((state) => state);
  console.log(state);
  const [isChecked, setIsChecked] = useState(true);
  return (
    <div className="md:px-12 px-6 my-12">
      <div>
        <div className="grid md:grid-cols-2 gap-12">
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
                <h1 className="text-base text-center">
                  You will get the delivery{" "}
                  <span className="font-semibold text-orange-500">
                    within 2-3 Days
                  </span>{" "}
                  after confirmation.
                </h1>
              </div>
              <div className="mt-4">
                <h1 className="font-semibold">Payment Options</h1>
                <div className="mt-4 grid grid-cols-2 gap-4 h-full">
                  <div className="flex items-center cursor-pointer gap-2 p-3 shadow-md rounded border">
                    <input type="radio" name="payment" id="cash" />
                    <label
                      htmlFor="cash"
                      className="flex items-center cursor-pointer "
                    >
                      <Image
                        src={Cod}
                        alt="Cash On Delivery"
                        className="w-16"
                      />
                      <span className="ml-2 font-semibold">
                        Cash On Delivery
                      </span>
                    </label>
                  </div>{" "}
                  <div className="flex items-center  gap-2 p-3 cursor-pointer shadow-md rounded border ">
                    <input type="radio" name="payment" id="Bkash" />
                    <label
                      htmlFor="Bkash"
                      className="flex items-center cursor-pointer "
                    >
                      <Image src={Bkash} alt="Bkash" className="w-16" />
                      <span className="ml-2 font-semibold">Bkash Payment</span>
                    </label>
                  </div>{" "}
                  <div className="flex items-center  gap-2 p-3 shadow-md cursor-pointer rounded border">
                    <input type="radio" name="payment" id="Nogod" />
                    <label
                      htmlFor="Nogod"
                      className="flex items-center cursor-pointer "
                    >
                      <Image src={Nogod} alt="Nogod" className="w-16" />
                      <span className="ml-2 font-semibold">Nogod Payment</span>
                    </label>
                  </div>
                  <div className="flex items-center  gap-2 p-3 shadow-md rounded border cursor-pointer">
                    <input type="radio" name="payment" id="Visa" />
                    <label
                      htmlFor="Visa"
                      className="flex items-center cursor-pointer "
                    >
                      <Image src={Visa} alt="Visa" className="w-16" />
                      <span className="ml-2 font-semibold">Visa</span>
                    </label>
                  </div>
                </div>
              </div>
              <div className="mt-4 flex items-baseline gap-2">
                <input type="checkbox" name="Terms" id="Terms" />
                <label
                  onClick={() => setIsChecked(!isChecked)}
                  htmlFor="Terms"
                  className="inline-block"
                >
                  I agree to{" "}
                  <Link
                    href={"/"}
                    className="text-orange-500 hover:underline transition-colors"
                  >
                    Terms & Conditions
                  </Link>
                  ,{" "}
                  <Link
                    href={"/"}
                    className="text-orange-500 hover:underline transition-colors"
                  >
                    Refund Policy
                  </Link>{" "}
                  and{" "}
                  <Link
                    href={"/"}
                    className="text-orange-500 hover:underline transition-colors"
                  >
                    Privacy Policy
                  </Link>{" "}
                  of EssoryBd.
                </label>
              </div>
              <button
                disabled={isChecked}
                className={` ${
                  isChecked
                    ? "bg-orange-200 text-white cursor-not-allowed"
                    : " bg-orange-500 cursor-pointer text-white"
                } w-full p-2 mt-5`}
              >
                Confirm Order
              </button>
            </form>
          </div>
          <div className="bg-gray-100 px-10 py-4 h-fit rounded-md">
            <h1 className="font-semibold text-xl">Cart Overview</h1>
            <hr />
            <div className="my-6">
              <h1 className="text-sm text-gray-500">
                Mens Premium Jacket - Solstice (Black) ( M)
              </h1>
              <div className="flex items-center justify-between  mt-3">
                <Image src={Bkash} alt="Bkash" className="w-24 border rounded-md bg-center bg-cover" />
                <p>1 X ৳ 1700</p>
              </div>
            </div>
            <hr />
            <div className="flex flex-col gap-4 my-6">
              <div className="flex items-center justify-between">
                <p className="font-semibold">Total:</p>
                <p className="text-orange-500 text-lg font-semibold">৳ 1700</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="font-semibold">Shipping (+):</p>
                <p className="text-orange-500 text-lg font-semibold">৳ 100</p>
              </div>
            </div>
            <hr />
            <div className="my-6 flex items-center justify-between text-xl font-semibold">
              <p>Payable:</p>
              <p className="text-orange-500">৳ 1800</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
