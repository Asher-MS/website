import React from 'react'
import { Section } from '../layout/Section'
import IllustrationWithComponentSideBySide from '../template/IllustrationWithComponentSideBySide'
import { websiteCopyStrings } from '../utils/websiteCopyStrings'
import HeroSectionContent from './HeroSectionContent'

const HeroSectionContributePage = () => {
  return (
    <Section>
      <IllustrationWithComponentSideBySide
        illustrationSrc="/assets/images/illustrations/contribute-illustration.svg"
        illustrationAlt="Careers at Jina image"
        illustrationClasses="w-9/12"
        illustrationPosition="right"
      >
        <HeroSectionContent
          titlePart1={websiteCopyStrings.contributePageHeroSectionTitlePart1}
          titlePart2={websiteCopyStrings.contributePageHeroSectionTitlePart2}
          description={websiteCopyStrings.contributePageHeroSectionDescription}
          buttonLabel={websiteCopyStrings.contributePageHeroSectionButtonLabel}
          className="w-4/6 flex flex-col justify-center"
          buttonClasses="w-64"
        />
      </IllustrationWithComponentSideBySide>
    </Section>
  )
}

export default HeroSectionContributePage
