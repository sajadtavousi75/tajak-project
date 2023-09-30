import React from 'react'
import CategoryContent from '../CategoryContent/CategoryContent'
import DetailsContentBook from '../DetailsContentBook/DetailsContentBook'
import AboutBook from '../AboutBook/AboutBook'
import VrsionsBox from '../VersionsBox/VrsionsBox'


export default function AddProductContent() {
  return (
    <div className="addproduct-content pt-14">
        <CategoryContent />
        <DetailsContentBook />
        <AboutBook />
        <VrsionsBox />
    </div>
  )
}
