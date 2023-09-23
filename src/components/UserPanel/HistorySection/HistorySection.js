import React from 'react'
import HistoryBox from '../HistoryBox/HistoryBox'
import NotFound from '../NotFound/NotFound'

export default function HistorySection() {
  return (
    <div className="historysection w-full p-3 w-auto mx-auto">
        <div className="container">
            <div className="historysection-content flex flex-col gap-3">
                <HistoryBox />
                <HistoryBox />
                {/* <NotFound /> */}
            </div>
        </div>
    </div>
  )
}
