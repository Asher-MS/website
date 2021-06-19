import React from 'react'

import Hero from './Hero'
import Features from './Features'
import { Footer } from './Footer'
import NavBar from './NavBar'

const Base = () => (
  <div className="antialiased text-gray-600">
    <NavBar />
    <Hero />
    <Features />
    <Footer />
  </div>
)

export default Base
