import React from 'react'
import Link from 'next/link'
import { Section } from '../layout/Section'
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns'
import { Logo } from './Logo'
import { websiteCopyStrings } from '../utils/websiteCopyStrings'

const NavBar = () => (
  <Section yPadding="py-6">
    <NavbarTwoColumns logo={<Logo xl />}>
      <li>
        <Link href="/">
          <a>{websiteCopyStrings.navBarHome}</a>
        </Link>
      </li>
      <li>
        <Link href="/">
          <a>{websiteCopyStrings.navBarProducts}</a>
        </Link>
      </li>
      <li>
        <Link href="/">
          <a>{websiteCopyStrings.navBarDeveloper}</a>
        </Link>
      </li>
      <li>
        <Link href="/">
          <a>{websiteCopyStrings.navBarCompany}</a>
        </Link>
      </li>
    </NavbarTwoColumns>
  </Section>
)

export default NavBar
