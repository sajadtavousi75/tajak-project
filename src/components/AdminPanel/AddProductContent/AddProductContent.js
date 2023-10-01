import React from "react";
import CategoryContent from "../CategoryContent/CategoryContent";
import DetailsContentBook from "../DetailsContentBook/DetailsContentBook";
import AboutBook from "../AboutBook/AboutBook";
import VrsionsBox from "../VersionsBox/VrsionsBox";

export default function AddProductContent() {
  return (
    <div className="addproduct-content pt-14 pb-5">
      <CategoryContent />
      <DetailsContentBook />
      <AboutBook />
      <VrsionsBox />
      <div className="add flex items-center justify-center mt-5">
        <button className="w-[150px] h-20 bg-gmelo text-text group rounded-lg flex gap-2 font-bold items-center justify-center transition-all duration-700 hover:text-bg hover:bg-gmain">
          <h1>افزودن محصول</h1>
          <svg
          className="fill-gmain transition-all duration-700 group-hover:fill-bg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            // fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 16C0 14.5272 1.19391 13.3333 2.66667 13.3333H29.3333C30.8061 13.3333 32 14.5272 32 16C32 17.4728 30.8061 18.6667 29.3333 18.6667H2.66667C1.19391 18.6667 0 17.4728 0 16Z"
              
            />
            <path
              d="M16 0C17.4728 6.43764e-08 18.6667 1.19391 18.6667 2.66667L18.6667 29.3333C18.6667 30.8061 17.4728 32 16 32C14.5272 32 13.3333 30.8061 13.3333 29.3333L13.3333 2.66667C13.3333 1.19391 14.5272 -6.43764e-08 16 0Z"
              
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
