import React from "react";

export default function SliderContent() {
  return (
    <div className="slider-content flex flex-col items-center justify-center gap-5 pt-14 pb-5">
      <div className="input-slider h-[210px] bg-gmelo w-[550px] rounded-lg flex flex-col items-center justify-center">
        <div className="file 	">
          <label htmlFor="upload-file">
            <span>
              <img className="cursor-pointer" src="/images/file.png" alt="" />
            </span>
          </label>
          <input className="hidden" type="file" id="upload-file" />
        </div>
        <h1 className="text-gmain">افزودن اسلاید جدید</h1>
      </div>
      <div className="slider-img flex flex-col items-center justify-center gap-3 border-solid border-gmain border-y-2 rounded-lg w-full py-5">
        <div className="slider-box flex items-center justify-center gap-4  w-full">
        <div>
          <button className=" bg-gmelo flex items-center justify-center rounded-lg p-1 opacity-30 hover:opacity-100">
          <img src="/images/deletprofile.png" alt="" />
          </button>
          </div>
          <img className="h-[210px]  w-[550px]" src="/images/slider/ketab1.png" alt="" />
          <div>
            <h1 className="w-8 h-8 bg-text text-bg rounded-lg flex items-center justify-center">1</h1>
          </div>
        </div>
        <div className="slider-box flex items-center justify-center gap-4  w-full">
        <div>
          <button className=" bg-gmelo flex items-center justify-center rounded-lg p-1 opacity-30 hover:opacity-100">
          <img src="/images/deletprofile.png" alt="" />
          </button>
          </div>
          <img className="h-[210px]  w-[550px]" src="/images/slider/ketab1.png" alt="" />
          <div>
            <h1 className="w-8 h-8 bg-text text-bg rounded-lg flex items-center justify-center">1</h1>
          </div>
        </div>
        <div className="slider-box flex items-center justify-center gap-4  w-full">
        <div>
          <button className=" bg-gmelo flex items-center justify-center rounded-lg p-1 opacity-30 hover:opacity-100">
          <img src="/images/deletprofile.png" alt="" />
          </button>
          </div>
          <img className="h-[210px]  w-[550px]" src="/images/slider/ketab1.png" alt="" />
          <div>
            <h1 className="w-8 h-8 bg-text text-bg rounded-lg flex items-center justify-center">1</h1>
          </div>
        </div>
        <div className="slider-box flex items-center justify-center gap-4  w-full">
        <div>
          <button className=" bg-gmelo flex items-center justify-center rounded-lg p-1 opacity-30 hover:opacity-100">
          <img src="/images/deletprofile.png" alt="" />
          </button>
          </div>
          <img className="h-[210px]  w-[550px]" src="/images/slider/ketab1.png" alt="" />
          <div>
            <h1 className="w-8 h-8 bg-text text-bg rounded-lg flex items-center justify-center">1</h1>
          </div>
        </div>
        
      </div>
    </div>
  );
}
