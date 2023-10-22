import React,{useState} from 'react'
import BookBox from '../BookBox/BookBox'

export default function BookShopContent() {
    const [showSidebar , setShowSidebar] = useState(false)

    const handelSidebar = () =>{
        setShowSidebar(true)
    }

    const closeSidebar = () =>{
        setShowSidebar(false)
    }

  return (
    <div className="bookshopcontent py-16   h-full ">
        <div className={`${showSidebar ? 'translate-x-0' : 'translate-x-[240px]'} sidebar transition-all duration-700 absolute top-30 w-[240px] h-full bg-bg z-10 	  	 md:translate-x-0`}>
            <div className="container">
                <div className="sidebar-content p-3">
                    <img onClick={closeSidebar}  className='cursor-pointer md:hidden' src="/images/filter.png" alt="" />
                    <div className="sidebar-title border-solid border-gmain border-2 rounded-lg flex items-center justify-center mt-5 text-text font-bold">
                        <span>نام دسته</span>
                    </div>
                    <div className="search-author">
                        <h1 className='bg-gmain text-bg text-center p-1 rounded-lg font-bold mt-3'>نویسندگان</h1>
                        <div className='border-solid border-gmain border-x-2 rounded-lg p-2'>
                            <form className=''>
                            <div className='flex items-center gap-2'>
                            <input type="checkbox" id='value1'/>
                            <label htmlFor="value1">فئودور داستایوفسکی</label>
                            </div>
                            <div className='flex items-center gap-2'>
                            <input type="checkbox" id='value2'/>
                            <label htmlFor="value2">بزرگ علوی</label>
                            </div>
                            <div className='flex items-center gap-2'>
                            <input type="checkbox" id='value3'/>
                            <label htmlFor="value3">آدام زامویسکی</label>
                            </div>
                            <div className='flex items-center gap-2'>
                            <input type="checkbox" id='value4'/>
                            <label htmlFor="value4">صادق هدایت</label>
                            </div>
                            </form>
                        </div>
                    </div>
                    <div className="search-author">
                        <h1 className='bg-gmain text-bg text-center p-1 rounded-lg font-bold mt-3'>انتشارات</h1>
                        <div className='border-solid border-gmain border-x-2 rounded-lg p-2'>
                            <form >
                            <div className='flex items-center gap-2'>
                            <input type="checkbox" id='value1'/>
                            <label htmlFor="value1">فئودور داستایوفسکی</label>
                            </div>
                            <div className='flex items-center gap-2'>
                            <input type="checkbox" id='value2'/>
                            <label htmlFor="value2">بزرگ علوی</label>
                            </div>
                            <div className='flex items-center gap-2'>
                            <input type="checkbox" id='value3'/>
                            <label htmlFor="value3">آدام زامویسکی</label>
                            </div>
                            <div className='flex items-center gap-2'>
                            <input type="checkbox" id='value4'/>
                            <label htmlFor="value4">صادق هدایت</label>
                            </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="main-shop   z-0 md:mr-[240px] 	">
            <div className="container ">
                <div className="mainshop-search flex items-center  gap-16 md:justify-center">
                    <img onClick={handelSidebar} className='cursor-pointer md:hidden' src="/images/filter.png" alt="" />
                    <div className='flex items-center  gap-2  '>
                    <button className='border-solid border-gmain border-2 rounded-lg text-text p-1 text-xs font-bold md:text-sm'>محبوبترین ها</button>
                    <button className='border-solid border-gmain border-2 rounded-lg text-text p-1 text-xs font-bold md:text-sm'>جدیدترین ها</button>
                    <button className='border-solid border-gmain border-2 rounded-lg text-text p-1 text-xs font-bold md:text-sm'>تخفیف ها</button>
                    </div>
                </div>
                <div className="mainshop-boxes bg-gmelo mt-3 rounded-lg">
                    <div className="mainshop-box flex flex-wrap items-center justify-center gap-3 py-4">
                        <BookBox />
                        <BookBox />
                        <BookBox />
                        <BookBox />
                        <BookBox />
                        <BookBox />
                        <BookBox />
                        <BookBox />
                        <BookBox />
                        <BookBox />
                        <BookBox />
                        <BookBox />
                        <BookBox />
                        <BookBox />
                        <BookBox />
                        <BookBox />
                        <BookBox />
                        <BookBox />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
