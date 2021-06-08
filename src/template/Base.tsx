import React from 'react'

import { Banner } from './Banner'
import { Customer } from './Customer'
import { FAQ } from './FAQ'
import { Features } from './Features'
import { Footer } from './Footer'
import { Hero } from './Hero'
import { Pricing } from './Pricing'
import { Testimonial } from './Testimonial'
import { VerticalFeatures } from './VerticalFeatures'

const Base = () => (
  <div className="antialiased text-gray-600">
    <Hero />
    <Customer />
    <Features />
    <VerticalFeatures />
    <Testimonial />
    <Pricing />
    <FAQ />
    <Banner />
    <Footer />
  </div>
)

export default Base
