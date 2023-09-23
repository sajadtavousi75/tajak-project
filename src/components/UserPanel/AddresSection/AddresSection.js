import React from 'react'
import AddresBox from '../AddresBox/AddresBox'

export default function AddresSection() {
  return (
   <div className="addressection w-full p-5">
    <div className="container">
        <div className="content">
            <AddresBox />
            <div className='flex items-center justify-end mt-5'>
            <button className='w-[150px] h-10 bg-gmain text-bg rounded-lg text-end flex items-center justify-center ml-[100px]'>افزودن آدرس جدید</button>
            </div>
        </div>
    </div>
   </div>
  )
}
