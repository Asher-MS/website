import React from 'react'

import Hero from './Hero'
import CTAGitHub from './CTAGitHub'
import Features from './Features'
import { Footer } from './Footer'
import NavBar from './NavBar'
import UseCases from './UseCases'

const Base = () => (
  <div className="antialiased text-gray-600">
    <NavBar />
    <Hero />
    <Features />
    <UseCases />
    <CTAGitHub />
    <Footer />
  </div>
)

export default Base
