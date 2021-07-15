import React from 'react'

import Meta from '../layout/Meta'
import PageWithHeaderAndFooter from '../layout/PageWithHeaderAndFooter'
import Offices from '../template/Offices'
import WorkingWithUs from '../template/WorkingWithUs'
import WhatWeStandFor from '../template/WhatWeStandFor'
import MeetOurTeam from '../template/MeetOurTeam'
import HeroSectionCareersPage from '../hero/HeroSectionCareersPage'

const Careers = () => (
  <>
    <Meta
      title="Jina AI | Jina AI is a Neural Search Company"
      description="Open source neural search ecosystem for businesses and developers, allowing anyone to search any kind of data with high availability and scalability."
      canonical="https://jina.ai/"
    />
    <PageWithHeaderAndFooter>
      <HeroSectionCareersPage />
      <WhatWeStandFor />
      <MeetOurTeam />
      <WorkingWithUs />
      <Offices />
    </PageWithHeaderAndFooter>
  </>
)

export default Careers
