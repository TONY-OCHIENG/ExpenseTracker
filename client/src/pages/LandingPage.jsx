import React from 'react'
import NavBar from '../components/Navbar'
import Hero from './Hero'
import Features from './Features'
import Testimonials from './Testimonials'

function LandingPage() {
  return (
    <div>
        <NavBar/>
        <Hero/>
        <Features/>
        <Testimonials/>
    </div>
  )
}

export default LandingPage