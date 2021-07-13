import React from 'react'

import Hero from '../hero/Hero'
import CTAGitHub from '../cta/CTAGitHub'
import Features from './Features'
import { Footer } from './Footer'
import NavBar from './NavBar'
import Subscribe from './Subscribe'
import UseCases from './UseCases'
import Demo from './Demo'
import Reviews from './Reviews'

const Base = () => (
  <div className="antialiased text-gray-600">
    <NavBar />
    <Hero />
    <Features />
    <Demo />
    <UseCases />
    <Reviews />
    <CTAGitHub />
    <Subscribe />
    <Footer />
  </div>
)

export default Base
