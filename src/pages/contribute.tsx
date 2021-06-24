import React from 'react'

import Meta from '../layout/Meta'
import PageWithHeaderAndFooter from '../layout/PageWithHeaderAndFooter'
import { Section } from '../layout/Section'
import Icon from '../template/Icon'
import { ResourcesCard } from '../resources/ResourcesCard'

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
          <h2 className="text-black mb-16">
            <span className="text-primary-500">Resources</span> for contributors
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-16 gap-y-16 px-4 md:px-0">
            <ResourcesCard
              title={'GitHub'}
              icon={<Icon name="GitHub-black" />}
              copy="Our Flow architecture follows a modular design. Easily plug and play with existing solutions!"
              learnMoreLink={'https://github.com/jina-ai/jina'}
              buttonColor="rgba(0, 189, 189, 0.1)"
              textColor="#009191"
            />
            <ResourcesCard
              title={'Articles'}
              icon={<Icon name="articles" />}
              copy="Our Flow architecture follows a modular design. Easily plug and play with existing solutions!"
              learnMoreLink="https://github.com/jina-ai/jina"
              buttonColor="rgba(243, 183, 129, 0.1)"
              textColor="#F29A71"
            />
            <ResourcesCard
              title={'Slack'}
              icon={<Icon name="slack" />}
              copy="Our Flow architecture follows a modular design. Easily plug and play with existing solutions!"
              learnMoreLink="https://join.slack.com/t/jina-ai/shared_invite/zt-rgm1cxdu-v_uuLntO7VB18o8eH_ZHuA"
              buttonColor="rgba(50, 110, 152, 0.1)"
              textColor="#326E98"
            />
            <ResourcesCard
              title={'Newsletter'}
              icon={<Icon name="newsletter" />}
              copy="Our Flow architecture follows a modular design. Easily plug and play with existing solutions!"
              learnMoreLink="https://github.com/jina-ai/jina"
              buttonColor="rgba(255, 118, 115, 0.1)"
              textColor="#EB6161"
            />
          </div>
        </div>
      </Section>
    </PageWithHeaderAndFooter>
  </>
)

export default Contribute
