"use client";

import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";
import { useCreateProductMutation, useGetCategoryQuery } from "@/Redux/AppApi/AppApi";
import {Editor, EditorState} from 'draft-js';
import 'draft-js/dist/Draft.css';

const Page = () => {
  const [results, setResult] = useState([]);
  const [editorState, setEditorState] = useState(
    () => EditorState.createEmpty(),
  );

  const [cta, setCta] = useState({});
  const [createProduct, { isSuccess, isLoading }] = useCreateProductMutation();
  const { data } = useGetCategoryQuery();
  const categories = data?.data;

  const handlePost = async (e) => {

    e.preventDefault();
    const title = e.target.title?.value;
    const description = e.target.description?.value;
    const price =Number( e.target.price.value);
    const category = cta?.name;
    const images = results;
    const discountType = e.target.discountType.value;
    const discountPercentage = Number(e.target.discountPercentage.value);
    const SKU = Number(e.target.sku.value);
    const quantity = Number(e.target.quantity.value);
    const status = e.target.status.value;
    const stockType = e.target.stockType.value;
    const tags = e.target.tags.value;
    const categoryId = cta?.id;
    const Products = {
      name: title,
      description: description,
      quantity: quantity,
      stockType: stockType,
      tags: tags,
      price: price,
      category: category,
      images: images,
      discountType: discountType,
      discountParcent: discountPercentage,
      SKU: SKU,
      status: status,
      categoryId: categoryId
    };
    await createProduct(Products);
  };

  return (
    <form onSubmit={handlePost} className="bg-white">
      <h1 className="font-semibold text-xl">Add Product</h1>
      <div className="grid grid-cols-5 gap-8 mt-5">
        <div className="col-span-3">
          <div className="shadow p-6 border w-full bg-white rounded-md">
            <h1 className="text-lg font-semibold">General Information</h1>
            <div className="flex flex-col gap-2 w-full mt-4">
              <label htmlFor="" className="font-semibold text-neutral-800">
                Product Name
              </label>
              <input
                name="title"
                type="text"
                className="border p-3"
                placeholder="Type product name here. . ."
              />
            </div>
            <div className="flex flex-col gap-2 w-full mt-4">
              <label htmlFor="" className="font-semibold text-neutral-800">
                Description
              </label>
              <Editor editorState={editorState} onChange={setEditorState} />
            </div>
          </div>
          <div className="shadow p-6 border w-full overflow-hidden bg-white rounded-md mt-4">
            <h1 className="text-lg font-semibold">Media</h1>
            <div className="mt-4 flex flex-col gap-2">
              <p className="font-semibold text-neutral-800">Photo</p>

              <div className="grid md:grid-cols-3 gap-3">
                {results?.map((r, i) => {
                  return (
                    <div className="w-[150px] h-[150px]" key={i}>
                      <Image
                        className="w-full h-full bg-center object-cover border rounded-lg"
                        width={200}
                        height={200}
                        src={r}
                        alt="image"
                      />
                    </div>
                  );
                })}
              </div>

              <div className="w-full border-dashed p-6 flex items-center justify-center border-2 h-32 bg-neutral-100 rounded-md ">
                <CldUploadWidget
                  onUpload={(result, widget) => {
                    widget.close();
                    setResult([...results, result?.info.secure_url]);
                  }}
                  uploadPreset="essorybd"
                >
                  {({ open }) => {
                    function handleOnClick(e) {
                      e.preventDefault();
                      open();
                    }
                    return (
                      <button
                        className="button bg-blue-500 px-6 py-3 rounded-lg text-white"
                        onClick={handleOnClick}
                      >
                        Upload an Image
                      </button>
                    );
                  }}
                </CldUploadWidget>
              </div>
            </div>
          </div>
          <div className="shadow p-6 w-full rounded-md mt-4">
            <h1 className="text-lg font-semibold">Pricing</h1>
            <div className="mt-4 flex flex-col gap-2">
              <label className="font-semibold text-neutral-800">
                Base Price
              </label>
              <input
                name="price"
                type="text"
                className="border p-3"
                placeholder="Type base price here. . ."
              />
            </div>
            <div className="grid grid-cols-2 gap-8 w-full">
              <div className="mt-4 flex flex-col gap-2">
                <label className="font-semibold text-neutral-800">
                  Discount Type
                </label>
                <input
                  name="discountType"
                  type="text"
                  className="border p-3"
                  placeholder="Set a discount type"
                />
              </div>
              <div className="mt-4 flex flex-col gap-2">
                <label className="font-semibold text-neutral-800">
                  Discount Precentage (%)
                </label>
                <input
                  name="discountPercentage"
                  type="number"
                  className="border p-3"
                  placeholder="Type discount precentage. . ."
                />
              </div>
            </div>
          </div>
          <div className="shadow p-6 w-full rounded-md mt-4 mb-4">
            <h1 className="text-lg font-semibold">Inventory</h1>
            <div className="grid grid-cols-2 gap-8 w-full">
              <div className="mt-4 flex flex-col gap-2">
                <label className="font-semibold text-neutral-800">SKU</label>
                <input
                  name="sku"
                  type="number"
                  className="border p-3"
                  placeholder="SKU Number"
                />
              </div>
              <div className="mt-4 flex flex-col gap-2">
                <label className="font-semibold text-neutral-800">
                  Quantity
                </label>
                <input
                  name="quantity"
                  type="number"
                  className="border p-3"
                  placeholder="Type product quantity here. . ."
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-2">
          <div className="shadow p-6 border w-full bg-white rounded-md">
            <h1 className="text-lg font-semibold">Category</h1>
            <div className="flex flex-col gap-2 w-full mt-4">
              <label htmlFor="" className="font-semibold text-neutral-800">
                Product Category
              </label>
              <>
                {
                  categories?.length > 0 && categories.map(category => {
                    return (
                      <div key={category?.id} onClick={() => setCta(category)} className="flex items-center gap-2">
                        <input type="radio" name="cta" />
                        <label htmlFor="cta"  >{category.name}</label>
                      </div>
                    )
                  }) 
                }
              </>
            </div>
            <div className="flex flex-col gap-2 w-full mt-4">
              <label htmlFor="" className="font-semibold text-neutral-800">
                Product tags
              </label>
              <input
                name="tags"
                type="text"
                className="border p-3"
                placeholder="Type product tags here. . ."
              />
            </div>
          </div>
          <div className="shadow p-6 border w-full bg-white rounded-md mt-4">
            <h1 className="text-lg font-semibold">Status</h1>
            <div className="flex flex-col gap-2 w-full mt-4">
              <label htmlFor="" className="font-semibold text-neutral-800">
                Product Status
              </label>
              <select name="status" className="border p-3" required>
                <option name="" id="">
                  Select Status
                </option>
                <option defaultValue="PUBLISHED" classN ame="bg-green-500 p-1 text-white" name="" id="">
                  PUBLISHED
                </option>
                <option defaultValue="DRAFT" className="bg-red-500 p-1 text-white" name="" id="">
                  DRAFT
                </option>
              </select>
            </div>
          </div>
          <div className="shadow p-6 border w-full bg-white rounded-md mt-4">
            <h1 className="text-lg font-semibold">Stock Type</h1>
            <div className="flex flex-col gap-2 w-full mt-4">
              <select name="stockType" className="border p-3" >
                <option name="" id="" >
                  Select Status
                </option>
                <option defaultValue="IN_STOCK" className="bg-green-500 p-2 text-white" name="" id="">
                  IN_STOCK
                </option>
                <option defaultValue="OUT_OF_STOCK" className="bg-red-500 p-2 text-white" name="" id="">
                  OUT_OF_STOCK
                </option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end bg-white p-4 border-t-2 border mt-6">
        <button
          href="/dashboard/add-product"
          className="flex items-center gap-2 text-lg px-5 py-3 text-white rounded-md bg-[#5C59E8]"
        >
          <div>
            <AiOutlinePlus />
          </div>
          <p>Add Product</p>
        </button>
      </div>
    </form>
  );
};

export default Page;
