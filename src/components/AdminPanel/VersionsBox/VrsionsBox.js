import React from 'react'
import PrintedVersion from '../PrintedVersion/PrintedVersion'
import DigitalVersion from '../DigitalVersion/DigitalVersion'
import AudioVersion from '../AudioVersion/AudioVersion'

export default function VrsionsBox() {
  return (
    <div className="vrsions-content bg-gmelo rounded-lg pb-5 mt-5 ">
        <h1 className="w-[380px] h-10 mx-auto flex items-center justify-center bg-bg text-text font-bold rounded-b-lg shadow-lg">
        4- ثبت مشخصات و نوع نسخه ها
      </h1>
      <div className="version-boxes">
        <PrintedVersion />
        <DigitalVersion />
        <AudioVersion />
      </div>
    </div>
  )
}
