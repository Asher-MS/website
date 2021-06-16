import React from 'react'

import Features from './Features'
import { Footer } from './Footer'
import NavBar from './NavBar'

const Base = () => (
  <div className="antialiased text-gray-600">
    <NavBar />
    <Features />
    <Footer />
  </div>
)

export default Base
