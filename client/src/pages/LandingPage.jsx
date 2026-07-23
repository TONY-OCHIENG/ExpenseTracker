import React from 'react'
import NavBar from '../components/Navbar'
import Hero from './Hero'
import Features from './Features'
import Testimonials from './Testimonials'
import Contact from './Contact'
import Footer from './Footer'

function LandingPage() {
  return (
    <div>
        <NavBar/>
        <Hero/>
        <Features/>
        <Testimonials/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default LandingPage