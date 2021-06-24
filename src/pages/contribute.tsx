import React from 'react'

import Meta from '../layout/Meta'
import PageWithHeaderAndFooter from '../layout/PageWithHeaderAndFooter'
import { Section } from '../layout/Section'
import { FeatureElement } from '../feature/FeatureElement'
import { websiteCopyStrings } from '../utils/websiteCopyStrings'
import Icon from '../template/Icon'

const Contribute = () => (
  <>
    <Meta
      title="Jina AI | Jina AI is a Neural Search Company"
      description="Open source neural search ecosystem for businesses and developers, allowing anyone to search any kind of data with high availability and scalability."
      canonical="https://jina.ai/"
    />
    <PageWithHeaderAndFooter>
      <Section>
        <div className="text-center font-bold text-4xl mb-20">
          <h2 className="text-black">
            <span className="text-primary-500">Resources</span> for contributors
          </h2>

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
        </div>
      </Section>
    </PageWithHeaderAndFooter>
  </>
)

export default Contribute
