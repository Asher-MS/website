import React from 'react'
import Link from 'next/link'
import { Section } from '../layout/Section'
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns'
import { Logo } from './Logo'

const NavBar = () => (
  <Section yPadding="py-6">
    <NavbarTwoColumns logo={<Logo xl />}>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/">
          <a>Products</a>
        </Link>
      </li>
      <li>
        <Link href="/">
          <a>Developer</a>
        </Link>
      </li>
      <li>
        <Link href="/">
          <a>Company</a>
        </Link>
      </li>
    </NavbarTwoColumns>
  </Section>
)

export default NavBar
