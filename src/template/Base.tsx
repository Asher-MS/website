import React from 'react'

import { Banner } from './Banner'
import { Customer } from './Customer'
import { FAQ } from './FAQ'
import { Features } from './Features'
import { Footer } from './Footer'
import { Hero } from './Hero'
import NavBar from './NavBar'
import { Pricing } from './Pricing'
import { Testimonial } from './Testimonial'
import { VerticalFeatures } from './VerticalFeatures'
import UseCases from './UseCases'

const Base = () => (
  <div className="antialiased text-gray-600">
    <NavBar />
    <Hero />
    <Customer />
    <Features />
    <VerticalFeatures />
    <Testimonial />
    <UseCases />
    <Pricing />
    <FAQ />
    <Banner />
    <Footer />
  </div>
)

export default Base
