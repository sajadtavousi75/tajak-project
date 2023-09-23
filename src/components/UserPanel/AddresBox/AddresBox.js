import React from "react";

export default function AddresBox() {
  return (
    <div className="addresbox w-[80%] mx-auto border-solid border-gmain border-y-2 rounded-lg p-2">
      <div className="flex flex-col gap-3">
        <h1>عنوان</h1>
        <h1>اصفهان ، اصفهان ، خیابان.... ، کوچه.... ، پلاک.. ، طبقه 3</h1>
        <div className="flex gap-3">
          <svg
            width="20"
            height="21"
            viewBox="0 0 20 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.9 13.8012C13.3 14.4012 12.6 14.7012 11.8 14.7012H9C7.3 14.7012 6 13.4012 6 11.7012V8.90117C6 8.10117 6.3 7.30117 6.9 6.80117L12.9 0.701172H3C1.3 0.701172 0 2.00117 0 3.70117V17.7012C0 19.4012 1.3 20.7012 3 20.7012H17C18.7 20.7012 20 19.4012 20 17.7012V7.80117L13.9 13.8012Z"
              fill="#519D9E"
            />
          </svg>
          <h1>تغییر آدرس</h1>
        </div>
      </div>
    </div>
  );
}
