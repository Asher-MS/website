import React from 'react'
import { Section } from '../layout/Section'
import IllustrationWithComponentSideBySide from '../template/IllustrationWithComponentSideBySide'
import { websiteCopyStrings } from '../utils/websiteCopyStrings'
import HeroSectionContent from './HeroSectionContent'

const HeroSectionCareersPage = () => {
  return (
    <Section>
      <IllustrationWithComponentSideBySide
        illustrationSrc="/assets/images/careers-illustration.svg"
        illustrationAlt="Careers at Jina image"
        illustrationClasses="w-1/2"
      >
        <HeroSectionContent
          titlePart1={websiteCopyStrings.careersPageHeroSectionTitlePart1}
          titlePart2={websiteCopyStrings.careersPageHeroSectionTitlePart2}
          description={websiteCopyStrings.careersPageHeroSectionDescription}
          buttonLabel={websiteCopyStrings.careersPageHeroSectionButtonLabel}
          className="w-4/6 ml-8"
        />
      </IllustrationWithComponentSideBySide>
    </Section>
  )
}

export default HeroSectionCareersPage
