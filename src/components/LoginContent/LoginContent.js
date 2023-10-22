import React from "react";

export default function LoginContent() {
  return (
    <div className="logincontent py-16">
      <div className="container">
        <div className="content flex items-center justify-center gap-5">
          <div className="img  ">
            <img src="/images/imglogin.png" alt="" />
          </div>
          <div className="form w-[270px] h-[380px]">
            <p className="mb-3 text-text font-bold">خوش اومدی به تاجک</p>
            <h1 className="w-full bg-gmain flex items-center justify-center h-10 rounded text-bg mb-5">
              ورود به سایت
            </h1>
            <form className="w-full" action="">
              <div className="mb-4 relative">
                <input
                  className="w-full border-solid border-gmain border-1 p-1 rounded-lg bg-bg 	"
                  type="text"
                />
                <p className="bg-bg text-text absolute -top-4 right-2">شماره موبایل</p>
              </div>
              <div className="mb-5 relative">
                <input
                  className="w-full border-solid border-gmain border-1 p-1 rounded-lg bg-bg"
                  type="text"
                />
                <p className="bg-bg text-text absolute -top-4 right-2">رمز ورود</p>
              </div>
              <div className="mb-5">
                <button className="w-[50%] bg-gmain text-bg h-10 rounded-lg ">
                  ورود
                </button>
              </div>
              <p>
                اگر حساب کاربری ندارید{" "}
                <a className="text-gmain" href="">
                  ثبت نام
                </a>{" "}
                کنید
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
