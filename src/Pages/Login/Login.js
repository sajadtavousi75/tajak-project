import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import LoginContent from '../../components/LoginContent/LoginContent'

export default function Login() {
  return (
    <>
    <Navbar />
    <section className="main font-roya bg-bg pt-[130px]">
      <LoginContent />
    </section>
    <footer className='font-roya bg-bg'>
      <Footer />
    </footer>
    </>
  )
}
