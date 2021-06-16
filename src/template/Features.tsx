import React from 'react'

import { FeatureElement } from '../feature/FeatureElement'
import { Section } from '../layout/Section'
import { websiteCopyStrings } from '../utils/websiteCopyStrings'
import Icon from './Icon'

const Features = () => (
  <Section>
    <div className="text-center font-bold text-4xl mb-20">
      <h2 className="text-black">
        Why <span className="text-primary-500">Jina</span>
      </h2>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-16 gap-y-16 px-4 md:px-0">
      <FeatureElement
        title={websiteCopyStrings.valuePropositionTimeSaverTitle}
        icon={<Icon name="time" />}
      >
        {websiteCopyStrings.valuePropositionTimeSaverDescription}
      </FeatureElement>
      <FeatureElement
        title={websiteCopyStrings.valuePropositionDataSupportTitle}
        icon={<Icon name="data" />}
      >
        {websiteCopyStrings.valuePropositionDataSupportDescription}
      </FeatureElement>
      <FeatureElement
        title={websiteCopyStrings.valuePropositionCommunityDrivenTitle}
        icon={<Icon name="people" />}
      >
        {websiteCopyStrings.valuePropositionCommunityDrivenDescription}
      </FeatureElement>
      <FeatureElement
        title={websiteCopyStrings.valuePropositionPlugAndPlayTitle}
        icon={<Icon name="plug-and-play" />}
      >
        {websiteCopyStrings.valuePropositionPlugAndPlayDescription}
      </FeatureElement>
    </div>
  </Section>
)

export default Features
