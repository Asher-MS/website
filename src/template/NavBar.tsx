import React from 'react'
import Link from 'next/link'
import { Section } from '../layout/Section'
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns'
import { Logo } from './Logo'

const NavBar = () => (
  <Section yPadding="py-3">
    <NavbarTwoColumns logo={<Logo xl />}>
      <li>
        <Link href="/">
          <a>Docs</a>
        </Link>
      </li>
      <li>
        <Link href="/">
          <a>Blog</a>
        </Link>
      </li>
      <li>
        <Link href="/">
          <a>Sign in</a>
        </Link>
      </li>
    </NavbarTwoColumns>
  </Section>
)

export default NavBar
