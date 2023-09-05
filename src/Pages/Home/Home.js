import React from 'react'
import Header from '../../components/Header/Header'
import OfferDay from '../../components/OfferDay/OfferDay'
import NewTajak from '../../components/NewTajak/NewTajak'

export default function Home() {
  return (
    <>
    <Header />
    <section className="main font-roya bg-bg ">
      <OfferDay />
      <NewTajak />
    </section>
    </>
  )
}
