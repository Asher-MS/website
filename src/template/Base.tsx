import React from 'react'

import CTAGitHub from './CTAGitHub'
import Features from './Features'
import { Footer } from './Footer'
import NavBar from './NavBar'

const Base = () => (
  <div className="antialiased text-gray-600">
    <NavBar />
    <Features />
    <CTAGitHub />
    <Footer />
  </div>
)

export default Base
