import React from "react";

export default function EditSection() {
  return (
    <div className="editsection w-full">
      <div className="container">
        <div className="editcontent flex w-full aiems-center p-5">
          <div className="flex items-center justify-center gap-3 w-full">
            <div className="editcontent-details">
              <div className="form w-[180px] md:w-[200px] lg:w-[300px]">
                <form className="w-full" action="">
                  <div className="mb-4 relative">
                    <input
                      className="w-full border-solid border-gmain border-1 p-1 rounded-lg bg-bg 	 h-10"
                      type="text"
                    />
                    <p className="bg-bg text-text absolute -top-4 right-2">
                      نام
                    </p>
                  </div>
                  <div className="mb-4 relative">
                    <input
                      className="w-full border-solid border-gmain border-1 p-1 rounded-lg bg-bg h-10"
                      type="text"
                    />
                    <p className="bg-bg text-text absolute -top-4 right-2">
                      نام خوانوادگی
                    </p>
                  </div>
                  <div className="mb-4 relative">
                    <input
                      className="w-full border-solid border-gmain border-1 p-1 rounded-lg bg-bg h-10"
                      type="text"
                    />
                    <p className="bg-bg text-text absolute -top-4 right-2">
                      شماره موبایل
                    </p>
                  </div>
                  <div className="mb-4 relative">
                    <input
                      className="w-full border-solid border-gmain border-1 p-1 rounded-lg bg-bg h-10"
                      type="text"
                    />
                    <p className="bg-bg text-text absolute -top-4 right-2">
                      ایمیل
                    </p>
                  </div>
                  <div className="mb-4 relative w-[170px] h-10 border-solid border-gmain border-1 rounded-lg flex aitems-center justify-center ">
                    <div className="mt-2 w-full flex items-center justify-around">
                    <div className="flex items-center justify-center gap-2">
                    <input type="radio" id="male" name="sex"/>
                    <label htmlFor="male">مرد</label>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                    <input type="radio" id="fmale" name="sex"/>
                    <label htmlFor="fmale">زن</label>
                    </div>
                    </div>
                    <p className="bg-bg text-text absolute -top-4 right-2">
                    جنسیت
                    </p>
                  </div>
                </form>
              </div>
            </div>
            <div className="editcontent-password">
              <div className="form w-[180px] md:w-[200px] lg:w-[300px]">
                <div className="mb-4 mt-4">
                <h1 className="w-full bg-gmain flex items-center justify-center h-10 rounded text-bg ">
                  افزودن رمز ورود
                </h1>
                </div>
                <form className="w-full" action="">
                  <div className="mb-4 relative">
                    <input
                      className="w-full border-solid border-gmain border-1 p-1 rounded-lg bg-bg  h-10	"
                      type="text"
                    />
                    <p className="bg-bg text-text absolute -top-4 right-2">
                      رمز فعلی
                    </p>
                  </div>
                  <div className="mb-4 relative">
                    <input
                      className="w-full border-solid border-gmain border-1 p-1 rounded-lg bg-bg h-10"
                      type="text"
                    />
                    <p className="bg-bg text-text absolute -top-4 right-2">
                      رمز جدید
                    </p>
                  </div>
                  <div className="mb-4 relative">
                    <input
                      className="w-full border-solid border-gmain border-1 p-1 rounded-lg bg-bg h-10"
                      type="text"
                    />
                    <p className="bg-bg text-text absolute -top-4 right-2">
                      تکرار
                    </p>
                  </div>
                  <p className="text-text text-xs lg:text-sm">*رمزجدید حداقل شامل 8 کاراکتر(a-z) و عدد باشد.</p>
                  <div className="mb-4">
                    <button className="w-[50%] bg-gmain text-bg h-10 rounded-lg ">
                      ثبت اطلاعات
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
