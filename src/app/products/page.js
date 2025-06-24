"use client";
import React, { useEffect, useState } from "react";

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const setFetchedProducts = async () => {
      const response = await fetch("/products.json");
      const data = await response.json();
      setProducts(data);
    };
    setFetchedProducts();
  }, []);

  const updatedList = filter
    ? products.filter((product) => product.category === filter)
    : products;

  return (
    <div>
      <div>
        <h1 className="text-center text-3xl py-8">Choose category</h1>
        <div className="flex justify-center gap-8">
          <div
            onClick={() => setFilter("coffee")}
            className="bg-[#1A191F] cursor-pointer text-[#FFFFFF] py-2 px-4 rounded-3xl"
          >
            Coffee
          </div>
          <div
            onClick={() => setFilter("burger")}
            className="bg-[#1A191F] cursor-pointer text-[#FFFFFF] py-2 px-4 rounded-3xl"
          >
            Burger
          </div>
        </div>
      </div>

      <div className="grid  grid-cols-1 sm:grid-cols-2 px-6 space-y-16 sm:px-12 lg:px-32 py-16 md:grid-cols-3 gap-8">
        {updatedList.map((product) => (
          <div
            className="space-y-2 flex flex-col h-full bg-[#FFFFFF] shadow-neutral-500 shadow-2xl rounded-2xl"
            key={product.id}
          >
            <ul>
              <li>
                <img
                  className="w-full"
                  src={product.image}
                  alt={product.name}
                />
              </li>
            </ul>
            <ul className="space-y-2 px-6">
              <li className="font-bold lg:text-2xl text-[#1A191F]">
                {product.name}
              </li>

              <li className="flex gap-2">
                <img src={product.mini} alt={product.name} />
                <span>
                  <p className="text-[#1A191F] font-normal lg:text-[20px]">
                    Minden Bakery
                  </p>
                </span>
              </li>
              <li className="text-[#1A191F] font-normal md:text-[12px] lg:text-[20px]">
                ${product.price}
              </li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
