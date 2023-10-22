import React from 'react'
import BookBoxes from '../BookBoxes/BookBoxes'

export default function OfferTajak() {
  return (
    <div className="offertajak bg-gmelo mt-16 relative">
        <div className="container">
            <div className="offertajak-content">
                <h1 className="offertajak-title text-center w-[380px] mx-auto	bg-bg p-2 text-lg	font-bold rounded-b-lg	text-text">تخفیف های تاجک</h1>
                <BookBoxes />
            </div>
        </div>
    </div>
  )
}
