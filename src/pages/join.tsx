import React from 'react'

import Meta from '../layout/Meta'
import PageWithHeaderAndFooter from '../layout/PageWithHeaderAndFooter'
import HeroSectionJoinPage from '../hero/HeroSectionJoinPage'
import LearnMore from '../template/LearnMore'
import JoinCommunity from '../template/JoinCommunity'

const Join = () => (
  <>
    <Meta
      title="Jina AI | Jina AI is a Neural Search Company"
      description="Open source neural search ecosystem for businesses and developers, allowing anyone to search any kind of data with high availability and scalability."
      canonical="https://jina.ai/"
    />
    <PageWithHeaderAndFooter>
      <HeroSectionJoinPage />
      <JoinCommunity />
      <LearnMore />
    </PageWithHeaderAndFooter>
  </>
)

export default Join
