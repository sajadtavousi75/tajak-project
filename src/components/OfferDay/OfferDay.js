import React from 'react'

export default function OfferDay() {
  return (
    <div className="offerday bg-bg pt-16">
        <div className="container">
            <div className="offerday-content">
                <h1 className='offerday-title text-center text-lg font-bold border-solid border-gmain border-y-2 rounded-lg p-2 text-text'>پیشنهاد روز سایت</h1>
                <div className="offerday-boxes flex flex-col md:flex-row gap-4 justify-between	 p-5 border-solid border-gmain border-b-2 rounded-lg">
                    <div className="offerday-box flex gap-4">
                        <div className="offerday-img">
                            <img className='w-[150px] h-[220px]' src="/images/be06d9a3929044ff82e28424a0d1c337.jpg" alt="" />
                        </div>
                        <div className="offerday-des pt-3 flex flex-col justify-between">
                            <div>
                            <h1 className="offerday-name text-base font-bold text-text">“ داستان قتل عام سرخپوست ها و تشکیل FBI “</h1>
                            <ul className="offerday-list pt-3">
                                <li className="offerday-item text-base text-text">برنده ی جایزه ی آنتونی سال 2018</li>
                                <li className="offerday-item text-base text-text">برنده ی جایزه ی ادگار سال 2018</li>
                                <li className="offerday-item text-base text-text">از کتاب های پرفروش نیویورک تایمز</li>
                            </ul>
                            </div>
                            <div className='flex justify-end pb-2 '>
                            <button className="offerday-btn bg-gmain  p-1 rounded-lg w-[150px] mt-3 text-bg transition duration-300 ease-in-out hover:text-text hover:bg-gmelo ">مشاهده کتاب</button>
                            </div>
                        </div>
                    </div>
                    <div className="offerday-box flex gap-4">
                        <div className="offerday-img">
                            <img className='w-[150px] h-[220px]' src="/images/be06d9a3929044ff82e28424a0d1c337.jpg" alt="" />
                        </div>
                        <div className="offerday-des pt-3 flex flex-col justify-between">
                            <div>
                            <h1 className="offerday-name text-base font-bold text-text">“ داستان قتل عام سرخپوست ها و تشکیل FBI “</h1>
                            <ul className="offerday-list pt-3">
                                <li className="offerday-item text-base text-text">برنده ی جایزه ی آنتونی سال 2018</li>
                                <li className="offerday-item text-base text-text">برنده ی جایزه ی ادگار سال 2018</li>
                                <li className="offerday-item text-base text-text">از کتاب های پرفروش نیویورک تایمز</li>
                            </ul>
                            </div>
                            <div className='flex justify-end pb-2 '>
                            <button className="offerday-btn bg-gmain text-bg p-1 rounded-lg w-[150px] mt-3 transition duration-300 ease-in-out hover:text-text hover:bg-gmelo">مشاهده کتاب</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
