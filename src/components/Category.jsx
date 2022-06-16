import React from "react";

const Category = ({ item }) => {
  return (
    <div className=" flex-1 m-2  shadow-lg rounded-md overflow-hidden relative bg-slate-300">
      <img src={item.src} className="w-[100%]" alt="category_img" />
      <div className="flex  w-[100%] h-[80px] px-5 py-3 flex-col">
        <h2 className="text-black font-medium text-[20px] ">{item.title}</h2>
      </div>
      <div className="flex w-[100% h-[80px] px-5 py-3">
        <h1 className="font-bold">{item.price}</h1>
      </div>
    </div>
  );
};

export default Category;
