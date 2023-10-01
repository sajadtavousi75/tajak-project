import React, { useState } from "react";
import Switch from "../Switch/Switch";

export default function DigitalVersion() {
  const [digitalValue, setDigitalValue] = useState(false);
  return (
    <div className="printedversion">
      <div
        className={`content w-[80%] mx-auto border-dashed border-gmain border-2 p-3 mt-5 overflow-hidden rounded-lg transition-all duration-700 ${
          digitalValue ? "h-[350px]" : "h-[65px]"
        }`}
      >
        <div className={`flex gap-2 items-center justify-start `}>
          <Switch
            ison={digitalValue}
            handeltoggle={() => setDigitalValue(!digitalValue)}
            name={"toggle1"}
          />
          <h1>نسخه دیجیتالی</h1>
        </div>
        <div
          className={`form mt-5 flex flex-col gap-5 transition-all duration-700 ${
            digitalValue ? "" : ""
          }`}
        >
          <div className="flex items-center justify-between">
            <div className=" relative ">
              <input
                className="w-[270px] h-10 border-solid border-gmain border-1 p-1 rounded-lg bg-gmelo 	"
                type="text"
              />
              <p className="bg-gmelo text-text absolute -top-4 right-2">فرمت</p>
            </div>
            <div className=" relative ">
              <input
                className="w-[270px] h-10 border-solid border-gmain border-1 p-1 rounded-lg bg-gmelo 	"
                type="text"
              />
              <p className="bg-gmelo text-text absolute -top-4 right-2">
                تعداد صفحه
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className=" relative">
              <input
                className="w-[270px] h-10 border-solid border-gmain border-1 p-1 rounded-lg bg-gmelo 	"
                type="text"
              />
              <p className="bg-gmelo text-text absolute -top-4 right-2">حجم</p>
            </div>
            <div className="flex gap-3">
              <h1 className="w-[150px] h-10 bg-gmain text-bg rounded-lg flex items-center justify-center">فایل کتاب</h1>
              <div className="file 	">
                <label htmlFor="upload-file">
                  <span>
                    <img
                      className="cursor-pointer w-8 h-10"
                      src="/images/file.png"
                      alt=""
                    />
                  </span>
                </label>
                <input className="hidden" type="file" id="upload-file" />
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className=" relative">
              <input
                className="w-[270px] h-10 border-solid border-gmain border-1 p-1 rounded-lg bg-gmelo 	"
                type="text"
              />
              <p className="bg-gmelo text-text absolute -top-4 right-2">قیمت</p>
            </div>
            <img
              className="w-[40px] h-[36px] flex justify-end"
              src="/images/book/Vector digital.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
