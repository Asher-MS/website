import React from 'react'
import Link from 'next/link'
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
        icon: 'core'
      },
      {
        title: websiteCopyStrings.navBarProductJinaHub,
        description: 'Jina Hub description',
        icon: 'hub'
      },
      {
        title: websiteCopyStrings.navBarProductJinaDashboard,
        description: 'Jina Dashboard description',
        icon: 'dashboard'
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
  <Section yPadding="py-6">
    <NavbarTwoColumns logo={<Logo xl />}>
      <li className="text-primary-500 font-bold">
        <Link href="/">
          <a>{websiteCopyStrings.navBarHome}</a>
        </Link>
      </li>
      {navLinks.map((linkItem) => (
        <li key={linkItem.label}>
          <Dropdown dropDownLabel={linkItem.label} dropDownItems={linkItem.items} />
        </li>
      ))}
    </NavbarTwoColumns>
  </Section>
)

export default NavBar
