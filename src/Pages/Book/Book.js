import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import BookContent from '../../components/BookContent/BookContent'

export default function Book() {
  return (
    <>
    <Navbar />
    <section className="main font-roya bg-bg pt-[130px]">
      <BookContent />
    </section>
    <footer className='font-roya bg-bg'>
      <Footer />
    </footer>
    </>
  )
}
