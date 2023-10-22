import React from "react";
import ProductBox from "../ProductBox/ProductBox";

export default function ProductsContent() {
  return (
    <div className="productcontent   pt-14 ">
      <div className="content bg-gmelo rounded-lg min-h-[100vh]">
        <h1 className="w-[380px] h-10 mx-auto flex items-center justify-center bg-bg text-text font-bold rounded-b-lg shadow-lg">
          محصولات
        </h1>
        <div className="search mt-5">
          <div className="w-[50%] mx-auto relative pt-[9px] md:pt-0 flex flex-col items-center justify-center">
            <input
              className="bg-gmelo border-t border-b border-gmain rounded-lg w-full h-[40px] text-center "
              type="text"
              placeholder="نام کتاب نام نویسنده ناشر"
            />
            <button className="absolute bottom-0 -left-2">
              <img
                className="w-8 h-8 md:h-10 md:w-10"
                src="/images/search.svg"
                alt=""
              />
            </button>
          </div>
        </div>
        <div className="product-count w-[250px] h-20 bg-gmain rounded-lg flex flex-col items-center justify-center gap-2 text-bg mt-5 mx-auto font-bold">
            <h1>مجموع کل محصولات</h1>
            <span>36525</span>
        </div>
        <div className="product-boxes flex flex-col gap-3 p-3 mt-3">
            <ProductBox />
            <ProductBox />
        </div>
      </div>
    </div>
  );
}
