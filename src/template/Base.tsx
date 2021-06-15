import React from 'react'

import { Footer } from './Footer'
import Hero from './Hero'
import NavBar from './NavBar'

const Base = () => (
  <div className="antialiased text-gray-600">
    <NavBar />
    <Hero />
    <Footer />
  </div>
)

export default Base
