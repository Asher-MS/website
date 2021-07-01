import React from 'react'
import { Section } from '../layout/Section'
import IllustrationWithComponentSideBySide from '../template/IllustrationWithComponentSideBySide'

const HeroSectionCareersPage = () => {
  return (
    <Section>
      <IllustrationWithComponentSideBySide
        illustrationSrc="/assets/images/careers-illustration.svg"
        illustrationAlt="Careers at Jina image"
        illustrationClasses="w-1/2"
      ></IllustrationWithComponentSideBySide>
    </Section>
  )
}

export default HeroSectionCareersPage
