import React from 'react'

export default function OrderContent() {
  return (
    <div className="order-content h-[100vh] pt-14">
        <div className="table ">
        <table className=" flex flex-col gap-3 mx-auto">
          <thead className="w-full rounded-lg bg-gmelo">
            <tr className=" flex items-center justify-around w-[90%] mx-auto font-bold">
                <th></th>
              <th className="text-center bg-gmelo">کاربر</th>
              <th className="text-center bg-gmelo">نام کتاب</th>
              <th className="text-center bg-gmelo">نویسنده</th>
            </tr>
          </thead>
          <tbody className="w-full flex flex-col gap-3 bg-gmelo p-2 rounded-lg">
            <tr className="flex items-center justify-around border-solid border-gmain border-y-2 w-[90%] mx-auto">
                <td>1</td>
              <td className="text-center bg-gmelo  ">کاربر</td>
              <td className="text-center bg-gmelo">نام کتاب</td>
              <td className="text-center bg-gmelo">نویسنده</td>
            </tr>
            <tr className="flex items-center justify-around border-solid border-gmain border-y-2 w-[90%] mx-auto">
                <td>1</td>
              <td className="text-center bg-gmelo  ">کاربر</td>
              <td className="text-center bg-gmelo">نام کتاب</td>
              <td className="text-center bg-gmelo">نویسنده</td>
            </tr>
            <tr className="flex items-center justify-around border-solid border-gmain border-y-2 w-[90%] mx-auto">
                <td>1</td>
              <td className="text-center bg-gmelo  ">کاربر</td>
              <td className="text-center bg-gmelo">نام کتاب</td>
              <td className="text-center bg-gmelo">نویسنده</td>
            </tr>
            <tr className="flex items-center justify-around border-solid border-gmain border-y-2 w-[90%] mx-auto">
                <td>1</td>
              <td className="text-center bg-gmelo  ">کاربر</td>
              <td className="text-center bg-gmelo">نام کتاب</td>
              <td className="text-center bg-gmelo">نویسنده</td>
            </tr>
            <tr className="flex items-center justify-around border-solid border-gmain border-y-2 w-[90%] mx-auto">
                <td>1</td>
              <td className="text-center bg-gmelo  ">کاربر</td>
              <td className="text-center bg-gmelo">نام کتاب</td>
              <td className="text-center bg-gmelo">نویسنده</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
