import React from "react";

export default function EditSection() {
  return (
    <div className="editsection bg-gmelo py-3 rounded-lg w-full my-3">
      <div className="container">
        <div className="editcontent flex flex-col gap-4  w-full p-5">
          <div className="flex items-center justify-between">
            <div className="w-[45%] relative">
              <input
                className="w-full border-solid border-gmain border-1 p-1 rounded-lg bg-gmelo 	 h-10"
                type="text"
              />
              <p className="bg-gmelo text-text absolute -top-4 right-2">نام</p>
            </div>
            <div className="w-[45%]">
              <h1 className="w-full bg-gmain flex items-center justify-center h-10 rounded text-bg ">
                افزودن رمز ورود
              </h1>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="w-[45%] relative">
              <input
                className="w-full border-solid border-gmain border-1 p-1 rounded-lg bg-gmelo 	 h-10"
                type="text"
              />
              <p className="bg-gmelo text-text absolute -top-4 right-2">نام خوانوادگی</p>
            </div>
            <div className="w-[45%] relative">
              <input
                className="w-full border-solid border-gmain border-1 p-1 rounded-lg bg-gmelo 	 h-10"
                type="text"
              />
              <p className="bg-gmelo text-text absolute -top-4 right-2">رمز فعلی</p>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="w-[45%] relative">
              <input
                className="w-full border-solid border-gmain border-1 p-1 rounded-lg bg-gmelo 	 h-10"
                type="text"
              />
              <p className="bg-gmelo text-text absolute -top-4 right-2">شماره موبایل</p>
            </div>
            <div className="w-[45%] relative">
              <input
                className="w-full border-solid border-gmain border-1 p-1 rounded-lg bg-gmelo 	 h-10"
                type="text"
              />
              <p className="bg-gmelo text-text absolute -top-4 right-2">رمز جدید</p>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="w-[45%] relative">
              <input
                className="w-full border-solid border-gmain border-1 p-1 rounded-lg bg-gmelo 	 h-10"
                type="text"
              />
              <p className="bg-gmelo text-text absolute -top-4 right-2">ایمیل</p>
            </div>
            <div className="w-[45%] relative">
              <input
                className="w-full border-solid border-gmain border-1 p-1 rounded-lg bg-gmelo 	 h-10"
                type="text"
              />
              <p className="bg-gmelo text-text absolute -top-4 right-2">تکرار</p>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className=" relative w-[35%] md:w-[25%] h-10 border-solid border-gmain border-1 rounded-lg flex aitems-center justify-center ">
              <div className="mt-2 w-full flex items-center justify-around">
                <div className="flex items-center justify-center gap-2">
                  <input type="radio" id="male" name="sex" />
                  <label htmlFor="male">مرد</label>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <input type="radio" id="fmale" name="sex" />
                  <label htmlFor="fmale">زن</label>
                </div>
              </div>
              <p className="bg-gmelo text-text absolute -top-4 right-2">
                جنسیت
              </p>
            </div>
            <div className="w-[45%] h-10 relative">
              <p className="text-text text-xs lg:text-sm">
                *رمزجدید حداقل شامل 8 کاراکتر(a-z) و عدد باشد.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-end mt-5">
            <div className="">
              <button className="w-[150px] h-10 bg-gmain text-bg h-10 rounded-lg ">
                ثبت اطلاعات
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
