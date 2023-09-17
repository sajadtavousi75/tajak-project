import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import AboutaAuthor from '../../components/AboutAuthor/AboutaAuthor'
import EventAuthor from '../../components/EventAuthor/EventAuthor'

export default function Author() {
  return (
    <>
    <Navbar />
    <section className="main font-roya bg-bg pt-[130px]">
      <AboutaAuthor />
      <EventAuthor />
    </section>
    <footer className='font-roya bg-bg'>
      <Footer />
    </footer>
    </>
  )
}
