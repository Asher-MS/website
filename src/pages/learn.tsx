import React from 'react'

import Meta from '../layout/Meta'
import PageWithHeaderAndFooter from '../layout/PageWithHeaderAndFooter'
import { Section } from '../layout/Section'
import { websiteCopyStrings } from '../utils/websiteCopyStrings'
import { Button } from '../button/Button'
import { LearnFeatureCard } from '../feature/LearnFeatureCard'

const Learn = () => (
  <>
    <Meta
      title="Jina AI | Jina AI is a Neural Search Company"
      description="Open source neural search ecosystem for businesses and developers, allowing anyone to search any kind of data with high availability and scalability."
      canonical="https://jina.ai/"
    />
    <PageWithHeaderAndFooter>
      <div className="introduction flex items-center flex-col py-32 w-screen">
        <style jsx>
          {`
            .introduction {
              background-image: url('/assets/images/learn-background.svg');
              background-repeat: no-repeat;
              background-position: center;
            }
          `}
        </style>
        <h1 className="text-6xl font-bold text-black w-6/12 text-center mb-4">
          <span>{websiteCopyStrings.learnHeadlinePart1}</span>
          <span className="text-primary-500">{websiteCopyStrings.learnHeadlinePart2}</span>
          <span>{websiteCopyStrings.learnHeadlinePart3}</span>
        </h1>
        <p className="w-4/12 text-center mb-8 text-gray-600">
          {websiteCopyStrings.learnDescription}
        </p>
        <Button primary className="w-64 py-2">
          {websiteCopyStrings.learnDocumentationButton}
        </Button>
      </div>

      <Section>
        <div className="grid grid-cols-2 place-items-center ">
          <LearnFeatureCard
            copy={websiteCopyStrings.learnCardNewCopy}
            linkList={websiteCopyStrings.learnCardNewLinkList}
          >
            <div className="flex flex-row items-center font-bold text-4xl">
              <img src="/assets/images/star-icon.svg" className="mr-4" />
              <p>
                {websiteCopyStrings.learnCardNewTitleUncolored}{' '}
                <span className="text-amber-500">
                  {websiteCopyStrings.learnCardNewTitleColored}
                </span>
              </p>
            </div>
          </LearnFeatureCard>
          <LearnFeatureCard
            copy={websiteCopyStrings.learnCardGetStartedCopy}
            linkList={websiteCopyStrings.learnCardGetStartedLinkList}
          >
            <div className="flex flex-row items-center font-bold text-4xl">
              <img src="/assets/images/rocket-icon.svg" className="mr-4" />
              <p>
                {websiteCopyStrings.learnCardGetStartedTitleUncolored}{' '}
                <span className="text-red-400">
                  {websiteCopyStrings.learnCardGetStartedTitleColored}
                </span>
              </p>
            </div>
          </LearnFeatureCard>
          <LearnFeatureCard
            copy={websiteCopyStrings.learnCardExploreCopy}
            linkList={websiteCopyStrings.learnCardExploreLinkList}
          >
            <div className="flex flex-row items-center font-bold text-4xl">
              <img src="/assets/images/explore-icon.svg" className="mr-4" />
              <p>
                {websiteCopyStrings.learnCardExploreTitleUncolored}
                <span className="text-primary-500">
                  {websiteCopyStrings.learnCardExploreTitleColored}
                </span>
              </p>
            </div>
          </LearnFeatureCard>
          <LearnFeatureCard
            copy={websiteCopyStrings.learnCardVideoCopy}
            linkList={websiteCopyStrings.learnCardVideoLinkList}
          >
            <div className="flex flex-row items-center font-bold text-4xl">
              <img src="/assets/images/video-icon.svg" className="mr-4" />
              <p>
                {websiteCopyStrings.learnCardVideoTitleUncolored}{' '}
                <span className="text-primary-700">
                  {websiteCopyStrings.learnCardVideoTitleColored}
                </span>
              </p>
            </div>
          </LearnFeatureCard>
          <LearnFeatureCard
            copy={websiteCopyStrings.learnCardInspiredCopy}
            linkList={websiteCopyStrings.learnCardInspiredLinkList}
          >
            <div className="flex flex-row items-center font-bold text-4xl w-screen">
              <img src="/assets/images/light-bulb-icon.svg" className="mr-4 " />
              <p>
                <span className="text-amber-600">
                  {websiteCopyStrings.learnCardInspiredTitleColored}
                </span>{' '}
                {websiteCopyStrings.learnCardInspiredTitleUncolored}
              </p>
            </div>
          </LearnFeatureCard>
          <LearnFeatureCard
            copy={websiteCopyStrings.learnCardProductivityCopy}
            linkList={websiteCopyStrings.learnCardProductivityLinkList}
          >
            <div className="flex flex-row items-center font-bold text-4xl ">
              <img src="/assets/images/tips-icon.svg" className="mr-4" />
              <p>
                <span className="text-red-300">
                  {websiteCopyStrings.learnCardProductivityTitleColored}
                </span>{' '}
                {websiteCopyStrings.learnCardProductivityTitleUncolored}
              </p>
            </div>
          </LearnFeatureCard>
        </div>
      </Section>
    </PageWithHeaderAndFooter>
  </>
)

export default Learn
