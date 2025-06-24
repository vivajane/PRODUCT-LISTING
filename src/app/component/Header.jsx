import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <div className="flex py-6 bg-amber-700 justify-between px-6 sm:px-12 md:px-32">
      <div>
        <Link href="/">Home</Link>
      </div>
      <div>
        <Link href="/products">Products</Link>
      </div>
    </div>
  );
};

export default Header;
