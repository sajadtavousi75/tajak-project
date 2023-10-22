import React from 'react'
import Navbar from '../../../components/Navbar/Navbar'
import Footer from '../../../components/Footer/Footer'
import Sidebar from '../../../components/UserPanel/Sidebar.js/Sidebar'
import AddresSection from '../../../components/UserPanel/AddresSection/AddresSection'

export default function Addres() {
  return (
    <>
    <Navbar />
    <section className="main flex font-roya bg-bg pt-[120px]">
      <div className="container my-16  flex">
      <Sidebar />
      <AddresSection />
      </div>
    </section>
    <footer className='font-roya bg-bg'>
      <Footer />
    </footer>
    </>
  )
}
