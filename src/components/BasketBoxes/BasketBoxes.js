import React from 'react'
import BasketBox from '../BasketBox/BasketBox'

export default function BasketBoxes() {
  return (
    <div className="basketboxes w-[800px] bg-gmelo rounded-lg p-3 my-5">
        <div className="content flex flex-col gap-2">
            <BasketBox />
            
        </div>
    </div>
  )
}
