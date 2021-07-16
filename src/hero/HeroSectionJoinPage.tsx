import React from 'react'
import { Section } from '../layout/Section'
import { websiteCopyStrings } from '../utils/websiteCopyStrings'
import HeroSectionContent from './HeroSectionContent'

const HeroSectionJoinPage = () => {
  return (
    <div className="join-hero-background">
      <Section className="w-1/2" yPadding="py-60">
        <HeroSectionContent
          titlePart1={websiteCopyStrings.joinPageHeroSectionTitle}
          description={websiteCopyStrings.joinPageHeroSectionDescription}
          buttonLabel={websiteCopyStrings.joinPageHeroSectionButtonLabel}
          className="flex flex-col items-center justify-center text-center"
          descriptionClasses="mb-16 text-gray-600 text-lg w-9/12"
          buttonClasses="w-56"
        />
      </Section>
      <style jsx>
        {`
          .join-hero-background {
            background: url('/assets/images/backgrounds/join-hero-background.svg');
            background-size: cover;
          }
        `}
      </style>
    </div>
  )
}

export default HeroSectionJoinPage
