import React from 'react'

import Hero from '../hero/Hero'
import CTAGitHub from '../cta/CTAGitHub'
import Features from './Features'
import { Footer } from './Footer'
import NavBar from './NavBar'
import Subscribe from './Subscribe'
import UseCases from './UseCases'
import Demo from './Demo'
import ReleaseBanner from './ReleaseBanner'
import Reviews from './Reviews'
import { CookieConsent } from './CookieConsent'

const Base = () => (
  <div className="antialiased text-gray-600">
    <NavBar />
    <ReleaseBanner />
    <Hero />
    <Features />
    <Demo />
    <UseCases />
    <Reviews />
    <CTAGitHub />
    <Subscribe />
    <CookieConsent />
    <Footer />
  </div>
)

export default Base
