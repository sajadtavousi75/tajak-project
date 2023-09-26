import React from "react";
import './UserContent.css'

export default function UserContent() {
  return (
    <div className="usercontent h-[100vh] pt-14 ">
      <div className="table ">
        <table className=" flex flex-col gap-3 mx-auto">
          <thead className="w-full rounded-lg bg-gmelo">
            <tr className=" flex items-center justify-around w-[90%] mx-auto font-bold">
                <th></th>
              <th className="text-center bg-gmelo">نام کاربری</th>
              <th className="text-center bg-gmelo">نام</th>
              <th className="text-center bg-gmelo">نام خوانوادگی</th>
              <th className="text-center bg-gmelo">شماره موبایل</th>
            </tr>
          </thead>
          <tbody className="w-full flex flex-col gap-3 bg-gmelo p-2 rounded-lg">
            <tr className="flex items-center justify-around border-solid border-gmain border-y-2 w-[90%] mx-auto">
                <td>1</td>
              <td className="text-center bg-gmelo  ">نام کاربری</td>
              <td className="text-center bg-gmelo">نام</td>
              <td className="text-center bg-gmelo">نام خوانوادگی</td>
              <td className="text-center bg-gmelo">شماره موبایل</td>
            </tr>
            <tr className="flex items-center justify-around border-solid border-gmain border-y-2 w-[90%] mx-auto">
                <td>1</td>
              <td className="text-center bg-gmelo ">نام کاربری</td>
              <td className="text-center bg-gmelo">نام</td>
              <td className="text-center bg-gmelo">نام خوانوادگی</td>
              <td className="text-center bg-gmelo">شماره موبایل</td>
            </tr>
            <tr className="flex items-center justify-around border-solid border-gmain border-y-2 w-[90%] mx-auto">
                <td>1</td>
              <td className="text-center bg-gmelo ">نام کاربری</td>
              <td className="text-center bg-gmelo">نام</td>
              <td className="text-center bg-gmelo">نام خوانوادگی</td>
              <td className="text-center bg-gmelo">شماره موبایل</td>
            </tr>
            <tr className="flex items-center justify-around border-solid border-gmain border-y-2 w-[90%] mx-auto">
                <td>1</td>
              <td className="text-center bg-gmelo ">نام کاربری</td>
              <td className="text-center bg-gmelo">نام</td>
              <td className="text-center bg-gmelo">نام خوانوادگی</td>
              <td className="text-center bg-gmelo">شماره موبایل</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
