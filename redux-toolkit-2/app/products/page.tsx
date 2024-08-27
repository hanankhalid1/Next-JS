"use client";
import { fetchProducts } from "@/store/slices/productSlice";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((store: any) => {
    return store.productSlice.products;
  });

  const onClickHandler = () => {
    dispatch(fetchProducts());
  };

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">List of products</h1>
      <button
        onClick={onClickHandler}
        className="px-4 py-2 mb-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
      >
        Get all products
      </button>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 border-b text-left text-sm font-medium text-gray-700">
                Id
              </th>
              <th className="px-4 py-2 border-b text-left text-sm font-medium text-gray-700">
                Title
              </th>
              <th className="px-4 py-2 border-b text-left text-sm font-medium text-gray-700">
                Price
              </th>
              <th className="px-4 py-2 border-b text-left text-sm font-medium text-gray-700">
                Description
              </th>
              <th className="px-4 py-2 border-b text-left text-sm font-medium text-gray-700">
                Category
              </th>
              <th className="px-4 py-2 border-b text-left text-sm font-medium text-gray-700">
                Image
              </th>
            </tr>
          </thead>
          <tbody>
            {products.map((product: any) => (
              <tr key={product.id} className="hover:bg-gray-50">
                <td className="px-4 py-2 border-b text-sm text-gray-700">
                  {product.id}
                </td>
                <td className="px-4 py-2 border-b text-sm text-gray-700">
                  {product.title}
                </td>
                <td className="px-4 py-2 border-b text-sm text-gray-700">
                  ${product.price.toFixed(2)}
                </td>
                <td className="px-4 py-2 border-b text-sm text-gray-700">
                  {product.description}
                </td>
                <td className="px-4 py-2 border-b text-sm text-gray-700">
                  {product.category}
                </td>
                <td className="px-4 py-2 border-b text-sm text-gray-700">
                  <img
                    src={product.image}
                    alt={product.title}
                    width="50"
                    className="rounded-md"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Products;
