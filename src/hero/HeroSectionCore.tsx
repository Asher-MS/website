import React from 'react'
import { websiteCopyStrings } from '../utils/websiteCopyStrings'
import ProductHeroSection from './ProductHeroSection'

const HeroSectionCore = () => (
  <ProductHeroSection
    illustrationSrc="/assets/images/core-illustration.svg"
    illustrationAlt="Core Image"
    illustrationClasses="w-9/12"
    illustrationPosition="right"
    titlePart1={websiteCopyStrings.corePageHeroSectionTitle}
    description={websiteCopyStrings.corePageHeroSectionDescription}
    descriptionClasses="text-white"
    className="w-4/6 flex flex-col justify-center"
    buttonClasses="w-64"
  />
)

export default HeroSectionCore
