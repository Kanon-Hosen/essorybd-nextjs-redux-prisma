import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const AppApi = createApi({
  reducerPath: "products",
  baseQuery: fetchBaseQuery({ baseUrl: "../../api/" }),
  tagTypes: ["product", "category", "post", "categoryProducts"],
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => "product",
      providesTags: ["product"],
    }),
    getOneProduct: builder.query({
      query: (name) => `product/${name}`,
      providesTags: ["product"],
    }),
    getProductByCategory: builder.query({
      query: (name) => `product/category/${name}`,
      providesTags: ["categoryProducts"],
    }),
    getCategory: builder.query({
      query: () => "category",
      providesTags: ["category"],
    }),
    createProduct: builder.mutation({
      query: (Product) => ({
        url: "product",
        method: "POST",
        body: Product,
      }),
      invalidatesTags: ["post"],
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useGetOneProductQuery,
  useCreateProductMutation,
  useGetCategoryQuery,
  useGetProductByCategoryQuery
} = AppApi;
