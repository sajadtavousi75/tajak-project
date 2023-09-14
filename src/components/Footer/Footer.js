import React from 'react'

export default function Footer() {
  return (
    <div className="footer bg-gmelo">
        <img className='w-full' src="/images/Frame 178.png" alt="" />
        <div className="container">
            <div className="footer-content flex-col">
                <div className="footer-content__top py-4 flex items-center justify-between ">
                    <div className='flex flex-col'>
                        <img src="/images/logo.svg" alt="" />
                        <button className='text-text text-sm	font-bold border-solid border-gmain border-y-2 rounded-lg p-2 mt-2'>پرسش های متداول</button>
                    </div>
                    <div className='flex flex-col lg:flex-row items-center justify-between w-[300px] lg:w-[500px]'>
                        <h1 className='text-sm font-bold text-text mt-2'>درخواست افزودن کتاب:</h1>
                        <input className='w-[120px] h-[32px] text-center text-text text-sm bg-bg rounded-lg mt-2' type="text" placeholder='نام کتاب'/>
                        <input className='w-[120px] h-[32px] text-center text-text text-sm bg-bg rounded-lg mt-2' type="text" placeholder='نویسنده'/>
                        <button className='p-2 bg-gmain w-[100px] h-[32px] rounded-lg text-sm flex items-center justify-center mt-2'>ارسال</button>
                    </div>
                    <div className='flex flex-col items-center justify-between w-[100px]'>
                        <div className='flex'>
                            <img src="/images/apple.svg" alt="" />
                            <img src="/images/android.svg" alt="" />
                        </div>
                        <button className='text-text text-sm w-[80px]	font-bold border-solid border-gmain border-y-2 rounded-lg p-2 mt-4'>نصب تاجک</button>
                    </div>
                </div>
                <div className="footer-content__botton flex flex-col md:flex-row items-center justify-between py-4">
                    <div className="footer-content__link flex gap-3 md:flex-col lg:flex-row ">
                        <div>
                        <ul>
                            <li>شرایط و ظوابط</li>
                            <li>شرایط و ظوابط</li>
                            <li>شرایط و ظوابط</li>
                            <li>شرایط و ظوابط</li>
                            <li>شرایط و ظوابط</li>
                        </ul>
                        </div>
                        <div>
                        <ul>
                            <li>شرایط و ظوابط</li>
                            <li>شرایط و ظوابط</li>
                            <li>شرایط و ظوابط</li>
                            <li>شرایط و ظوابط</li>
                            <li>شرایط و ظوابط</li>
                        </ul>
                        </div>
                    </div>
                    <div className=''>
                        <div className="suport flex flex-col w-[450px] lg:flex-row items-center justify-between">
                            <h1 className='text-text font-bold'>پشتیبانی <span className='font-normal	'>(هر روز ساعت 7 الی 20):</span></h1>
                            <h1 className='text-text font-bold'>03146622703</h1>
                            <h1 className='text-text font-bold'>09137375094</h1>
                        </div>
                        <div className="addres flex items-center mt-4 justify-center">
                            <h1 className='text-text font-bold'>آدرس:</h1>
                            <h1 className='mr-8 text-text '>اصفهان - اصفهان - اصفهان - پلاک8</h1>
                        </div>
                        <div className="icon flex mt-4 items-center justify-center">
                            <img src="/images/instagram.svg" alt="" />
                            <img className='mr-2' src="/images/facebook.svg" alt="" />
                            <img className='mr-2' src="/images/telegram.svg" alt="" />
                        </div>
                    </div>
                        <div className="inemad mt-2">
                            <img src="/images/81 1.png" alt="" />
                        </div>
                </div>
            </div>
        </div>
    </div>
  )
}
