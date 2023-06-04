import React from 'react'
import { FaqSection } from '../components/PricingPage/FaqSection/FaqSection'
import { PricingpageHeader } from '../components/PricingPage/PricingpageHeader/PricingpageHeader'
import { Footer } from '../components/Utils/Footer/Footer'

export const Pricingpage: React.FC = () => {
  return (
    <>
    <PricingpageHeader />
    <FaqSection />
    <Footer />
    </>
  )
}