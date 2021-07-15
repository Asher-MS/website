import React from 'react'
import { websiteCopyStrings } from '../utils/websiteCopyStrings'
import ProductHeroSection from './ProductHeroSection'

const HeroSectionDashboard = () => (
  <ProductHeroSection
    illustrationSrc="/assets/images/dashboard-illustration.svg"
    illustrationAlt="Dashboard Image"
    illustrationClasses="w-7/12 ml-20"
    illustrationPosition="right"
    titlePart1={websiteCopyStrings.dashboardPageHeroSectionTitle}
    description={websiteCopyStrings.dashboardPageHeroSectionDescription}
    descriptionClasses="text-white"
    className="w-11/12 flex flex-col justify-center"
    buttonClasses="w-64"
  />
)

export default HeroSectionDashboard
