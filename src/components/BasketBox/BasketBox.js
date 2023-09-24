import React from 'react'

export default function BasketBox() {
  return (
    <div className="basketbox">
        <div className="content flex items-center justify-between">
            <div className="details flex items-center gap-2 w-[300px]">
                <div className="img flex items-center gap-1">
                    <div className='w-8 h-20 bg-gmain flex items-center justify-center rounded-lg'>
                    <img className='' src="/images/madalimg.png" alt="" />
                    </div>
                    <img className='w-[50px] h-20 rounded-lg' src="/images/be06d9a3929044ff82e28424a0d1c337.jpg" alt="" />
                </div>
                <div className="name">
                    <h1>نام کتاب</h1>
                    <h1>نام نویسنده</h1>
                </div>
            </div>
            <div className="count">
                <div>
                    <button>+</button>
                    <span>1</span>
                    <button>-</button>
                </div>
                <div>
                    <img src="/images/deletprofile.png" alt="" />
                </div>
            </div>
            <div className="price">
                <span>68 500 تومان</span>
                <span>68 500 تومان</span>
            </div>
        </div>
    </div>
  )
}
