import React from 'react'
import HistoryBox from '../HistoryBox/HistoryBox'
import NotFound from '../NotFound/NotFound'

export default function HistorySection() {
  return (
    <div className="historysection bg-gmelo rounded-lg  w-full  mx-auto">
        <div className="container">
            <div className="historysection-content flex flex-col gap-3 p-3">
                <HistoryBox />
                <HistoryBox />
                {/* <NotFound /> */}
            </div>
        </div>
    </div>
  )
}
