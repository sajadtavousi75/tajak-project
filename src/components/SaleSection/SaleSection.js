import React from 'react'
import BookBoxes from '../BookBoxes/BookBoxes'

export default function SaleSection() {
  return (
    <div className="salesection bg-gmelo mt-16 relative	">
        <div className="container">
            <div className="salesection-content">
                <h1 className="salesection-title text-center w-[380px] mx-auto	bg-bg p-2 text-lg	font-bold rounded-b-lg	text-text">پر فروش های هفته</h1>
                <BookBoxes />
            </div>
        </div>
    </div>
  )
}
