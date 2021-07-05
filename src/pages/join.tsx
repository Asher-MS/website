import React from 'react'
import HeroSectionJoinPage from '../hero/HeroSectionJoinPage'

import Meta from '../layout/Meta'
import PageWithHeaderAndFooter from '../layout/PageWithHeaderAndFooter'

const Join = () => (
  <>
    <Meta
      title="Jina AI | Jina AI is a Neural Search Company"
      description="Open source neural search ecosystem for businesses and developers, allowing anyone to search any kind of data with high availability and scalability."
      canonical="https://jina.ai/"
    />
    <PageWithHeaderAndFooter>
      <HeroSectionJoinPage />
    </PageWithHeaderAndFooter>
  </>
)

export default Join
