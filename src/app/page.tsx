'use client'

import React from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import HeroV7 from '@/components/sections/HeroV7'
import IntroSection from '@/components/sections/IntroSection'
import ForbesBanner from '@/components/sections/ForbesBanner'
import ServicesOverview from '@/components/sections/ServicesOverview'
import ExpertiseGridV4 from '@/components/sections/ExpertiseGridV4'
import Certifications from '@/components/sections/Certifications'
import GoogleReviews from '@/components/sections/GoogleReviews'
import ContactCTA from '@/components/sections/ContactCTA'

export default function HomePage() {
  return (
    <main>
      <Header />
      <HeroV7 />
      <IntroSection />
      <ServicesOverview />
      <ExpertiseGridV4 />
      <Certifications />
      <GoogleReviews />
      <ContactCTA />
      <ForbesBanner />
      <Footer />
    </main>
  )
}
