import React from 'react'
import { DivProps } from '../button/Button'
import { Footer } from '../template/Footer'
import NavBar from '../template/NavBar'

interface PageWithHeaderAndFooterProps extends DivProps {}

const PageWithHeaderAndFooter = ({ children }: PageWithHeaderAndFooterProps) => {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  )
}

export default PageWithHeaderAndFooter
