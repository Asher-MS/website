import React from 'react'

export type HeaderStrings = [string, boolean][];

type HeaderProps = {
  headerStrings: HeaderStrings;
};

const Header = ({ headerStrings }: HeaderProps) => (
  <h2 className="text-center font-bold text-4xl mb-10">
    {headerStrings.map((tuple, index) => (
      <span key={`header-part-${index}`} className={'' + (tuple[1] && 'text-primary-500')}>
        {tuple[0]}
      </span>
    ))}
  </h2>
)

export default Header
