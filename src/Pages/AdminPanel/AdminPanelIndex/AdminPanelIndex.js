import React from "react";
import BookBox from "../../../components/BookBox/BookBox";

export default function AdminPanelIndex() {
  return (
    <div className="adminpanelindex  w-full">
      <div className="container pt-16">
        <div className="h-[400px] bg-gmelo rounded-lg w-full"></div>
        <div className="h-[400px] bg-gmelo mt-5 rounded-lg"></div>
        <div className=" bg-gmelo mt-5 rounded-lg pb-3">
          <h1 className="w-[380px] h-10 mx-auto bg-bg flex items-center justify-center rounded-b-lg text-text font-bold shadow-lg">
            بیشترین بازدیدهای سایت
          </h1>
          <div className="boxes flex items-center justify-around mt-5">
            <BookBox />
            <BookBox />
            <BookBox />
            <BookBox />
          </div>
        </div>
        <div className="details bg-gmelo mt-5 rounded-lg pb-3">
          <div className="top flex items-center justify-around py-5">
            <div className="border-solid border-gmain border-x-2 rounded-lg p-3">
              <div className="flex items-center justify-between">
                <h1>تلفن پشتیبانی ثبت شده :</h1>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.8 15.4H9C8.4 15.4 8 15 8 14.4V11.6C8 11.3 8.1 11.1 8.3 10.9L18.9 0.3C19.1 0.1 19.3 0 19.6 0C19.9 0 20.1 0.1 20.3 0.3L23.1 3.1C23.5 3.5 23.5 4.1 23.1 4.5L12.5 15.1C12.3 15.3 12.1 15.4 11.8 15.4Z"
                    fill="#519D9E"
                  />
                  <path
                    d="M13.9 16.5004C13.3 17.1004 12.6 17.4004 11.8 17.4004H9C7.3 17.4004 6 16.1004 6 14.4004V11.6004C6 10.8004 6.3 10.0004 6.9 9.50039L12.9 3.40039H3C1.3 3.40039 0 4.70039 0 6.40039V20.4004C0 22.1004 1.3 23.4004 3 23.4004H17C18.7 23.4004 20 22.1004 20 20.4004V10.5004L13.9 16.5004Z"
                    fill="#519D9E"
                  />
                </svg>
              </div>
              <div className="flex flex-col items-end mt-3">
              <span>+98 000 0000 000</span>
              <span>031-00000000</span>
              </div>
            </div>
            <div>
              <div>
                <h1>آدرس ثبت شده :</h1>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.8 15.4H9C8.4 15.4 8 15 8 14.4V11.6C8 11.3 8.1 11.1 8.3 10.9L18.9 0.3C19.1 0.1 19.3 0 19.6 0C19.9 0 20.1 0.1 20.3 0.3L23.1 3.1C23.5 3.5 23.5 4.1 23.1 4.5L12.5 15.1C12.3 15.3 12.1 15.4 11.8 15.4Z"
                    fill="#519D9E"
                  />
                  <path
                    d="M13.9 16.5004C13.3 17.1004 12.6 17.4004 11.8 17.4004H9C7.3 17.4004 6 16.1004 6 14.4004V11.6004C6 10.8004 6.3 10.0004 6.9 9.50039L12.9 3.40039H3C1.3 3.40039 0 4.70039 0 6.40039V20.4004C0 22.1004 1.3 23.4004 3 23.4004H17C18.7 23.4004 20 22.1004 20 20.4004V10.5004L13.9 16.5004Z"
                    fill="#519D9E"
                  />
                </svg>
              </div>
              <span>اصفهان - اصفهان - اصفهان - اصفهان - پلاک 8</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
