import React from 'react'

import Meta from '../layout/Meta'
import PageWithHeaderAndFooter from '../layout/PageWithHeaderAndFooter'
import WhyWeStartedJina from '../template/WhyWeStartedJina'
import Offices from '../template/Offices'
import Investors from '../template/Investors'
import HeroSectionAboutPage from '../hero/HeroSectionAboutPage'
import OurCommitments from '../template/OurCommitments'

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
    </PageWithHeaderAndFooter>
  </>
)

export default About
