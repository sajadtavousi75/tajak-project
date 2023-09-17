import React from 'react'

export default function BookBox() {
  return (
    <>
    <div className="book-box p-2	   w-[160px] rounded-lg transition duration-300 ease-in-out hover:bg-gmain hover:text-bg hover:transition duration-300 ease-in-out">
          <div className="relative">
          <img
            src="/images/be06d9a3929044ff82e28424a0d1c337.jpg"
            alt=""
            className="book-box-img w-[150px] h-[220px] rounded-lg mx-auto 	"
          />
          <div className="book-box-img__icon w-[150px] bg-gmainhover rounded-b-lg	 h-4 mx-auto flex items-center justify-between	absolute bottom-0 left-0  p-3	hover:transition duration-100 ease-in-out">
            <img className="w-[30px] 	" src="/images/slider/Vector.png" alt="" />
            <img className="w-[30px]" src="/images/slider/Vector1.png" alt="" />
            <img className="w-[30px]" src="/images/slider/Vector2.png" alt="" />
          </div>
          </div>
          <h1 className="book-box__title font-bold text-end mr-4 mt-2">کتاب</h1>
          <h3 className="book-box__name text-end mr-4">کتاب</h3>
          <h1 className="book-box__price text-start font-bold ml-4">10$</h1>
        </div>
    </>
  )
}
