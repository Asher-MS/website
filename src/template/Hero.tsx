import React from 'react'

import { websiteCopyStrings } from '../utils/websiteCopyStrings'
import { Background } from '../background/Background'
import { Button } from '../button/Button'
import { Section } from '../layout/Section'

const Hero = () => (
  <Background color="bg-white">
    <Section yPadding="pt-20 pb-3">
      <h1 className="text-8xl font-bold text-black w-5/12">{websiteCopyStrings.heroHeadline}</h1>
      <p className="w-4/12">{websiteCopyStrings.heroDescription}</p>
      <div className="flex mt-8 mb-40">
        <Button className="w-56 py-5 mr-10">{websiteCopyStrings.heroPrimaryButton}</Button>
        <Button secondary className="w-56 py-5">
          {websiteCopyStrings.heroSecondaryButton}
        </Button>
      </div>
    </Section>
  </Background>
)

export default Hero
