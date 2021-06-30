import React, { ReactNode } from 'react'

type ILearnFeatureCardProps = {
  children: ReactNode;
  copy: string;
  linkList: [string, string][];
};

const LearnFeatureCard = ({ children, copy, linkList }: ILearnFeatureCardProps) => (
  <div className="flex flex-col">
    {children}
    <p className="mt-2 text-gray-600 font-normal text-base leading-8">{copy}</p>
    <ul>
      {linkList.map(([description, link], idx) => (
        <li key={idx}>
          <a href={link} target="_blank" rel="noreferrer" className="flex flex-row">
            <img src="/assets/images/arrow-right-red.svg" />
            <span> {description}</span>
          </a>
        </li>
      ))}
    </ul>
  </div>
)

export { LearnFeatureCard }
