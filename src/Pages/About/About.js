import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import AboutContent from '../../components/AboutContent/AboutContent'
import Questions from '../../components/Questions/Questions'

export default function About() {
  return (
    <>
    <Navbar />
    <section className="main font-roya bg-bg pt-[130px]">
      <AboutContent />
      <Questions />
    </section>
    <footer className='font-roya bg-bg'>
      <Footer />
    </footer>
    </>
  )
}
