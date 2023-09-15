import React from 'react'
import BookBoxes from '../BookBoxes/BookBoxes'
export default function PopularSection() {
  return (
    <div className="popularsection bg-gmelo mt-24 relative	">
        <div className="container">
            <div className="popularsection-content">
                <h1 className="popularsection-title text-center w-[380px] mx-auto	bg-bg p-2 text-lg	font-bold rounded-b-lg	text-text">محبوب ترین های تاجک</h1>
                <BookBoxes />
            </div>
        </div>
    </div>
  )
}
