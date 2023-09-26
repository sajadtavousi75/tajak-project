import React from "react";

export default function AllCommentBox() {
  return (
    <div className="allcomment">
      <div className="comments-box  h-auto border-solid border-y-2 border-gmain rounded-lg  flex items-center justify-around">
        <div className="w-[75px]  flex flex-col items-center justify-around">
          <img
            className="w[75px] h-[110px] rounded-lg"
            src="/images/be06d9a3929044ff82e28424a0d1c337.jpg"
            alt=""
          />
        </div>
        <div className=" flex gap-5">
          <div className="w-[255px] flex flex-col justify-center">
            <div className="comments-box__title flex items-center justify-between   text-text 	">
              <p>کاربر</p>
              <p>1402/6/5</p>
            </div>
            <div className="comments-box__score flex bg-text p-1 rounded-b-lg	">
              <img src="/images/star1.png" alt="" />
              <img src="/images/star1.png" alt="" />
              <img src="/images/star1.png" alt="" />
              <img src="/images/star1.png" alt="" />
              <img src="/images/star.png" alt="" />
            </div>
          </div>
          <div className="comments-box__des w-[255px]">
            <p className="py-3 px-1">
              " کتابی که خریدم تجربه‌ای بی‌نظیر از خواندن را به من هدیه کرد.
              همچنان که صفحات را می‌خواندم، همچنان به داستان جذب می‌شدم."
            </p>
          </div>
        </div>
        <div className="w-[75px] h-10 bg-gmain text-bg flex items-center justify-center rounded-lg">
            <span>تایید شده</span>
        </div>
      </div>
    </div>
  );
}
