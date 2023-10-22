import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import RegisterContent from '../../components/RegisterContent/RegisterContent'

export default function Register() {
  return (
    <>
    <Navbar />
    <section className="main font-roya bg-bg pt-[120px]">
      <RegisterContent />
    </section>
    <footer className='font-roya bg-bg'>
      <Footer />
    </footer>
    </>
  )
}
