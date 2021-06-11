import React from 'react'

type ILogoProps = {
  xl?: boolean;
};

const Logo = (props: ILogoProps) => {
  const fontStyle = props.xl ? 'font-semibold text-3xl' : 'font-semibold text-xl'

  return (
    <div className={`text-gray-900 flex items-center ${fontStyle}`}>
      <img
        src="/assets/images/logo.svg"
        alt="Jina.ai logo"
        className={props.xl ? 'w-24' : 'w-20'}
      />
    </div>
  )
}

const LogoWhite = (props: ILogoProps) => {
  const fontStyle = props.xl ? 'font-semibold text-3xl' : 'font-semibold text-xl'

  return (
    <div className={`text-gray-900 flex items-center ${fontStyle}`}>
      <img
        src="/assets/images/logo-white.svg"
        alt="Jina.ai logo"
        className={props.xl ? 'w-24' : 'w-20'}
      />
    </div>
  )
}

export { Logo, LogoWhite }
