import React from 'react'
import Navbar from '../../../components/Navbar/Navbar'
import Footer from '../../../components/Footer/Footer'
import Sidebar from '../../../components/UserPanel/Sidebar.js/Sidebar'
import SavedSection from '../../../components/UserPanel/SavedSection/SavedSection'

export default function Saved() {
  return (
    <>
    <Navbar />
    <section className="main flex font-roya bg-bg pt-[120px]">
      <div className="container flex">
      <Sidebar />
      <SavedSection />
      </div>
    </section>
    <footer className='font-roya bg-bg'>
      <Footer />
    </footer>
    </>
  )
}
