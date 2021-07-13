import React from 'react'

import Meta from '../layout/Meta'
import PageWithHeaderAndFooter from '../layout/PageWithHeaderAndFooter'
import Resources from '../resources/Resources'
import ProjectGallery from '../template/ProjectGallery'

const Contribute = () => (
  <>
    <Meta
      title="Jina AI | Jina AI is a Neural Search Company"
      description="Open source neural search ecosystem for businesses and developers, allowing anyone to search any kind of data with high availability and scalability."
      canonical="https://jina.ai/"
    />
    <PageWithHeaderAndFooter>
      <Resources />
      <ProjectGallery />
    </PageWithHeaderAndFooter>
  </>
)

export default Contribute
