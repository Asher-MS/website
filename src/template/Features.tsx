import React from 'react'

import { FeatureElement } from '../feature/FeatureElement'
import { Section } from '../layout/Section'
import { websiteCopyStrings } from '../utils/websiteCopyStrings'

const Features = () => (
  <Section
    title="Your title here"
    subtitle="Features"
    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus malesuada nisi tellus, non imperdiet nisi tempor at."
  >
    <div className="text-center font-bold text-4xl mb-8">
      <h2 className="text-black">
        Why <span className="text-primary-500">Jina</span>
      </h2>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-16">
      <FeatureElement
        title={websiteCopyStrings.valuePropositionTimeSaverTitle}
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M0 0h24v24H0z" stroke="none" />
            <path d="M21 12h-4l-3 8-4-16-3 8H3" />
          </svg>
        }
      >
        {websiteCopyStrings.valuePropositionTimeSaverDescription}
      </FeatureElement>
      <FeatureElement
        title={websiteCopyStrings.valuePropositionDataSupportTitle}
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M0 0h24v24H0z" stroke="none" />
            <path d="M12 12v.01M19.071 4.929a4 10 45 00-9.9 4.243 4 10 45 00-4.242 9.9 4 10 45 009.9-4.244 4 10 45 004.242-9.9" />
            <path d="M4.929 4.929a10 4 45 004.243 9.9 10 4 45 009.9 4.242 10 4 45 00-4.244-9.9 10 4 45 00-9.9-4.242" />
          </svg>
        }
      >
        {websiteCopyStrings.valuePropositionDataSupportDescription}
      </FeatureElement>
      <FeatureElement
        title={websiteCopyStrings.valuePropositionCommunityDrivenTitle}
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M0 0h24v24H0z" stroke="none" />
            <path d="M3 17l6-6 4 4 8-8" />
            <path d="M14 7h7v7" />
          </svg>
        }
      >
        {websiteCopyStrings.valuePropositionCommunityDrivenDescription}
      </FeatureElement>
      <FeatureElement
        title={websiteCopyStrings.valuePropositionPlugAndPlayTitle}
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M0 0h24v24H0z" stroke="none" />
            <path d="M3 17l6-6 4 4 8-8" />
            <path d="M14 7h7v7" />
          </svg>
        }
      >
        {websiteCopyStrings.valuePropositionPlugAndPlayDescription}
      </FeatureElement>
    </div>
  </Section>
)

export default Features
