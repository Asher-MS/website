import React from 'react'
import { Section } from '../layout/Section'
import { websiteCopyStrings } from '../utils/websiteCopyStrings'
import HeroSectionContent from './HeroSectionContent'

const HeroSectionLearnPage = () => {
  return (
    <div className="learn-hero-background">
      <Section className="w-1/2 py-40" yPadding="py-40">
        <HeroSectionContent
          titlePart1={websiteCopyStrings.aboutPageHeroSectionTitle}
          description={websiteCopyStrings.aboutPageHeroSectionDescription}
          buttonLabel={websiteCopyStrings.aboutPageHeroSectionButtonLabel}
          className="flex flex-col items-center justify-center text-center"
        />
      </Section>
      <style jsx>
        {`
          .about-hero-background {
            background: url('/assets/images/learn-hero-background.svg');
            background-size: 100% 135%;
          }
        `}
      </style>
    </div>
  )
}

export default HeroSectionLearnPage
