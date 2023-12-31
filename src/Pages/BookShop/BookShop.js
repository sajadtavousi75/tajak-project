import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import BookShopContent from '../../components/BookShopContent/BookShopContent'

export default function BookShop() {
  return (
    <>
    <Navbar />
    <section className="main font-roya bg-bg pt-[120px]">
        <div className="container">
        <BookShopContent />
        </div>
    </section>
    <footer className='font-roya bg-bg'>
      <Footer />
    </footer>
    </>
  )
}
