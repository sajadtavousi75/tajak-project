import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import BookContent from '../../components/BookContent/BookContent'
import AboutBook from '../../components/AboutBook/AboutBook'
import PopularSection from '../../components/PopularSection/PopularSection'
import NewTajak from '../../components/NewTajak/NewTajak'
import Comments from '../../components/Comments/Comments'

export default function Book() {
  return (
    <>
    <Navbar />
    <section className="main font-roya bg-bg pt-[120px]">
      <BookContent />
      <AboutBook />
      <PopularSection />
      <NewTajak />
      <Comments />
    </section>
    <footer className='font-roya bg-bg'>
      <Footer />
    </footer>
    </>
  )
}
