import React from "react";

export default function RegisterContent() {
  return (
    <div className="registercontent  py-16 ">
      <div className="container">
        <div className="content flex items-center justify-center gap-5">
          <div className="img  ">
            <img src="/images/imgregister.png" alt="" />
          </div>
          <div className="form w-[270px] h-[470px]">
            <h1 className="w-full bg-gmain flex items-center justify-center h-10 rounded text-bg mb-5">
              ثبت نام
            </h1>
            <form className="w-full" action="">
              <div className="mb-4 relative">
                <input
                  className="w-full border-solid border-gmain border-1 p-1 rounded-lg bg-bg"
                  type="text"
                />
                <p className="bg-bg text-text absolute -top-4 right-2">نام کاربری</p>
              </div>
              <div className="mb-4 relative">
                <input
                  className="w-full border-solid border-gmain border-1 p-1 rounded-lg bg-bg"
                  type="text"
                />
                <p className="bg-bg text-text absolute -top-4 right-2">شماره موبایل</p>
              </div>
              <div className="mb-4 relative">
                <input
                  className="w-full border-solid border-gmain border-1 p-1 rounded-lg bg-bg"
                  type="text"
                />
                <p className="bg-bg text-text absolute -top-4 right-2">رمز ورود</p>
              </div>
              <div className="mb-5 relative">
                <input
                  className="w-full border-solid border-gmain border-1 p-1 rounded-lg bg-bg"
                  type="text"
                />
                <p className="bg-bg text-text absolute -top-4 right-2">تکرار</p>
              </div>
              <div className="mb-5">
                <button className="w-[50%] bg-gmain text-bg h-10 rounded-lg ">
                  ثبت نام
                </button>
              </div>
              <p>
                قبلا ثبت نام کرده ام ،{" "}
                <a className="text-gmain" href="">
                  ورود{" "}
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
