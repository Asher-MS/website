import React from 'react'

import { FeatureElement } from '../feature/FeatureElement'
import Header from './Header'
import { Section } from '../layout/Section'
import { websiteCopyStrings } from '../utils/websiteCopyStrings'
import Icon from './Icon'

const OurCommitments = () => (
  <Section yPadding="pb-16">
    <Header
      className="text-black"
      headerStrings={[
        [websiteCopyStrings.aboutCommitmentsTitlePart1, false],
        [websiteCopyStrings.aboutCommitmentsTitlePart2, true]
      ]}
    />
    <div className="grid grid-cols-1 md:grid-cols-3 gap-x-16 gap-y-16 px-4 md:px-0">
      <FeatureElement
        title={websiteCopyStrings.aboutCommitmentsItem1Subtitle}
        icon={<Icon name="people" />}
      >
        {websiteCopyStrings.aboutCommitmentsItem1Description}
      </FeatureElement>
      <FeatureElement
        title={websiteCopyStrings.aboutCommitmentsItem2Subtitle}
        icon={<Icon name="chat" />}
      >
        {websiteCopyStrings.aboutCommitmentsItem2Description}
      </FeatureElement>
      <FeatureElement
        title={websiteCopyStrings.aboutCommitmentsItem3Subtitle}
        icon={<Icon name="settings" />}
      >
        {websiteCopyStrings.aboutCommitmentsItem3Description}
      </FeatureElement>
    </div>
  </Section>
)

export default OurCommitments
