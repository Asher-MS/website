import React from 'react'
import { DivProps } from '../button/Button'

export type HeaderStrings = [string, boolean][];

interface HeaderProps extends DivProps {
  headerStrings: HeaderStrings;
}

const Header = ({ headerStrings, className }: HeaderProps) => (
  <h2 className={`text-center font-bold  mb-10 ${className}`}>
    {headerStrings.map((tuple, index) => (
      <span key={`header-part-${index}`} className={'' + (tuple[1] && 'text-primary-500')}>
        {tuple[0]}
      </span>
    ))}
  </h2>
)

export default Header
