import React, { ReactNode } from 'react'
import { DivProps } from '../button/Button'

interface ISectionProps extends DivProps {
  title?: string;
  subtitle?: string;
  description?: string;
  yPadding?: string;
  children: ReactNode;
}

const Section = (props: ISectionProps) => (
  <div
    className={`md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-2xl mx-auto px-3 ${
      props.yPadding ? props.yPadding : 'py-16'
    } ${props.className}`}
  >
    {props.children}
  </div>
)

export { Section }
