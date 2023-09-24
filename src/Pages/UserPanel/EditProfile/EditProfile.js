import React from 'react'
import Navbar from '../../../components/Navbar/Navbar'
import Footer from '../../../components/Footer/Footer'
import EditSection from '../../../components/UserPanel/EditSection/EditSection'
import Sidebar from '../../../components/UserPanel/Sidebar.js/Sidebar'

export default function EditProfile() {
  return (
    <>
    <Navbar />
    <section className="main flex font-roya bg-bg pt-[120px]">
      <div className="container flex">
      <Sidebar />
      <EditSection />
      </div>
    </section>
    <footer className='font-roya bg-bg'>
      <Footer />
    </footer>
    </>
  )
}
