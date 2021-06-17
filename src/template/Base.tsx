import React from 'react'

import CTAGitHub from './CTAGitHub'
import { Footer } from './Footer'
import NavBar from './NavBar'

const Base = () => (
  <div className="antialiased text-gray-600">
    <NavBar />
    <CTAGitHub />
    <Footer />
  </div>
)

export default Base
