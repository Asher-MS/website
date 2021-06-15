import React from 'react'
import Link from 'next/link'

import { Background } from '../background/Background'
import { FooterCompanyInfo } from '../footer/FooterCompanyInfo'
import { FooterLinks } from '../footer/FooterLinks'
import { FooterTwoRowsCopyright } from '../footer/FooterTwoRowsCopyright'
import { Section } from '../layout/Section'
import { Config } from '../utils/Config'
import { LogoWhite } from './Logo'
import { websiteCopyStrings } from '../utils/websiteCopyStrings'

const Footer = () => (
  <Background color="bg-primary-500 text-white">
    <Section yPadding="pt-16" className="pt-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-6">
        <div className="col-span-1 sm:col-span-2">
          <FooterCompanyInfo logo={<LogoWhite />} description={Config.description} />
        </div>

        <FooterLinks title={websiteCopyStrings.footerCompany}>
          <li>
            <Link href="/">
              <a>{websiteCopyStrings.footerCompanyAbout}</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>{websiteCopyStrings.footerCompanyCareers}</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>{websiteCopyStrings.footerCompanyContact}</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>{websiteCopyStrings.footerCompanyBlog}</a>
            </Link>
          </li>
        </FooterLinks>
        <FooterLinks title={websiteCopyStrings.footerProducts}>
          <li>
            <Link href="/">
              <a>{websiteCopyStrings.footerProductsCore}</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>{websiteCopyStrings.footerProductsHub}</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>{websiteCopyStrings.footerProductsDashboard}</a>
            </Link>
          </li>
        </FooterLinks>
        <FooterLinks title={websiteCopyStrings.footerDevelopers}>
          <li>
            <Link href="/">
              <a>{websiteCopyStrings.footerDevelopersContribute}</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>{websiteCopyStrings.footerDevelopersLearn}</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>{websiteCopyStrings.footerDevelopersJoin}</a>
            </Link>
          </li>
        </FooterLinks>
        <FooterLinks title={websiteCopyStrings.footerSocials}>
          <li>
            <Link href="/">
              <a>{websiteCopyStrings.footerSocialsGitHub}</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>{websiteCopyStrings.footerSocialsLinkedin}</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>{websiteCopyStrings.footerSocialsTwitter}</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>{websiteCopyStrings.footerSocialsSlack}</a>
            </Link>
          </li>
        </FooterLinks>
      </div>
    </Section>
    <FooterTwoRowsCopyright siteName={Config.site_name}></FooterTwoRowsCopyright>
  </Background>
)

export { Footer }
