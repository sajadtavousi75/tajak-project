import React from 'react'
import BasketBoxes from '../BasketBoxes/BasketBoxes'
import BasketPay from '../BasketPay/BasketPay'

export default function BasketSection() {
  return (
    <div className="basketsection">
        <div className="content flex  justify-between">
            <BasketBoxes />
            <BasketPay />
        </div>
    </div>
  )
}
