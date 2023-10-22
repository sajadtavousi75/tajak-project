import React from 'react'
import Navbar from '../../../components/Navbar/Navbar'
import Footer from '../../../components/Footer/Footer'
import Sidebar from '../../../components/UserPanel/Sidebar.js/Sidebar'
import HistorySection from '../../../components/UserPanel/HistorySection/HistorySection'


export default function Histories() {
  return (
    <>
    <Navbar />
    <section className="main flex font-roya bg-bg pt-[120px]">
      <div className='container my-16 flex'>
      <Sidebar />
      <HistorySection />
      </div>
    </section>
    <footer className='font-roya bg-bg'>
      <Footer />
    </footer>
    </>
  )
}
