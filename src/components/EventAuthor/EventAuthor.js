import React from 'react'
import BookBox from '../BookBox/BookBox'

export default function EventAuthor() {
  return (
    <div className="eventauthor bg-gmelo">
        <div className="container">
            <div className="eventauthor-content">
                <h1 className="eventauthor-title w-[380px] h-[40px] mx-auto flex items-center justify-center bg-bg font-bold text-xs rounded-b-lg shadow-lg md:text-sm ">آثار دارن هاردی</h1>
                <div className="eventauthor-boxes flex flex-wrap items-center justify-center py-4 gap-3">
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
  )
}
