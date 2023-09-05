import React from 'react'
import BookBoxes from '../BookBoxes/BookBoxes'

export default function NewTajak() {
  return (
    <div className="newtajak ">
        <div className="container">
            <div className="newtajak-content">
                <h1 className="newtajak-title">جدیدترین های تاجک</h1>
                <BookBoxes />
            </div>
        </div>
    </div>
  )
}
