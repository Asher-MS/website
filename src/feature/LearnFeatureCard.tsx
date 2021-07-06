import React, { ReactNode } from 'react'

type ILearnFeatureCardProps = {
  children: ReactNode;
  copy: string;
  linkList: string[][];
};

const LearnFeatureCard = ({ children, copy, linkList }: ILearnFeatureCardProps) => (
  <div className="flex flex-col w-7/12 mt-8 mb-8">
    {children}
    <p className="mt-2 text-gray-600 font-normal text-base leading-8 mb-4 mt-4">{copy}</p>
    <ul>
      {linkList.map(([description, link], idx) => (
        <li key={idx} className="mb-3">
          <a href={link} target="_blank" rel="noreferrer" className="flex flex-row">
            <img className="mr-2" src="/assets/images/arrow-right-red.svg" />
            <span> {description}</span>
          </a>
        </li>
      ))}
    </ul>
  </div>
)

export { LearnFeatureCard }
