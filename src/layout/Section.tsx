import React, { ReactNode } from 'react'

type ISectionProps = {
  title?: string;
  subtitle?: string;
  description?: string;
  yPadding?: string;
  children: ReactNode;
};

const Section = (props: ISectionProps) => (
  <div
    className={`lg:max-w-screen-lg xl:max-w-screen-2xl mx-auto px-3 ${
      props.yPadding ? props.yPadding : 'py-16'
    }`}
  >
    {props.children}
  </div>
)

export { Section }
