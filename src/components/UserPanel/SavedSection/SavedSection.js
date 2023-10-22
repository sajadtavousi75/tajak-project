import React from 'react'
import SavedBox from '../SavedBox/SavedBox'

export default function SavedSection() {
  return (
    <div className="savedsection bg-gmelo  rounded-lg w-full ">
        <div className="container">
            <div className="content flex items-center justify-center gap-3 flex-wrap	p-3">
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
