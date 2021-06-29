import React from 'react'

import Meta from '../layout/Meta'
import PageWithHeaderAndFooter from '../layout/PageWithHeaderAndFooter'
import { Section } from '../layout/Section'
import { websiteCopyStrings } from '../utils/websiteCopyStrings'
import { Button } from '../button/Button'

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
    </PageWithHeaderAndFooter>
  </>
)

export default Learn
