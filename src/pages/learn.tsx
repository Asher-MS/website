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
      <Section yPadding="py-0">
        <div className="introduction flex items-center flex-col py-32">
          <style jsx>
            {`
              .introduction {
                background-image: url('/assets/images/learn-background.svg');
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
      </Section>

      <Section>
        <div className="grid grid-cols-2 p-48">
          <LearnFeatureCard
            copy="Data is transforming nowadays while the design pattern to process such information needs to be up to date."
            linkList={[
              ['What is Neural Search?', 'https://jina.ai/'],
              ['Install Jina', 'www.golem.de']
            ]}
          >
            <div className="flex flex-row items-center font-bold text-5xl">
              <img src="/assets/images/star-icon.svg" className="mr-4" />
              <p>
                New to <span>jina</span>
              </p>
            </div>
          </LearnFeatureCard>
          <LearnFeatureCard
            copy="Data is transforming nowadays while the design pattern to process such information needs to be up to date."
            linkList={[
              ['What is Neural Search?', 'https://jina.ai/'],
              ['Install Jina', 'www.golem.de']
            ]}
          >
            <div className="flex flex-row items-center font-bold text-5xl">
              <img src="/assets/images/star-icon.svg" className="mr-4" />
              <p>
                New to <span>jina</span>
              </p>
            </div>
          </LearnFeatureCard>
          <LearnFeatureCard
            copy="Data is transforming nowadays while the design pattern to process such information needs to be up to date."
            linkList={[
              ['What is Neural Search?', 'https://jina.ai/'],
              ['Install Jina', 'www.golem.de']
            ]}
          >
            <div className="flex flex-row items-center font-bold text-5xl">
              <img src="/assets/images/star-icon.svg" className="mr-4" />
              <p>
                New to <span>jina</span>
              </p>
            </div>
          </LearnFeatureCard>
          <LearnFeatureCard
            copy="Data is transforming nowadays while the design pattern to process such information needs to be up to date."
            linkList={[
              ['What is Neural Search?', 'https://jina.ai/'],
              ['Install Jina', 'www.golem.de']
            ]}
          >
            <div className="flex flex-row items-center font-bold text-5xl">
              <img src="/assets/images/star-icon.svg" className="mr-4" />
              <p>
                New to <span>jina</span>
              </p>
            </div>
          </LearnFeatureCard>
          <LearnFeatureCard
            copy="Data is transforming nowadays while the design pattern to process such information needs to be up to date."
            linkList={[
              ['What is Neural Search?', 'https://jina.ai/'],
              ['Install Jina', 'www.golem.de']
            ]}
          >
            <div className="flex flex-row items-center font-bold text-5xl">
              <img src="/assets/images/star-icon.svg" className="mr-4" />
              <p>
                New to <span>jina</span>
              </p>
            </div>
          </LearnFeatureCard>
        </div>
      </Section>
    </PageWithHeaderAndFooter>
  </>
)

export default Learn
