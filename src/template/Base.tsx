import React from 'react'

import Hero from './Hero'
import CTAGitHub from './CTAGitHub'
import Features from './Features'
import { Footer } from './Footer'
import NavBar from './NavBar'

const Base = () => (
  <div className="antialiased text-gray-600">
    <NavBar />
    <Hero />
    <Features />
    <CTAGitHub />
    <Footer />
  </div>
)

export default Base
