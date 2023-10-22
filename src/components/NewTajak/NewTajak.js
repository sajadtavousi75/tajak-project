import React from 'react'
import BookBoxes from '../BookBoxes/BookBoxes'

export default function NewTajak() {
  return (
    <div className="newtajak bg-gmelo mt-16 relative	">
        <div className="container">
            <div className="newtajak-content">
                <h1 className="newtajak-title text-center w-[380px] mx-auto	bg-bg p-2 text-lg	font-bold rounded-b-lg	text-text">جدیدترین های تاجک</h1>
                <BookBoxes />
            </div>
        </div>
    </div>
  )
}
