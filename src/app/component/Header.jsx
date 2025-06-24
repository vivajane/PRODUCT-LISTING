"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const path = usePathname();
  return (
    <div className="flex py-6 bg-amber-700 justify-between px-6 sm:px-12 md:px-32">
      <div>
        <Link
          className={`hover:text-[#FFFFFF] ${
            path.startsWith("/") ? "font-bold " : ""
          }`}
          href="/"
        >
          Home
        </Link>
      </div>
      <div>
        <Link
          className={`hover:text-[#FFFFFF] ${
            path.startsWith("/products") ? "font-bold " : ""
          }`}
          href="/products"
        >
          Products
        </Link>
      </div>
    </div>
  );
};

export default Header;
