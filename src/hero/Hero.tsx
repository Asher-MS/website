import React from 'react'

import { websiteCopyStrings } from '../utils/websiteCopyStrings'
import { Background } from '../background/Background'
import { Button } from '../button/Button'
import { Section } from '../layout/Section'
import HeroAnimation from './HeroAnimation'

const Hero = () => (
  <Background color="bg-white" className="relative overflow-hidden -z-10">
    <Section yPadding="pt-20 pb-3">
      <h1 className="text-7xl font-bold text-black w-6/12">{websiteCopyStrings.heroHeadline}</h1>
      <p className="w-4/12">{websiteCopyStrings.heroDescription}</p>
      <div className="flex mt-8 mb-40">
        <Button primary className="w-56 py-5 mr-10">
          {websiteCopyStrings.heroPrimaryButton}
        </Button>
        <Button secondary className="w-56 py-5">
          {websiteCopyStrings.heroSecondaryButton}
        </Button>
      </div>
    </Section>
    <HeroAnimation />
  </Background>
)

export default Hero
