import React from 'react'

import Hero from '../hero/Hero'
import CTAGitHub from '../cta/CTAGitHub'
import Features from './Features'
import { Footer } from './Footer'
import NavBar from './NavBar'
import HeroAnimation from '../hero/HeroAnimation'

const Base = () => (
  <div className="antialiased text-gray-600">
    <NavBar />
    <Hero />
    <HeroAnimation />
    <Features />
    <CTAGitHub />
    <Footer />
  </div>
)

export default Base
