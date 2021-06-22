import React from 'react'
import Link from 'next/link'

import { Background } from '../background/Background'
import { FooterCompanyInfo } from '../footer/FooterCompanyInfo'
import { FooterLinks } from '../footer/FooterLinks'
import { FooterTwoRowsCopyright } from '../footer/FooterTwoRowsCopyright'
import { Config } from '../utils/Config'
import { LogoWhite } from './Logo'
import { websiteCopyStrings } from '../utils/websiteCopyStrings'

const Footer = () => (
  <div>
    <Background color="bg-primary-500" className="text-white">
      <div className="flex justify-between">
        <div className="footer-left-margin"></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 py-16">
          <div className="col-span-1">
            <FooterCompanyInfo logo={<LogoWhite />} description={Config.description} />
          </div>

          <FooterLinks title={websiteCopyStrings.footerCompany}>
            <li>
              <Link href="/about">
                <a>{websiteCopyStrings.footerCompanyAbout}</a>
              </Link>
            </li>
            <li>
              <Link href="/careers">
                <a>{websiteCopyStrings.footerCompanyCareers}</a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a>{websiteCopyStrings.footerCompanyContact}</a>
              </Link>
            </li>
            <li>
              <Link href="/blog">
                <a>{websiteCopyStrings.footerCompanyBlog}</a>
              </Link>
            </li>
          </FooterLinks>
          <FooterLinks title={websiteCopyStrings.footerProducts}>
            <li>
              <Link href="/core">
                <a>{websiteCopyStrings.footerProductsCore}</a>
              </Link>
            </li>
            <li>
              <Link href="/hub">
                <a>{websiteCopyStrings.footerProductsHub}</a>
              </Link>
            </li>
            <li>
              <Link href="/dashboard">
                <a>{websiteCopyStrings.footerProductsDashboard}</a>
              </Link>
            </li>
          </FooterLinks>
          <FooterLinks title={websiteCopyStrings.footerDevelopers}>
            <li>
              <Link href="/contribute">
                <a>{websiteCopyStrings.footerDevelopersContribute}</a>
              </Link>
            </li>
            <li>
              <Link href="/learn">
                <a>{websiteCopyStrings.footerDevelopersLearn}</a>
              </Link>
            </li>
            <li>
              <Link href="/join">
                <a>{websiteCopyStrings.footerDevelopersJoin}</a>
              </Link>
            </li>
          </FooterLinks>
          <FooterLinks title={websiteCopyStrings.footerSocials}>
            <li>
              <Link href="https://github.com/jina-ai/jina/">
                <a>{websiteCopyStrings.footerSocialsGitHub}</a>
              </Link>
            </li>
            <li>
              <Link href="https://www.linkedin.com/company/jinaai/">
                <a>{websiteCopyStrings.footerSocialsLinkedin}</a>
              </Link>
            </li>
            <li>
              <Link href="https://twitter.com/jinaAI_/">
                <a>{websiteCopyStrings.footerSocialsTwitter}</a>
              </Link>
            </li>
            <li>
              <Link href="https://jina-ai.slack.com/">
                <a>{websiteCopyStrings.footerSocialsSlack}</a>
              </Link>
            </li>
          </FooterLinks>
        </div>
        <div className="footer-right-margin"></div>
      </div>
      <FooterTwoRowsCopyright siteName={Config.site_name}></FooterTwoRowsCopyright>
    </Background>
    <style jsx>
      {`
        .footer-left-margin {
          width: 40rem;
          height: inherit;
          background: no-repeat 40% 20% / 20% url('/assets/images/planet-beige.svg');
        }
        .footer-right-margin {
          width: 16rem;
          height: inherit;
          background: no-repeat 10% 10% / 50% url('/assets/images/planet-green.svg');
        }
      `}
    </style>
  </div>
)

export { Footer }
