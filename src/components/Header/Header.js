import React from 'react'
import Navbar from '../Navbar/Navbar'
import HeaderSlide from '../HeaderSlide/HeaderSlide'
import HeaderDetail from '../HeaderDetail/HeaderDetail'

export default function Header() {
  return (
    <div className='header font-roya bg-bg'>
        <Navbar />
        <HeaderSlide />
        <HeaderDetail />
    </div>
  )
}
