import React from 'react'
import SavedBox from '../SavedBox/SavedBox'

export default function SavedSection() {
  return (
    <div className="savedsection p-5">
        <div className="container">
            <div className="content flex items-center gap-3 flex-wrap	">
                <SavedBox />
                <SavedBox />
                <SavedBox />
                <SavedBox />
                <SavedBox />
                <SavedBox />
                <SavedBox />
            </div>
        </div>
    </div>
  )
}
