import React from "react";

export default function NotFound() {
  return (
    <div className="notfound mt-[200px]">
      <div className="container">
        <div className="content flex items-center justify-center">
          <svg className="w-[90px] h-20 opacity-20 ml-2"
            width="25"
            height="21"
            viewBox="0 0 25 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M14.1504 4.5C13.2643 4.5 12.5459 5.17158 12.5459 6H15.7549C15.7549 5.17158 15.0365 4.5 14.1504 4.5ZM11.4763 6H10.823C10.0094 6 9.32461 6.56932 9.22955 7.32474L8.41159 13.8248C8.29938 14.7165 9.04464 15.5 10.0051 15.5H18.2957C19.2562 15.5 20.0014 14.7165 19.8892 13.8248L19.0712 7.32474C18.9762 6.56932 18.2914 6 17.4778 6H16.8245C16.8245 4.61929 15.6273 3.5 14.1504 3.5C12.6735 3.5 11.4763 4.61929 11.4763 6Z"
              fill="#519D9E"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M14.0607 0.00407104C8.04152 -0.159231 3.11026 4.61151 3.11026 10.502H0.993483C0.461333 10.502 0.201171 11.1319 0.579589 11.4935L3.87892 14.7595C4.11543 14.9928 4.48202 14.9928 4.71853 14.7595L8.01786 11.4935C8.38446 11.1319 8.1243 10.502 7.59214 10.502H5.47537C5.47537 5.95292 9.2359 2.27863 13.8715 2.33695C18.2706 2.39527 21.972 6.04623 22.0312 10.3854C22.0903 14.9462 18.3652 18.6671 13.7533 18.6671C11.8493 18.6671 10.0873 18.0256 8.69192 16.9408C8.2189 16.5792 7.55667 16.6142 7.13095 17.0341C6.63427 17.524 6.66975 18.3522 7.22555 18.7721C9.02304 20.1718 11.2817 21 13.7533 21C19.7252 21 24.5618 16.1359 24.3963 10.1988C24.2425 4.72816 19.6069 0.155708 14.0607 0.00407104Z"
              fill="#519D9E"
            />
          </svg>
          <div>
            <h1 className="font-bold border-solid border-gmain border-r-4 h-20 flex items-center p-2">
              تا کنون ثبت سفارشی انجام نشده است.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}