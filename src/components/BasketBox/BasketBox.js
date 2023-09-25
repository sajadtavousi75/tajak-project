import React from 'react'

export default function BasketBox() {
  return (
    <div className="basketbox border-solid border-gmain border-1  p-2 rounded-lg">
        <div className="content flex items-center justify-between">
            <div className="details flex items-center gap-3 w-[300px]">
                <div className="img flex items-center gap-1">
                    <div className='w-8 h-20 bg-gmain flex items-center justify-center rounded-lg'>
                    <img className='' src="/images/madalimg.png" alt="" />
                    </div>
                    <img className='w-[50px] h-20 rounded-lg' src="/images/be06d9a3929044ff82e28424a0d1c337.jpg" alt="" />
                </div>
                <div className="name">
                    <h1 className='text-text font-bold'>نام کتاب</h1>
                    <h1 className='text-text font-bold'>نام نویسنده</h1>
                </div>
            </div>
            <div className="count w-[150px]">
                <div className='w-full flex items-center justify-around font-bold'>
                    <button className='text-gmain text-2xl'>+</button>
                    <span>1</span>
                    <button className='text-gmain text-2xl'>-</button>
                </div>
                <div className='w-full flex items-center justify-center'>
                    <img src="/images/deletprofile.png" alt="" />
                </div>
            </div>
            <div className="price flex flex-col items-center justify-center">
                <span>68 500 تومان</span>
                <span className='font-bold text-2xl'>68 500 تومان</span>
            </div>
        </div>
    </div>
  )
}
