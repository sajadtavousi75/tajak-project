import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import BasketSection from '../../components/BasketSection/BasketSection'

export default function Basket() {
  return (
    <>
    <Navbar />
    <section className="main font-roya bg-bg pt-[130px]">
      <div className="container">
        <BasketSection />
      </div>
    </section>
    <footer className='font-roya bg-bg'>
      <Footer />
    </footer>
    </>
  )
}
