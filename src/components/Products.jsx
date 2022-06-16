import React from "react";
import Product from "./Product";
import { ApiTopPropduct } from "../apifolder/TopProductsApi";
function Products() {
  return (
    <div className="container-lg  bg-white grid grid-cols-3">
      <div></div>
      <div className="p-8 flex flex-wrap justify-center col-span-2 gap-10">
        {ApiTopPropduct.map((product, index) => (
          <Product item={product} key={index} />
        ))}
      </div>
    </div>
  );
}

export default Products;
