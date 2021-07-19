import React from 'react'

import Meta from '../layout/Meta'
import PageWithHeaderAndFooter from '../layout/PageWithHeaderAndFooter'
import WhyWeStartedJina from '../template/WhyWeStartedJina'
import Offices from '../template/Offices'
import Investors from '../template/Investors'
import HeroSectionAboutPage from '../hero/HeroSectionAboutPage'
import OurCommitments from '../template/OurCommitments'
import HeroSectionContent from '../hero/HeroSectionContent'
import { websiteCopyStrings } from '../utils/websiteCopyStrings'
import { Section } from '../layout/Section'

const About = () => (
  <>
    <Meta
      title="Jina AI | Jina AI is a Neural Search Company"
      description="Open source neural search ecosystem for businesses and developers, allowing anyone to search any kind of data with high availability and scalability."
      canonical="https://jina.ai/"
    />
    <PageWithHeaderAndFooter>
      <HeroSectionAboutPage />
      <OurCommitments />
      <WhyWeStartedJina />
      <Offices />
      <Investors />
      <Section>
        <HeroSectionContent
          titlePart1={websiteCopyStrings.aboutCallToActionTitle}
          description={websiteCopyStrings.aboutCallToActionDescription}
          buttonLabel={websiteCopyStrings.aboutCallToActionCallToActionButton}
          className="flex flex-col items-center"
          buttonClasses="w-64"
        />
      </Section>
    </PageWithHeaderAndFooter>
  </>
)

export default About
