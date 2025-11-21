import React from 'react'
import Hero from '../components/sections/Hero'
import Services from '../components/sections/Services'
import Gallery from '../components/sections/Gallery'
import FooterSection from '../components/sections/Footer'
import BookingForm from '../components/sections/BookingForm';

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <Gallery />
      <BookingForm />
      <FooterSection />
    </div>
  )
}
