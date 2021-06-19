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
    {(props.title || props.subtitle || props.description) && (
      <div className="mb-12 text-center">
        {props.subtitle && (
          <div className="text-primary-500 text-sm font-bold">{props.subtitle}</div>
        )}
        {props.title && <h2 className="text-4xl text-gray-900 font-bold">{props.title}</h2>}
        {props.description && <div className="mt-4 text-xl md:px-20">{props.description}</div>}
      </div>
    )}

    {props.children}
  </div>
)

export { Section }
