import React from 'react'
import { Section } from '../layout/Section'
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns'
import { Logo } from './Logo'
import { websiteCopyStrings } from '../utils/websiteCopyStrings'
import Dropdown from '../Dropdown'

const navLinks = [
  {
    label: websiteCopyStrings.navBarProducts,
    items: [
      {
        title: websiteCopyStrings.navBarProductJinaCore,
        description: 'Jina core description',
        icon: 'core',
        link: '/core'
      },
      {
        title: websiteCopyStrings.navBarProductJinaHub,
        description: 'Jina Hub description',
        icon: 'hub',
        link: '/hub'
      },
      {
        title: websiteCopyStrings.navBarProductJinaDashboard,
        description: 'Jina Dashboard description',
        icon: 'dashboard',
        link: '/dashboard'
      }
    ]
  },
  {
    label: websiteCopyStrings.navBarDeveloper,
    items: [
      { title: websiteCopyStrings.navBarDevelopersContribute },
      { title: websiteCopyStrings.navBarDevelopersJoin },
      { title: websiteCopyStrings.navBarDevelopersLearn }
    ]
  },
  {
    label: websiteCopyStrings.navBarCompany,
    items: [
      { title: websiteCopyStrings.navBarCompanyAbout },
      { title: websiteCopyStrings.navBarCompanyCareers },
      { title: websiteCopyStrings.navBarCompanyContact },
      { title: websiteCopyStrings.navBarCompanyBlog }
    ]
  }
]

const NavBar = () => (
  <div className="top-nav-bar">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        {navLinks.map((linkItem) => (
          <li key={linkItem.label}>
            <Dropdown dropDownLabel={linkItem.label} dropDownItems={linkItem.items} />
          </li>
        ))}
      </NavbarTwoColumns>
    </Section>
    <style jsx>
      {`
        .top-nav-bar {
          box-shadow: 3px 6px 33px 0px #cdcdcd40;
        }
      `}
    </style>
  </div>
)

export default NavBar
