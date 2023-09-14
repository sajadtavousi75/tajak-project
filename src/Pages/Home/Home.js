import React from 'react'
import Header from '../../components/Header/Header'
import OfferDay from '../../components/OfferDay/OfferDay'
import NewTajak from '../../components/NewTajak/NewTajak'
import OfferTajak from '../../components/OfferTajak/OfferTajak'
import CategorySection from '../../components/CategorySection/CategorySection'
import AuthorSection from '../../components/AuthorSection/AuthorSection'
import SaleSection from '../../components/SaleSection/SaleSection'
import PopularSection from '../../components/PopularSection/PopularSection'
import PublisherSection from '../../components/PublisherSection/PublisherSection'
import Footer from '../../components/Footer/Footer'

export default function Home() {
  return (
    <>
    <Header />
    <section className="main font-roya bg-bg ">
      <OfferDay />
      <NewTajak />
      <OfferTajak />
      <CategorySection />
      <AuthorSection />
      <SaleSection />
      <PopularSection />
      <PublisherSection />
    </section>
    <footer className='font-roya bg-bg'>
      <Footer />
    </footer>
    </>
  )
}
