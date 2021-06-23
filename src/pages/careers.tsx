import React from 'react'

import Meta from '../layout/Meta'
import PageWithHeaderAndFooter from '../layout/PageWithHeaderAndFooter'
import WorkingWithUs from '../template/WorkingWithUs'
import WhatWeStandFor from '../template/WhatWeStandFor'

const Careers = () => (
  <>
    <Meta
      title="Jina AI | Jina AI is a Neural Search Company"
      description="Open source neural search ecosystem for businesses and developers, allowing anyone to search any kind of data with high availability and scalability."
      canonical="https://jina.ai/"
    />
    <PageWithHeaderAndFooter>
      <WhatWeStandFor />
      <WorkingWithUs />
    </PageWithHeaderAndFooter>
  </>
)

export default Careers
