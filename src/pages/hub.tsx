import React from 'react'
import HeroSectionHub from '../hero/HeroSectionHub'

import Meta from '../layout/Meta'
import PageWithHeaderAndFooter from '../layout/PageWithHeaderAndFooter'

const Hub = () => (
  <>
    <Meta
      title="Jina AI | Jina AI is a Neural Search Company"
      description="Open source neural search ecosystem for businesses and developers, allowing anyone to search any kind of data with high availability and scalability."
      canonical="https://jina.ai/"
    />
    <PageWithHeaderAndFooter>
      <HeroSectionHub />
    </PageWithHeaderAndFooter>
  </>
)

export default Hub
