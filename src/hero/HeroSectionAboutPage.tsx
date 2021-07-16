import React from 'react'
import { Section } from '../layout/Section'
import { websiteCopyStrings } from '../utils/websiteCopyStrings'
import HeroSectionContent from './HeroSectionContent'

const HeroSectionAboutPage = () => {
  return (
    <div className="about-hero-background">
      <Section className="w-2/3" yPadding="py-60">
        <HeroSectionContent
          titlePart1={websiteCopyStrings.aboutPageHeroSectionTitle}
          description={websiteCopyStrings.aboutPageHeroSectionDescription}
          buttonLabel={websiteCopyStrings.aboutPageHeroSectionButtonLabel}
          className="flex flex-col items-center justify-center text-center"
          descriptionClasses="mb-16 text-gray-600 text-lg w-9/12"
          buttonClasses="w-56"
        />
      </Section>
      <style jsx>
        {`
          .about-hero-background {
            background: url('/assets/images/backgrounds/about-hero-background.svg');
            background-size: cover;
          }
        `}
      </style>
    </div>
  )
}

export default HeroSectionAboutPage
