import React from "react";

export default function AdminCommentBox() {
  return (
    <div className="comment-box">
      <div className="comments-box w-[380px] h-auto border-solid border-y-2 border-gmain rounded-lg  flex items-center justify-around">
        <div className="w-[75px] h-[230px] flex flex-col items-center justify-around">
            <img className="w[75px] h-[110px] rounded-lg" src="/images/be06d9a3929044ff82e28424a0d1c337.jpg" alt="" />
            <div className="icon flex items-center gap-2 ">
                <button><img src="/images/Frame 561.png" alt="" /></button>
                <button><img src="/images/Frame 560.png" alt="" /></button>
            </div>
        </div>
        <div className="w-[255px]">
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
        <div className="comments-box__des">
          <p className="py-3 px-1">
            " کتابی که خریدم تجربه‌ای بی‌نظیر از خواندن را به من هدیه کرد.
            همچنان که صفحات را می‌خواندم، همچنان به داستان جذب می‌شدم."
          </p>
        </div>
        </div>
      </div>
    </div>
  );
}
