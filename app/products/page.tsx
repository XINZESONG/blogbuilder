import React from "react";
import Link from "next/link";

const ProductsPage = () => {
  return (
    <div>
      <h1>Products Page</h1>
      <Link href="/products/1">Link to the product 1</Link>
      <br />
      <Link href="/products/2">Link to the product 2</Link>
      <br />
      <Link href="/">Link to the Home Page</Link>
    </div>
  );
};

export default ProductsPage;
