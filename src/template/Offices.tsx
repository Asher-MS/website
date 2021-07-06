import React from 'react'
import { Section } from '../layout/Section'
import { websiteCopyStrings } from '../utils/websiteCopyStrings'
import Icon from './Icon'

const officesData = [
  {
    icon: 'Berlin',
    titlePart1: websiteCopyStrings.Offices1TitlePart1,
    titlePart2: websiteCopyStrings.Offices1TitlePart2,
    description: websiteCopyStrings.Offices1Description,
    textClassName: 'text-primary-500'
  },
  {
    icon: 'Beijing',
    titlePart1: websiteCopyStrings.Offices2TitlePart1,
    titlePart2: websiteCopyStrings.Offices1TitlePart2,
    description: websiteCopyStrings.Offices2Description,
    textClassName: 'text-red-500'
  },
  {
    icon: 'globe',
    titlePart2: websiteCopyStrings.Offices3TitlePart2,
    description: websiteCopyStrings.Offices3Description,
    textClassName: 'text-yellow-500'
  }
]

const Offices = () => {
  return (
    <Section>
      <div className="text-center font-bold text-4xl mb-20">
        <h2 className="text-black">
          <span>{websiteCopyStrings.OfficesSecionTitlePart1}</span>
          <span>&nbsp;</span>
          <span className="text-primary-500">{websiteCopyStrings.OfficesSecionTitlePart2}</span>
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-y-16 px-4 md:px-0">
        {officesData.map((office) => (
          <div className="flex flex-col items-center" key={office.titlePart2}>
            <Icon name={office.icon} />
            <h4 className="font-bold text-2xl my-4">
              <span>{office.titlePart1}</span>
              &nbsp;
              <span className={office.textClassName}>{office.titlePart2}</span>
            </h4>
            <p className="text-gray-600">{office.description}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}

export default Offices
