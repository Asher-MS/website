import React from 'react'

import Meta from '../layout/Meta'
import PageWithHeaderAndFooter from '../layout/PageWithHeaderAndFooter'
import Installation from '../template/Installation'

const Core = () => (
  <>
    <Meta
      // Todo: Ideally, we should have different titles for different pages
      title="Jina AI | Jina AI is a Neural Search Company"
      description="Open source neural search ecosystem for businesses and developers, allowing anyone to search any kind of data with high availability and scalability."
      canonical="https://jina.ai/"
    />
    <PageWithHeaderAndFooter>
      <Installation />
    </PageWithHeaderAndFooter>
  </>
)

export default Core
