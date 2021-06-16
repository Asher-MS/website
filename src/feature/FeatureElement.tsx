import React, { ReactNode } from 'react'

type IFeatureElementProps = {
  title: string;
  icon: ReactNode;
  children: ReactNode;
};

const FeatureElement = (props: IFeatureElementProps) => (
  <div className="feature-element flex flex-col">
    <div className="w-12 h-12">{props.icon}</div>

    <div className="mt-2">
      <div className="text-2xl text-gray-900 font-bold">{props.title}</div>
      <div className="mt-2 text-gray-600 font-normal text-base leading-8">{props.children}</div>
    </div>

    <style jsx>
      {`
        .feature-element :global(svg) {
          @apply text-primary-400 stroke-current w-6 h-6 stroke-2;
        }
      `}
    </style>
  </div>
)

export { FeatureElement }
