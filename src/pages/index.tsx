import React from 'react'

import Base from '../template/Base'
import Meta from '../layout/Meta'

const Index = () => (
  <>
    <Meta
      title="Jina AI | Jina AI is a Neural Search Company"
      description="Open source neural search ecosystem for businesses and developers, allowing anyone to search any kind of data with high availability and scalability."
      canonical="https://jina.ai/"
    />
    <Base />
    <style global jsx>{`
      body {
        font-family: Poppins;
      }
    `}</style>
  </>
)

export default Index
