'use client'

import React from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import HeroV7 from '@/components/sections/HeroV7'
import IntroSection from '@/components/sections/IntroSection'
import ServicesOverviewV2 from '@/components/sections/ServicesOverviewV2'
import ExpertiseGridV4 from '@/components/sections/ExpertiseGridV4'
import Certifications from '@/components/sections/Certifications'
import GoogleReviews from '@/components/sections/GoogleReviews'
import ContactCTA from '@/components/sections/ContactCTA'

export default function Home7Page() {
  return (
    <main>
      <Header />
      <HeroV7 />
      <IntroSection />
      <ServicesOverviewV2 />
      <ExpertiseGridV4 />
      <Certifications />
      <GoogleReviews />
      <ContactCTA />
      <Footer />
    </main>
  )
}
