import React from "react";

export default function SavedBox() {
  return (
    <div className="savedbox">
      <div className="savedbox-content group h-[370px]">
        <div className="book-box p-2 bg-gmelo	   w-[160px] rounded-lg transition duration-300 ease-in-out group-hover:bg-gmain group-hover:text-bg group-hover:transition duration-300 ease-in-out">
          <div className="relative">
            <img
              src="/images/be06d9a3929044ff82e28424a0d1c337.jpg"
              alt=""
              className="book-box-img w-[150px] h-[220px] rounded-lg mx-auto 	"
            />
            <div className="book-box-img__icon hidden w-full bg-gmainhover rounded-b-lg	 h-4 mx-auto  items-center justify-between	absolute bottom-0 left-0  p-3 group-hover:flex	group-hover:transition duration-100 ease-in-out">
              <img
                className="w-[30px] 	"
                src="/images/slider/Vector.png"
                alt=""
              />
              <img
                className="w-[30px]"
                src="/images/slider/Vector1.png"
                alt=""
              />
              <img
                className="w-[30px]"
                src="/images/slider/Vector2.png"
                alt=""
              />
            </div>
          </div>
          <h1 className="book-box__title font-bold text-end mr-4 mt-2">کتاب</h1>
          <h3 className="book-box__name text-end mr-4">کتاب</h3>
          <h1 className="book-box__price text-start font-bold ml-4">10$</h1>
        </div>
        <div className="w-full transition duration-300 ease-in-out h-10 hidden items-center justify-center bg-gmain rounded-lg mt-1 group-hover:flex group-hover:transition duration-300 ease-in-out">
          <img src="/images/deletprofile.png" alt="" />
        </div>
      </div>
    </div>
  );
}
