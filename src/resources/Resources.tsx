import { Section } from '../layout/Section'
import { websiteCopyStrings } from '../utils/websiteCopyStrings'
import { ResourcesCard } from './ResourcesCard'
import Icon from '../template/Icon'
import React from 'react'

const Resources = () => (
  <Section>
    <div className="text-center font-bold text-4xl mb-20">
      <h2 className="text-black mb-16">
        <span className="text-primary-500">
          {websiteCopyStrings.contributeResourcesHeaderPart1}
        </span>{' '}
        {websiteCopyStrings.contributeResourcesHeaderPart2}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-16 gap-y-16 px-4 md:px-0">
        <ResourcesCard
          title={websiteCopyStrings.contributeResourcesGitHubTitle}
          icon={<Icon name="GitHub" />}
          copy={websiteCopyStrings.contributeResourcesGitHubCopy}
          learnMoreLink={websiteCopyStrings.contributeResourcesGitHubLearnMoreLink}
          buttonColor="rgba(0, 189, 189, 0.1)"
          textColor="#009191"
        />
        <ResourcesCard
          title={websiteCopyStrings.contributeResourcesArticlesTitle}
          icon={<Icon name="articles" />}
          copy={websiteCopyStrings.contributeResourcesArticlesCopy}
          learnMoreLink={websiteCopyStrings.contributeResourcesArticlesLearnMoreLink}
          buttonColor="rgba(243, 183, 129, 0.1)"
          textColor="#F29A71"
        />
        <ResourcesCard
          title={websiteCopyStrings.contributeResourcesSlackTitle}
          icon={<Icon name="Slack" />}
          copy={websiteCopyStrings.contributeResourcesSlackCopy}
          learnMoreLink={websiteCopyStrings.contributeResourcesSlackLearnMoreLink}
          buttonColor="rgba(50, 110, 152, 0.1)"
          textColor="#326E98"
        />
        <ResourcesCard
          title={websiteCopyStrings.contributeResourcesNewsletterTitle}
          icon={<Icon name="newsletter" />}
          copy={websiteCopyStrings.contributeResourcesNewsletterCopy}
          learnMoreLink={websiteCopyStrings.contributeResourcesNewsletterLearnMoreLink}
          buttonColor="rgba(255, 118, 115, 0.1)"
          textColor="#EB6161"
        />
      </div>
    </div>
  </Section>
)

export default Resources
