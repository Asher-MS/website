import React from 'react'
import HeroSectionDashboard from '../hero/HeroSectionDashboard'

import Meta from '../layout/Meta'
import PageWithHeaderAndFooter from '../layout/PageWithHeaderAndFooter'

const Dashboard = () => (
  <>
    <Meta
      title="Jina AI | Jina AI is a Neural Search Company"
      description="Open source neural search ecosystem for businesses and developers, allowing anyone to search any kind of data with high availability and scalability."
      canonical="https://jina.ai/"
    />
    <PageWithHeaderAndFooter>
      <HeroSectionDashboard />
    </PageWithHeaderAndFooter>
  </>
)

export default Dashboard
