import React from 'react'
import { websiteCopyStrings } from '../utils/websiteCopyStrings'
import ProductHeroSection from './ProductHeroSection'

const HeroSectionHub = () => (
  <ProductHeroSection
    illustrationSrc="/assets/images/hub-illustration.svg"
    illustrationAlt="Hub Image"
    illustrationClasses="w-7/12 ml-20"
    illustrationPosition="right"
    titlePart1={websiteCopyStrings.hubPageHeroSectionTitle}
    description={websiteCopyStrings.hubPageHeroSectionDescription}
    descriptionClasses="text-white"
    className="w-11/12 flex flex-col justify-center"
    buttonClasses="w-64"
  />
)

export default HeroSectionHub
